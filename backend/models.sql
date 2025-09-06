create table users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text unique,         -- can duplicate auth.users.email for easier querying
  avatar_url text,
  headline text,             -- e.g. "Frontend Developer | React + Node.js"
  location text,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

create table resumes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text,
  template_id int,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

create table sections (
  id uuid primary key default gen_random_uuid(),
  resume_id uuid references resumes(id) on delete cascade,
  name text,                 -- "Experience", "Education", or custom
  order_no int,              -- supports drag-and-drop ordering
  created_at timestamp default now()
);

create table items (
  id uuid primary key default gen_random_uuid(),
  section_id uuid references sections(id) on delete cascade,
  title text,                -- "Software Engineer"
  subtitle text,             -- "Google"
  start_date date,
  end_date date,
  content text,              -- rich text field (details/description)
  order_no int
);
