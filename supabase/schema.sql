-- Relationship Goals App — Supabase Schema
-- Run in Supabase SQL editor

-- =====================
-- user_progress
-- =====================
create table if not exists public.user_progress (
  user_id             uuid primary key references auth.users(id) on delete cascade,
  current_day         integer default 0,
  streak              integer default 0,
  total_completed     integer default 0,
  vacation_credits    integer default 0,
  last_unlocked_date  date,
  last_completed_date date,
  program             text default 'reconnect',
  pledge_type         text default 'daily',   -- 'daily' | 'annual'
  created_at          timestamptz default now(),
  updated_at          timestamptz default now()
);

alter table public.user_progress enable row level security;
create policy "Users manage own progress"
  on public.user_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- =====================
-- mission_history
-- =====================
create table if not exists public.mission_history (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid references auth.users(id) on delete cascade,
  mission_id      integer,
  mission_title   text,
  mission_emoji   text,
  completed_at    timestamptz default now(),
  credits_earned  integer default 1,
  reflection_text text
);

alter table public.mission_history enable row level security;
create policy "Users manage own history"
  on public.mission_history for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- =====================
-- user_coupons
-- =====================
create table if not exists public.user_coupons (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references auth.users(id) on delete cascade,
  brand       text not null,
  title       text not null,
  value       text not null,           -- e.g. '$10 off'
  code        text not null,
  expires_at  date not null,
  used        boolean default false,
  earned_at   timestamptz default now()
);

alter table public.user_coupons enable row level security;
create policy "Users manage own coupons"
  on public.user_coupons for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- =====================
-- scenario_submissions  (community feed → The Column)
-- =====================
create table if not exists public.scenario_submissions (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid references auth.users(id) on delete set null,
  category        text,
  scenario        text not null,
  question        text,
  opt_in_column   boolean default false,
  reviewed        boolean default false,
  submitted_at    timestamptz default now()
);

-- Admin only — no user RLS (submissions are anonymous/moderated)
alter table public.scenario_submissions enable row level security;
create policy "Insert own submission"
  on public.scenario_submissions for insert
  with check (true);

-- =====================
-- user_profiles
-- =====================
create table if not exists public.user_profiles (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  full_name     text,
  phone         text,
  partner_name  text,
  partner_email text,
  partner_phone text,
  nooworld_id   text,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

alter table public.user_profiles enable row level security;
create policy "Users manage own profile"
  on public.user_profiles for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
