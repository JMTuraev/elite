import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function UserPhotos({ photos }) {
  if (!photos || photos.length === 0) return null; // Agar photos bo'lmasa hech narsa ko'rsatmaymiz

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Photos</Text>

      <FlatList
        data={photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.photosWrapper}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.photoItem} />
        )}
      />
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
  photosWrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
    gap: 10,
  },
  photoItem: {
    width: 140,
    height: 180,
    borderRadius: 12,
    marginRight: 10,
  },
});
