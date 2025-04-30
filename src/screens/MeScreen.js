import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import TopBar from '../components/me/TopBar'; 
import ProfileInfo from '../components/me/ProfileInfo'; 
import InstaInfo from '../components/me/InstaInfo'; 
import Details from '../components/me/Details'; 
import Interests from '../components/me/Interests'; 
import Gifts from '../components/me/Gifts'; 
import Photos from '../components/me/Photos'; 
import Visitors from '../components/me/Visitiors'; 

export default function MeScreen() {
  const [wallet] = useState(23);
  const [visitorCount] = useState(7); // 👁 necha kishi ko‘rgan
  const user = {
    name: 'Laylo',
    age: 25,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    instagram: 'laylo_insta',
    posts: 54,
    followers: 1161,
    following: 22,
    details: [
      'Gender: Female',
      'Height: 170 cm',
      'Zodiac: Scorpio',
      'Birthday: 1999-12-05',
    ],
    interests: ['Music', 'Travel', 'Yoga', 'Art'],
    gifts: [
      { icon: '🎁', count: 3 },
      { icon: '💐', count: 1 },
    ],
    photos: [{}, {}, {}, {}, {}, {}, {}],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TopBar wallet={wallet} onLogout={() => console.log('Logout')} />

        <ProfileInfo
          avatar={user.avatar}
          name={user.name}
          age={user.age}
          onEdit={() => console.log('Edit profile')}
        />
<View style={styles.inlineWrapper}>
  <InstaInfo
    username={user.instagram}
    posts={user.posts}
    followers={user.followers}
    following={user.following}
  />
  <Visitors
    count={visitorCount}
    onPress={() => console.log('Open visitors modal')}
  />
</View>

        <Details details={user.details} />

        <Interests interests={user.interests} />

        <Gifts
          gifts={user.gifts}
          onGiftPress={(gift) => console.log('Gift clicked:', gift)}
        />

        <Photos
          photos={user.photos}
          max={15}
          onUpgrade={() => console.log('Upgrade album')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0c',
  },
  scrollContent: {
    paddingBottom: 80,
    paddingTop: 20,
  },
  inlineWrapper: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    gap: 12,
  },
});

