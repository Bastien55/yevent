import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet } from 'react-native';
import { supabase } from '../services/supabaseClient';
import { navigate } from '../services/navigationService';

export default function HomeScreen() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase.from('events').select('*');
    if (error) {
      console.error(error);
    } else {
      setEvents(data);
    }
    setLoading(false);
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} \n ${hours}:${minutes}`;
  };

  if (loading) return <Text>Loading...</Text>;
  if (events.length === 0) return <Text>No events available</Text>;

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.eventContainer}>
          <Image source={{ uri: item.image }} style={styles.eventImage} />
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>{formatDateTime(item.date)}</Text>
          <Button title="View Details" onPress={() => navigate('EventDetails', { event: item })} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  eventContainer: {
    margin: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  eventImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left', // Aligns the date and time to the right
  },
}); 