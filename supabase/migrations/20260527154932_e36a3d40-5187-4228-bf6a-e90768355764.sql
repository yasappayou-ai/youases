CREATE TABLE public.waitlist_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'landing',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.waitlist_subscribers TO anon, authenticated;
GRANT ALL ON public.waitlist_subscribers TO service_role;

ALTER TABLE public.waitlist_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to sign up (insert only)
CREATE POLICY "Anyone can subscribe to waitlist"
ON public.waitlist_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies = nobody can read/modify via API; only service_role bypasses RLS.