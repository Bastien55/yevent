import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { fetchReservationsWithEvents } from '../services/reservationService';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect

export default function ListBooksScreen() {
  const { user } = useContext(UserContext);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const loadReservations = async () => {
        if (user) {
          const fetchedReservations = await fetchReservationsWithEvents(user.id);
          setReservations(fetchedReservations);
        }
        setLoading(false);
      };

      loadReservations();
    }, [user]) // Dependency array includes user to refetch if user changes
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.reservationItem}>
            <View style={styles.textContainer}>
              <Text style={styles.reservationText}>Event: {item.events.title}</Text>
              <Text style={styles.reservationText}>Date: {item.events.date}</Text>
              <Text style={styles.reservationText}>Location: {item.events.location}</Text>
              <Text style={styles.reservationText}>Tickets: {item.nombre_de_billets}</Text>
            </View>
            <Image
              source={{ uri: item.events.image }} // Ensure this field exists in your event data
              style={styles.eventImage}
            />
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
  reservationItem: {
    flexDirection: 'row', // Align items in a row
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center', // Center items vertically
  },
  eventImage: {
    width: 50, // Set the width of the image
    height: 50, // Set the height of the image
    marginLeft: 10, // Space between the text and the image
    borderRadius: 5, // Optional: round the corners of the image
  },
  textContainer: {
    flex: 1, // Allow text to take the remaining space
  },
  reservationText: {
    fontSize: 16,
  },
}); 