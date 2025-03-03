import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fetchEvents } from '../services/eventService';
import { navigate } from '../services/navigationService';

export default function EventMap() {
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState({
    latitude: 37.78825, // Default latitude
    longitude: -122.4324, // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [events, setEvents] = useState([]);

  const handleMarkerPress = (event) => {
    navigate('EventDetails', { event });
  };

  const loadEvents = async () => {
    const fetchedEvents = await fetchEvents(); // Fetch all events
    setEvents(fetchedEvents);
    setLoading(false);
  };

  useEffect(() => {
    loadEvents();

    if (events.length > 0) {
      const firstEvent = events[0];
      setRegion({
        latitude: firstEvent.latitude,
        longitude: firstEvent.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
    setLoading(false);
  }, [events]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true} // Show user's location
      >
        {events.map((event) => (
          <Marker
            key={event.id}
            coordinate={{
              latitude: event.latitude,
              longitude: event.longitude,
            }}
            title={event.title}
            description={`Date: ${event.date}`}
            onPress={() => handleMarkerPress(event)} // Call the handler on marker press
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
}); 