import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import ProfileHeader from '../components/userProfile/ProfileHeader';
import NameLocation from '../components/userProfile/NameLocation';
import InstagramStats from '../components/common/InstagramStats';
import Details from '../components/common/Details';
import Interests from '../components/common/Interests';
import Gifts from '../components/common/Gifts';
import UserPhotos from '../components/userProfile/UserPhotos';

import UsersMockData from '../../data/UsersMockData';

export default function UserPublicProfile() {
  const route = useRoute();
  const { userId } = route.params;

  const user = UsersMockData.find((u) => u.id === userId);

  if (!user) {
    return null; // yoki "User Not Found" UI chiqarsang ham bo‘ladi
  }

  const handleChatPress = () => {
    console.log('Chat tugmasi bosildi');
  };

  const handleSendGift = () => {
    console.log('Send Gift tugmasi bosildi');
  };

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader
        profilePhoto={user.profilePhoto}
        isPremium={user.isPremium}
        onChatPress={handleChatPress}
      />

      <NameLocation
        name={user.name}
        age={user.age}
        location={user.location}
      />

      <InstagramStats
        followers={user.followers}
        following={user.following}
        posts={user.posts}
      />

      <Details
        data={user.details}
        editable={false}
      />

      <Interests
        interests={user.interests} // ✅ TO‘G‘RILANGAN
        editable={false}
      />

      <Gifts
        gifts={user.gifts}
        editable={false}
      />

      <UserPhotos
        photos={user.photos}
        max={user.isPremium ? 20 : 5}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
