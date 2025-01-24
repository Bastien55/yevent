import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function ConfirmationScreen({ route }) {
  const { booking } = route.params;

  return (
    <View>
      <Text>Booking Confirmed!</Text>
      <Text>Confirmation Number: {booking.confirmationNumber}</Text>
      <QRCode value={booking.confirmationNumber} />
    </View>
  );
} 