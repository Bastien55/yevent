import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { navigate } from '../services/navigationService';

export default function EventDetailsScreen({ route, navigation }) {
  const { event } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: event.title });
  }, [navigation, event.title]);

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.eventDate}>{formatDateTime(event.date)}</Text>
      <Text style={styles.eventLocation}>{event.location}</Text>
      <Text style={styles.eventDescription}>{event.description}</Text>
      <Text style={styles.ticketsInfo}>
        Tickets Available: {event.remaining_tickets} / {event.capacity}
      </Text>
      <Button
        title="Book Tickets"
        onPress={() => {
          navigate('Booking', { event: event })
         } }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20, // Global margin for left and right
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventImage: {
    width: '100%',
    height: '65%',
    borderRadius: 8,
    marginBottom: 20,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eventDate: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  eventLocation: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  ticketsInfo: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10
  },
}); 