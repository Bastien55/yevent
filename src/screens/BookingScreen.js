import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { supabase } from '../services/supabaseClient';
import { navigate } from '../services/navigationService';
import { UserContext } from '../contexts/UserContext';

export default function BookingScreen({ route }) {
  const { event } = route.params; // Assuming concertId is passed as a parameter
  const [tickets, setTickets] = useState('1');
  const {user} = useContext(UserContext);

  const handleBooking = async () => {
    if (!tickets) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    console.log(event);
    const { data, error } = await supabase
      .from('bookings')
      .insert([{ evenement_id: event.id, utilisateur_id: user.id, nombre_de_billets: parseInt(tickets, 10) }]);

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Your booking has been confirmed');
      navigate('Confirmation');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Ticket</Text>
      <TextInput
        style={styles.input}
        placeholder="Number of Tickets"
        value={tickets}
        onChangeText={setTickets}
        keyboardType="numeric"
      />
      <Button title="Validate" onPress={handleBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
}); 