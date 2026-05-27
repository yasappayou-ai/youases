DROP POLICY IF EXISTS "Anyone can subscribe to waitlist" ON public.waitlist_subscribers;

CREATE POLICY "Anyone can subscribe with a valid email"
ON public.waitlist_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND length(email) BETWEEN 5 AND 320
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);