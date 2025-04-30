import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NameLocation({ name, age, location }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>
        {name}, {age}
      </Text>
      <Text style={styles.locationText}>{location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 12,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  locationText: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 4,
  },
});
