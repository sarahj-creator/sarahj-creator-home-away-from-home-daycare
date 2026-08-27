/*
# Create enquiries table for Home Away from Home Daycare

1. New Tables
- `enquiries`
  - `id` (uuid, primary key, default gen_random_uuid())
  - `created_at` (timestamptz, default now())
  - `parent_name` (text, not null) — name of the parent/guardian submitting the enquiry
  - `email` (text, not null) — contact email
  - `phone` (text) — contact phone number
  - `preferred_contact_method` (text, not null) — 'phone' | 'whatsapp' | 'email'
  - `child_name` (text) — first name of the child
  - `child_age` (text) — age of the child (free text, since ages vary)
  - `preferred_start_date` (date) — when the parent would like to start
  - `enquiry_type` (text, not null) — comma-separated list: 'daycare', 'babysitting', 'booking_a_visit', 'general_enquiry'
  - `message` (text) — optional message from the parent
  - `status` (text, not null, default 'new') — enquiry status for admin tracking: 'new' | 'contacted' | 'enrolled' | 'closed'

2. Security
- Enable RLS on `enquiries`.
- Allow anon + authenticated INSERT so parents can submit enquiries without signing in.
- No SELECT/UPDATE/DELETE for anon — only the service role (server-side) can read or manage enquiries.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  parent_name text NOT NULL,
  email text NOT NULL,
  phone text,
  preferred_contact_method text NOT NULL DEFAULT 'email',
  child_name text,
  child_age text,
  preferred_start_date date,
  enquiry_type text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
