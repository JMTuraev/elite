import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InterestsSection({ tags }) {
  if (!tags || tags.length === 0) return null; // Agar tags bo'lmasa hech narsa ko'rsatmaymiz

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Interests</Text>
      <View style={styles.wrapper}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>📌 {tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
});
