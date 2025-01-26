import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function ConfirmationScreen() {

  return (
    <View>
      <Text>Booking Confirmed!</Text>
      <QRCode />
    </View>
  );
} 