
// import { createClient } from '@supabase/supabase-js';

// export const supabase = createClient(
//   "https://adnteftmqytcnieqmlma.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbnRlZnRtcXl0Y25pZXFtbG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTM0NTUsImV4cCI6MjA2ODY2OTQ1NX0.w4oLhu7sVeMvXGbr0oX1MtWk3CEdS97Saonwz7WENrw"
  
// );



// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://adnteftmqytcnieqmlma.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbnRlZnRtcXl0Y25pZXFtbG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTM0NTUsImV4cCI6MjA2ODY2OTQ1NX0.w4oLhu7sVeMvXGbr0oX1MtWk3CEdS97Saonwz7WENrw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Since you're not using authentication
  }
})

// Add a test function to verify connection
export const testSupabaseConnection = async () => {
  try {
    console.log('Testing Supabase connection...');
    const { data, error } = await supabase
      .from('members')
      .select('email')
      .limit(5);
    
    if (error) {
      console.error('Supabase connection test failed:', error);
      return false;
    }
    
    console.log('Supabase connection test successful. Sample data:', data);
    return true;
  } catch (error) {
    console.error('Supabase connection test exception:', error);
    return false;
  }
};

// Test member lookup by email
export const testMemberLookup = async (email: string) => {
  try {
    console.log('Testing member lookup for:', email);
    const { data, error } = await supabase
      .from('members')
      .select('id, email, name')
      .eq('email', email.toLowerCase());
    
    console.log('Member lookup result:', { data, error });
    return { data, error };
  } catch (error) {
    console.error('Member lookup test exception:', error);
    return { data: null, error };
  }
};