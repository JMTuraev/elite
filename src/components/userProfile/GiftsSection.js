import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GiftsSection({ gifts, onSendGift }) {
  if (!gifts || gifts.length === 0) return null; // Agar gifts bo'lmasa hech narsa ko'rsatmaymiz

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Gifts</Text>

      <View style={{ position: 'relative' }}>
        <FlatList
          data={gifts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.giftsWrapper}
          renderItem={({ item }) => (
            <View style={styles.giftItem}>
              <Image source={{ uri: item.iconUrl }} style={styles.giftImage} />
              <Text style={styles.giftTitle}>{item.title}</Text>
            </View>
          )}
        />

        {/* Send Gift Button sloy */}
        <TouchableOpacity style={styles.sendGiftButton} onPress={onSendGift}>
          <LinearGradient
            colors={['#00c853cc', '#00e676cc']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.sendGiftBackground}
          >
            <Text style={styles.sendGiftText}>Send Gift</Text>
          </LinearGradient>
        </TouchableOpacity>
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
  giftsWrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 10,
  },
  giftItem: {
    alignItems: 'center',
    marginRight: 12,
  },
  giftImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginBottom: 6,
  },
  giftTitle: {
    color: '#fff',
    fontSize: 12,
  },
  sendGiftButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 5,
  },
  sendGiftBackground: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    opacity: 0.85,
  },
  sendGiftText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
