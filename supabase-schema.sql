-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Rooms table
create table public.rooms (
  id uuid default uuid_generate_v4() primary key,
  nomor_kamar text not null,
  lantai integer not null,
  tipe text not null,
  kapasitas_dewasa integer not null default 2,
  kapasitas_anak integer not null default 1,
  luas numeric,
  tarif_dasar numeric not null default 0,
  penyesuaian_weekend numeric default 0,
  fasilitas jsonb default '[]'::jsonb,
  channel_manager jsonb default '[]'::jsonb,
  foto jsonb default '[]'::jsonb,
  status text not null default 'available',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexes
create index idx_rooms_nomor_kamar on public.rooms(nomor_kamar);
create index idx_rooms_lantai on public.rooms(lantai);
create index idx_rooms_tipe on public.rooms(tipe);
create index idx_rooms_status on public.rooms(status);

-- Updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at
  before update on public.rooms
  for each row execute function public.handle_updated_at();

-- Enable Row Level Security
alter table public.rooms enable row level security;

-- Policies
create policy "Allow public read access to rooms"
  on public.rooms for select
  to public
  using (true);

create policy "Allow public insert access to rooms"
  on public.rooms for insert
  to public
  with check (true);

create policy "Allow public update access to rooms"
  on public.rooms for update
  to public
  using (true);

create policy "Allow public delete access to rooms"
  on public.rooms for delete
  to public
  using (true);
