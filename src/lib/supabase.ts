import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface EnquiryRow {
  id: string;
  created_at: string;
  parent_name: string;
  email: string;
  phone: string | null;
  preferred_contact_method: string;
  child_name: string | null;
  child_age: string | null;
  preferred_start_date: string | null;
  enquiry_type: string;
  message: string | null;
  status: string;
}

export interface EnquiryInsert {
  parent_name: string;
  email: string;
  phone?: string | null;
  preferred_contact_method: string;
  child_name?: string | null;
  child_age?: string | null;
  preferred_start_date?: string | null;
  enquiry_type: string;
  message?: string | null;
}
