-- Leads submitted via the landing page qualification form (below the Hero).
create table if not exists public.lead_qualifications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  phone text not null,
  industry text not null,
  business_service text not null,
  lead_package text not null check (
    lead_package in ('web-500', 'audit-web-700', 'system-1500', 'not-sure')
  ),
  task_automation_value smallint not null check (task_automation_value between 1 and 5),
  notes text,
  created_at timestamptz not null default now()
);

alter table public.lead_qualifications enable row level security;

-- RLS bypasses table-level grants, not replaces them — service_role still
-- needs base privileges on the table to read/write at all.
grant all on public.lead_qualifications to service_role;

-- Deliberately no policies: RLS is enabled with a default-deny posture for
-- every role (anon, authenticated). The form never talks to Supabase from
-- the browser — the Next.js Server Action is the only writer, and it
-- authenticates with the service role key, which bypasses RLS by design
-- for trusted server-side code.
comment on table public.lead_qualifications is
  'Qualified leads from the landing page diagnostic form. Written only by the server (service role key); RLS is deny-by-default for anon/authenticated roles.';
