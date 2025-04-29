import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, TouchableOpacity
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import UsersMockData from '../../data/UsersMockData'; // yo‘l to‘g‘riligini aniqlang

export default function UserPublicProfile() {
  const route = useRoute();
  const { id } = route.params;

  // ID orqali mockdan foydalanuvchini topamiz
  const user = UsersMockData.find((u) => u.id === id);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white', fontSize: 18 }}>User not found 😕</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Qolgan kod - siz avval yozgan glavniy rasm, followers, gifts, posts */}
      {/* Masalan: */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <Text style={styles.nameText}>{user.name}, {user.age}</Text>
        <Text style={styles.locationText}>{user.location}</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{user.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{user.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Start Chat</Text>
        </TouchableOpacity>
      </View>

      {/* ... qolgan: interests, gifts, posts */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  locationText: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    marginVertical: 16,
    gap: 40,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#aaa',
  },
  chatButton: {
    backgroundColor: '#FFCC00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 10,
  },
  chatButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
