-- Add SELECT policy to deny all public access to contact_submissions
-- Only authenticated users with proper roles should be able to read contact submissions
-- Since this is a lead capture form, no public user should ever read the data

-- First, add a policy that denies all SELECT operations for anonymous users
-- By having RLS enabled with no SELECT policy, Postgres defaults to deny
-- But we'll add an explicit policy that only allows service_role access

CREATE POLICY "Only service role can read submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated, anon
USING (false);

-- Add explicit UPDATE policy to prevent any updates from regular users
CREATE POLICY "Only service role can update submissions" 
ON public.contact_submissions 
FOR UPDATE 
TO authenticated, anon
USING (false);

-- Add explicit DELETE policy to prevent any deletions from regular users  
CREATE POLICY "Only service role can delete submissions" 
ON public.contact_submissions 
FOR DELETE 
TO authenticated, anon
USING (false);