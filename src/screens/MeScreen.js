import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import TopBar from '../components/me/TopBar'; 
import ProfileInfo from '../components/me/ProfileInfo'; 
import InstaInfo from '../components/me/InstaInfo'; 
import Details from '../components/common/Details'; 
import Interests from '../components/common/Interests'; 
import Gifts from '../components/me/Gifts'; 
import Photos from '../components/me/Photos'; 
import Visitors from '../components/me/Visitiors'; 
import DetailsModal from '../components/me/DetailsModal'; 
import InterestsModal from '../components/me/InterestsModal';
import mockDetails from '../../data/mockDetails';
import mockInterests from '../../data/mockInterests';

export default function MeScreen() {
  const [wallet] = useState(23);
  const [visitorCount] = useState(7);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showInterestsModal, setShowInterestsModal] = useState(false);

  const [userDetails, setUserDetails] = useState(mockDetails);
  const [interests, setInterests] = useState(mockInterests.slice(0, 3));

  const user = {
    name: 'Laylo',
    age: 25,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    instagram: 'laylo_insta',
    posts: 54,
    followers: 1161,
    following: 22,
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

        <Details
          data={userDetails}
          editable={true}
          onPress={() => setShowDetailsModal(true)}
        />

        <Interests
          interests={interests}
          editable={true}
          onPress={() => setShowInterestsModal(true)}
        />

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

      <DetailsModal
        visible={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        onSave={(newData) => {
          const parsed = {
            relationship: newData.relationship,
            height: newData.height,
            heightInches: `${Math.floor(newData.height / 30.48)}'${Math.round((newData.height / 2.54) % 12)}"`,
            languages: newData.languages,
            zodiac: newData.zodiac,
            smoking: newData.smoking,
            drinking: newData.drinking,
            kids: newData.kids ? 'Yes' : 'No',
            job: newData.job,
          };
          setUserDetails(parsed);
          setShowDetailsModal(false);
        }}
      />

      <InterestsModal
        visible={showInterestsModal}
        selected={interests}
        onClose={() => setShowInterestsModal(false)}
        onSave={(updated) => {
          setInterests(updated);
          setShowInterestsModal(false);
        }}
      />
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
