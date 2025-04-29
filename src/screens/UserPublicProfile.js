import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'; // Gradient uchun
import Ionicons from 'react-native-vector-icons/Ionicons';
import UsersMockData from '../../data/UsersMockData'; // Sening tayyor mock data

export default function UserPublicProfile() {
  const route = useRoute();
  const { id } = route.params;
  const user = UsersMockData.find((u) => u.id === id);

  if (!user) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'white', fontSize: 18 }}>User not found 😕</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>

      {/* Profile Photo */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: user.profilePhoto }}
          style={styles.profilePhoto}
        />
        {user.isPremium && (
          <Ionicons
            name="star"
            size={28}
            color="#00e676"
            style={styles.premiumIcon}
          />
        )}
        <TouchableOpacity style={styles.chatButton}>
          <Ionicons name="chatbubble-ellipses" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Name and Location */}
      <View style={styles.nameSection}>
        <Text style={styles.nameText}>{user.name}, {user.age}</Text>
        <Text style={styles.locationText}>{user.location}</Text>
      </View>

      {/* Instagram Stats */}
      <LinearGradient
        colors={['#00c853', '#00e676']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.statsCard}
      >
        <Ionicons name="logo-instagram" size={24} color="#fff" />
        <Text style={styles.statText}>
          {user.followers} followers · {user.following} following · {user.posts} posts
        </Text>
      </LinearGradient>

      {/* Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details</Text>
        <View style={styles.detailsWrapper}>
          <DetailItem icon="🧑‍🤝‍🧑" text={user.details.gender} />
          <DetailItem icon="📏" text={user.details.height} />
          <DetailItem icon="🌐" text={user.details.languages.join(', ')} />
          <DetailItem icon="🔮" text={user.details.zodiac} />
          <DetailItem icon="🚭" text={`Smoking: ${user.details.smoking}`} />
          <DetailItem icon="🍷" text={`Drinking: ${user.details.drinking}`} />
          <DetailItem icon="👶" text={`Kids: ${user.details.kids}`} />
          <DetailItem icon="💼" text={user.details.occupation} />
        </View>
      </View>

      {/* Interests */}
      {user.tags?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.tagsWrapper}>
            {user.tags.map((tag, index) => (
              <View key={index} style={styles.tagBadge}>
                <Text style={styles.tagText}>📌 {tag}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Gifts */}
      {user.gifts?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gifts</Text>

          <View style={{ position: 'relative' }}>
            <FlatList
              data={user.gifts}
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
            <TouchableOpacity style={styles.sendGiftButton}>
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
      )}

      {/* User Photos */}
      {user.photos?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <FlatList
            data={user.photos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.photosWrapper}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.photoItem} />
            )}
          />
        </View>
      )}

    </ScrollView>
  );
}

// DetailItem Component
function DetailItem({ icon, text }) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailIcon}>{icon}</Text>
      <Text style={styles.detailText}>{text}</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: 20,
    alignItems: 'center',
    position: 'relative',
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#00e676',
  },
  premiumIcon: {
    position: 'absolute',
    top: 5,
    left: 20,
  },
  chatButton: {
    position: 'absolute',
    top: 5,
    right: 20,
    backgroundColor: '#00e676',
    padding: 8,
    borderRadius: 25,
  },
  nameSection: {
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
  statsCard: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statText: {
    color: '#fff',
    fontSize: 14,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  detailsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  detailText: {
    color: '#eee',
    fontSize: 13,
  },
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagBadge: {
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
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
