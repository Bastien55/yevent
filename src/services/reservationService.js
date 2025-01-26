import { supabase } from './supabaseClient';

export const fetchReservationsWithEvents = async (userId) => {
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      events (
        id,
        title,
        date,
        location,
        image
      )
    `)
    .eq('utilisateur_id', userId); // Assuming you filter by user ID

  if (error) {
    console.error('Error fetching reservations:', error.message);
    return [];
  }

  return data; // This will return reservations with associated event data
}; 