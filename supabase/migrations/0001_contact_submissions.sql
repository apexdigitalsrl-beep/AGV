-- Leads submitted via the landing page contact form.
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- RLS bypasses table-level grants, not replaces them — service_role still
-- needs base privileges on the table to read/write at all.
grant all on public.contact_submissions to service_role;

-- Deliberately no policies: RLS is enabled with a default-deny posture for
-- every role (anon, authenticated). The contact form never talks to
-- Supabase from the browser — the Next.js Server Action is the only writer,
-- and it authenticates with the service role key, which bypasses RLS by
-- design for trusted server-side code. If a client-side read/write path is
-- ever added, it must get its own explicit, least-privilege policy here.
comment on table public.contact_submissions is
  'Leads from the landing page contact form. Written only by the server (service role key); RLS is deny-by-default for anon/authenticated roles.';
