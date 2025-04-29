// src/components/UserCard.js

import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 18;
const CARD_HEIGHT = 250;
const MAX_DOTS = 5; // Maksimal dots soni

const UserCard = ({ name, age, location, photos, isPremium }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleMomentumScrollEnd = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / CARD_WIDTH);
    setActiveIndex(index);
  };

  const totalPhotos = photos.length;
  const visibleDots = Math.min(totalPhotos, MAX_DOTS);

  return (
    <View style={styles.card}>
      {/* Swipeable Photos */}
      <Animated.FlatList
        data={photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        bounces={false}
        pagingEnabled={false}
        contentContainerStyle={{ width: CARD_WIDTH * photos.length }}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={{ uri: item }}
              style={styles.image}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay} />
            </ImageBackground>
          </View>
        )}
      />

      {/* Static Info Layer */}
      <View style={styles.absoluteInfo}>
        {/* Top left: Name */}
        <View style={styles.topLeft}>
          <Text style={styles.name}>{name}, {age}</Text>
        </View>

        {/* Location */}
        <View style={styles.locationBadge}>
          <Entypo name="location-pin" size={14} color="#fff" />
          <Text style={styles.locationText}>{location}</Text>
        </View>

        {/* Top right: photo count */}
        <View style={styles.topRight}>
          <Ionicons name="images-outline" size={16} color="#fff" />
          <Text style={styles.photoCount}>{photos?.length || 0}</Text>
        </View>

        {/* Bottom left: Premium badge */}
        {isPremium && (
          <View style={styles.premiumBadge}>
            <Ionicons name="star" size={16} color="#FFCC00" />
          </View>
        )}

        {/* Bottom center: Dots */}
        {photos.length > 1 && (
          <View style={styles.dotsWrapper}>
            <View style={styles.dotsContainer}>
              {Array.from({ length: visibleDots }).map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    index === activeIndex ? styles.activeDot : null,
                  ]}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: CARD_HEIGHT,
    margin: 6,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#222',
    position: 'relative',
  },
  imageWrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    borderRadius: 12,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  absoluteInfo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    padding: 10,
    justifyContent: 'space-between',
  },
  topLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  name: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  locationBadge: {
    position: 'absolute',
    top: 35,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 15,
  },
  locationText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
  topRight: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 12,
  },
  photoCount: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 4,
  },
  premiumBadge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 6,
    borderRadius: 20,
  },
  dotsWrapper: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#aaa',
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});
