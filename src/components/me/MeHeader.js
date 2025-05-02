import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MeHeader() {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.header}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    paddingVertical: 14,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
