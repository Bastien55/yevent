import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function EventMap({ events, onMarkerPress }) {
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState({
    latitude: 37.78825, // Default latitude
    longitude: -122.4324, // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
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
            onPress={() => onMarkerPress(event)} // Call the handler on marker press
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