import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button, Image } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { fetchEvents } from '../services/eventService';
import EventMap from './EventMap';
import { navigate } from '../services/navigationService';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
  const { user } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const loadEvents = async () => {
        const fetchedEvents = await fetchEvents(); // Fetch all events
        setEvents(fetchedEvents);
        setLoading(false);
      };

      loadEvents();
    }, [])
  );

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} \n ${hours}:${minutes}`;
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Image source={{ uri: item.image }} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{formatDateTime(item.date)}</Text>
            <Text>{item.location}</Text>
            <Button title="View Details" onPress={() => navigate('EventDetails', { event: item })} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  eventImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  eventItem: {
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
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left', // Aligns the date and time to the right
  },
}); 