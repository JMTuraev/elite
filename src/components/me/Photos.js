import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Photos({ photos = [], max = 15, onUpgrade }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Album ({photos.length}/{max})</Text>
        <TouchableOpacity onPress={onUpgrade}>
          <Text style={styles.upgrade}>Upgrade</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {photos.map((photo, index) => (
          <View key={index} style={styles.photo} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1d',
    marginHorizontal: 24,
    marginVertical: 14,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  upgrade: {
    color: '#00cfc8',
    fontWeight: '600',
    fontSize: 13,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  photo: {
    width: 60,
    height: 60,
    backgroundColor: '#333',
    borderRadius: 10,
  },
});
