-- Module 2: Academic Core Tables

-- 1. Courses Table
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    credits NUMERIC(3,1) NOT NULL,
    department TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enrollments Table (linking students to courses, including attendance)
CREATE TABLE IF NOT EXISTS public.enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
    semester TEXT NOT NULL,
    classes_attended INTEGER DEFAULT 0,
    total_classes INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(student_id, course_id, semester)
);

-- 3. Assessments Table (for grades and exams)
CREATE TABLE IF NOT EXISTS public.assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enrollment_id UUID REFERENCES public.enrollments(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    type TEXT CHECK (type IN ('CT', 'Midterm', 'Final', 'Assignment', 'Lab')),
    total_marks NUMERIC(5,2) NOT NULL,
    obtained_marks NUMERIC(5,2),
    exam_date TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Courses: Everyone can read courses
CREATE POLICY "Courses are viewable by everyone." 
ON public.courses FOR SELECT USING (true);

-- Enrollments: Students can only read their own enrollments. Faculty/Office can manage all (simplified for MVP).
CREATE POLICY "Students can view their own enrollments." 
ON public.enrollments FOR SELECT 
USING (auth.uid() = student_id);

-- Assessments: Students can only read assessments linked to their enrollments.
CREATE POLICY "Students can view their own assessments." 
ON public.assessments FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM public.enrollments 
        WHERE enrollments.id = assessments.enrollment_id 
        AND enrollments.student_id = auth.uid()
    )
);

-- Insert dummy data function for testing (Optional utility)
CREATE OR REPLACE FUNCTION public.seed_academic_data(p_student_id UUID)
RETURNS void AS $$
DECLARE
    v_course1 UUID;
    v_course2 UUID;
    v_enrollment1 UUID;
    v_enrollment2 UUID;
BEGIN
    -- Insert courses
    INSERT INTO public.courses (code, name, credits, department) VALUES
    ('AERO 301', 'Aerodynamics I', 3.0, 'Aerospace Engineering') RETURNING id INTO v_course1;
    
    INSERT INTO public.courses (code, name, credits, department) VALUES
    ('AERO 305', 'Flight Mechanics', 3.0, 'Aerospace Engineering') RETURNING id INTO v_course2;

    -- Insert enrollments
    INSERT INTO public.enrollments (student_id, course_id, semester, classes_attended, total_classes) VALUES
    (p_student_id, v_course1, '5th Semester', 22, 25) RETURNING id INTO v_enrollment1;

    INSERT INTO public.enrollments (student_id, course_id, semester, classes_attended, total_classes) VALUES
    (p_student_id, v_course2, '5th Semester', 15, 25) RETURNING id INTO v_enrollment2;

    -- Insert assessments (Grades / Upcoming Exams)
    -- Completed
    INSERT INTO public.assessments (enrollment_id, title, type, total_marks, obtained_marks, exam_date) VALUES
    (v_enrollment1, 'Class Test 1', 'CT', 20, 18, NOW() - INTERVAL '14 days');
    
    INSERT INTO public.assessments (enrollment_id, title, type, total_marks, obtained_marks, exam_date) VALUES
    (v_enrollment2, 'Class Test 1', 'CT', 20, 15, NOW() - INTERVAL '10 days');

    -- Upcoming
    INSERT INTO public.assessments (enrollment_id, title, type, total_marks, obtained_marks, exam_date) VALUES
    (v_enrollment1, 'Midterm Examination', 'Midterm', 100, NULL, NOW() + INTERVAL '5 days');
    
    INSERT INTO public.assessments (enrollment_id, title, type, total_marks, obtained_marks, exam_date) VALUES
    (v_enrollment2, 'Midterm Examination', 'Midterm', 100, NULL, NOW() + INTERVAL '7 days');

END;
$$ LANGUAGE plpgsql;
