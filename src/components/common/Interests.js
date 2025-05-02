import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function Interests({ interests = [], editable = false, onPress }) {
  const TitleBox = ({ editable }) => (
    <LinearGradient
      colors={['#FFD700', '#222']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View style={styles.innerBox}>
        <Text style={editable ? styles.titleEditable : styles.title}>Interests</Text>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.card}>
      {editable ? (
        <TouchableOpacity onPress={onPress}>
          <TitleBox editable />
        </TouchableOpacity>
      ) : (
        <TitleBox />
      )}

      {interests.length > 0 ? (
        <View style={styles.wrap}>
          {interests.map((interest, index) => (
            <View key={index} style={styles.item}>
              <MaterialCommunityIcons
                name={interest.icon || 'star-outline'}
                size={18}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.text}>{interest.label}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.placeholder}>You haven’t added any interests yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1d',
    marginHorizontal: 24,
    marginVertical: 14,
    borderRadius: 14,
    padding: 16,
  },
  gradientBorder: {
    borderRadius: 10,
    padding: 1.5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  innerBox: {
    backgroundColor: '#1a1a1d',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  titleEditable: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 8,
    marginRight: 8,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  placeholder: {
    color: '#666',
    fontStyle: 'italic',
    fontSize: 13,
  },
});
