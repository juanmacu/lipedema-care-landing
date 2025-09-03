-- Create user roles enum for medical staff authorization
CREATE TYPE public.medical_role AS ENUM ('admin', 'doctor', 'staff');

-- Create user_roles table to manage medical staff access
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role medical_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check medical staff roles
CREATE OR REPLACE FUNCTION public.has_medical_role(_user_id UUID, _role medical_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if user is any type of medical staff
CREATE OR REPLACE FUNCTION public.is_medical_staff(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'doctor', 'staff')
  )
$$;

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_medical_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_medical_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_medical_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_medical_role(auth.uid(), 'admin'));

-- CRITICAL: Secure the medical data with proper RLS policies
-- Only authorized medical staff can view patient submissions
CREATE POLICY "Medical staff can view form submissions"
ON public.form_submissions_lipedema
FOR SELECT
TO authenticated
USING (public.is_medical_staff(auth.uid()));

-- Doctors and admins can update submissions (for notes, status, etc.)
CREATE POLICY "Doctors and admins can update submissions"
ON public.form_submissions_lipedema
FOR UPDATE
TO authenticated
USING (
  public.has_medical_role(auth.uid(), 'doctor') OR 
  public.has_medical_role(auth.uid(), 'admin')
);

-- Only admins can delete submissions (for GDPR compliance)
CREATE POLICY "Admins can delete submissions"
ON public.form_submissions_lipedema
FOR DELETE
TO authenticated
USING (public.has_medical_role(auth.uid(), 'admin'));