import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Error fetching user:', error.message);
    } else {
      setUser(data.user);
      console.log(data.user);
    }

  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const updateUser = (newUser) => {
    fetchUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}; 