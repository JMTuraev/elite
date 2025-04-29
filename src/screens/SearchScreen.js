import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserCard from '../components/UserCard';
import UsersMockData from '../../data/UsersMockData';

export default function SearchScreen() {
  const navigation = useNavigation();

  const handlePress = (userId) => {
    navigation.navigate('UserPublicProfile', { userId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <FlatList
        data={UsersMockData}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <UserCard
            id={item.id}
            name={item.name}
            age={item.age}
            location={item.location}
            photos={item.photos}
            isPremium={item.isPremium}
            onPress={() => handlePress(item.id)} // << qo‘shildi
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
