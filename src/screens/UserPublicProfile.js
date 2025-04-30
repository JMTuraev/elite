import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import ProfileHeader from '../components/userProfile/ProfileHeader'; 
import NameLocation from '../components/userProfile/NameLocation'; 
import InstagramStats from '../components/userProfile/InstagramStats'; 
import DetailsSection from '../components/userProfile/DetailsSection'; 
import InterestsSection from '../components/userProfile/InterestsSection';
import GiftsSection from '../components/userProfile/GiftsSection'; 
import UserPhotos from '../components/userProfile/UserPhotos'; 

import UsersMockData from '../../data/UsersMockData';

export default function UserPublicProfile() {
  const route = useRoute();
  const { userId } = route.params;

  const user = UsersMockData.find((u) => u.id === userId);

  if (!user) {
    return null; // yoki User Not Found sahifa chiqarsang ham bo‘ladi
  }

  // Event Handlers
  const handleChatPress = () => {
    console.log('Chat tugmasi bosildi'); 
    // Yoki navigate('ChatScreen', { userId: id })
  };

  const handleSendGift = () => {
    console.log('Send Gift tugmasi bosildi');
    // Modal ochish yoki action dispatch
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

      <DetailsSection
        details={user.details}
      />

      <InterestsSection
        tags={user.tags}
      />

      <GiftsSection
        gifts={user.gifts}
        onSendGift={handleSendGift}
      />

      <UserPhotos
        photos={user.photos}
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
