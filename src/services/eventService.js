import { supabase } from './supabaseClient';

export const fetchEvents = async () => {
  const { data, error } = await supabase
    .from('events') // Replace 'events' with your actual table name
    .select('*'); // Adjust the select statement as needed

  if (error) {
    console.error('Error fetching events:', error.message);
    return [];
  }

  return data; // Return the fetched data
}; 