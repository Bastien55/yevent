import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { supabase } from '../services/supabaseClient';
import { UserContext } from '../contexts/UserContext';

export default function UserProfileScreen() {
  const { user: currentUser, loading: userLoading } = useContext(UserContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      fetchProfile();
    }
  }, [currentUser]);

  const fetchProfile = async () => {
    try {
      const userId = currentUser.id;
      console.log(userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('picture, display_name')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error.message);
        Alert.alert('Error', 'Could not fetch profile data');
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      Alert.alert('Error', 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (userLoading || loading) return <Text>Loading profile...</Text>;
  if (!profile) return <Text>No profile data available</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: profile.picture }} style={styles.profileImage} />
      <Text style={styles.displayName}>{profile.display_name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  displayName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 