import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import MeHeader from '../components/me/MeHeader';
import ProfileInfo from '../components/me/ProfileInfo';
import InstagramStats from '../components/common/InstagramStats';
import Details from '../components/common/Details';
import Interests from '../components/common/Interests';
import Gifts from '../components/common/Gifts';
import Photos from '../components/me/Photos';
import Visitors from '../components/me/Visitiors';

import DetailsModal from '../components/me/DetailsModal';
import InterestsModal from '../components/me/InterestsModal';

import mockDetails from '../../data/mockDetails';
import mockInterests from '../../data/mockInterests';
import mockProfile from '../../data/mockProfile';
import mockGifts from '../../data/mockGifts';

export default function MeScreen() {
  const [wallet] = useState(23);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showInterestsModal, setShowInterestsModal] = useState(false);

  const [userDetails, setUserDetails] = useState(mockDetails);
  const [interests, setInterests] = useState(mockInterests.slice(0, 3));
  const [gifts, setGifts] = useState(mockGifts);

  const user = mockProfile;

  return (
    <SafeAreaView style={styles.container}>
      <MeHeader />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfileInfo
          avatar={user.avatar}
          name={user.name}
          age={user.age}
          wallet={wallet}
          onSettings={() => console.log('Open settings')}
        />

          <InstagramStats
            followers={user.followers}
            following={user.following}
            posts={user.posts}
            profileUrl={`https://instagram.com/${user.instagram}`}
          />
        
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
          gifts={gifts}
          editable={true}
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
  instagramWrapper: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 24,
  },
});
