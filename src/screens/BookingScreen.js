import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { supabase } from '../services/supabaseClient';

export default function BookingScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ticketCount, setTicketCount] = useState('');
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const { data: user, error: userError } = await supabase.auth.getUser();
      if (userError) {
        console.error('Error fetching user:', userError.message);
        Alert.alert('Error', 'User not authenticated');
        setLoading(false);
        return;
      }

      const userId = user?.id;
      if (!userId) {
        console.error('User ID is undefined');
        Alert.alert('Error', 'User ID is undefined');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('utilisateur_id', userId);

      if (error) {
        console.error('Error fetching reservations:', error.message);
        Alert.alert('Error', 'Could not fetch reservations');
      } else {
        setReservations(data);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      Alert.alert('Error', 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = () => {
    // Handle booking logic
  };

  if (loading) return <Text>Loading reservations...</Text>;
  if (reservations.length === 0) return <Text>No reservations available</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.reservationItem}>
            <Text style={styles.reservationText}>Event: {item.event_name}</Text>
            <Text style={styles.reservationText}>Date: {item.date}</Text>
            <Text style={styles.reservationText}>Tickets: {item.ticket_count}</Text>
          </View>
        )}
      />
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Ticket Count" value={ticketCount} onChangeText={setTicketCount} keyboardType="numeric" />
      <Button title="Book" onPress={handleBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  reservationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  reservationText: {
    fontSize: 16,
  },
}); 