
import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DetailsModal({ visible, onClose, onSave }) {
  const [relationship, setRelationship] = useState('');
  const [height, setHeight] = useState('170');
  const [languages, setLanguages] = useState([]);
  const [languageInput, setLanguageInput] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [smoking, setSmoking] = useState('');
  const [drinking, setDrinking] = useState('');
  const [kids, setKids] = useState(false);
  const [job, setJob] = useState('');

  const relationshipOptions = [
    { label: 'Single', icon: 'account' },
    { label: 'Married', icon: 'heart' },
    { label: 'Divorced', icon: 'cancel' },
    { label: 'Widowed', icon: 'emoticon-sad-outline' },
    { label: 'In a relationship', icon: 'account-multiple' },
  ];

  const zodiacOptions = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const addLanguage = () => {
    if (languageInput.trim() && !languages.includes(languageInput.trim())) {
      setLanguages([...languages, languageInput.trim()]);
      setLanguageInput('');
    }
  };

  const removeLanguage = (lang) => {
    setLanguages(languages.filter((l) => l !== lang));
  };

  const handleLanguageKey = ({ nativeEvent }) => {
    if (nativeEvent.key === ' ' || nativeEvent.key === 'Enter') {
      addLanguage();
      Keyboard.dismiss();
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Edit Details</Text>
          <TouchableOpacity onPress={onClose}>
            <MaterialCommunityIcons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.sectionTitle}>Relationship</Text>
          <View style={styles.optionsRow}>
            {relationshipOptions.map((opt) => (
              <TouchableOpacity
                key={opt.label}
                style={[styles.optionBtn, relationship === opt.label && styles.optionSelected]}
                onPress={() => setRelationship(opt.label)}
              >
                <MaterialCommunityIcons name={opt.icon} size={18} color="#fff" />
                <Text style={styles.optionText}>{opt.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Height</Text>
          <View style={styles.inputRow}>
            <MaterialCommunityIcons name="ruler" size={18} color="#fff" style={{ marginRight: 6 }} />
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={setHeight}
              keyboardType="numeric"
            />
            <Text style={styles.unitText}>cm ({Math.floor(height / 30.48)}'{Math.round((height / 2.54) % 12)}")</Text>
          </View>

          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.inputRow}>
            <MaterialCommunityIcons name="alphabet-latin" size={18} color="#fff" style={{ marginRight: 6 }} />
            <TextInput
              style={styles.input}
              value={languageInput}
              onChangeText={setLanguageInput}
              placeholder="Type and press space"
              placeholderTextColor="#777"
              onKeyPress={handleLanguageKey}
            />
          </View>
          <View style={styles.tagsWrap}>
            {languages.map((lang) => (
              <View key={lang} style={styles.tag}>
                <Text style={styles.tagText}>{lang}</Text>
                <TouchableOpacity onPress={() => removeLanguage(lang)}>
                  <MaterialCommunityIcons name="close" size={14} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Zodiac Sign</Text>
          <View style={styles.optionsRow}>
            {zodiacOptions.map((sign) => (
              <TouchableOpacity
                key={sign}
                style={[styles.optionBtn, zodiac === sign && styles.optionSelected]}
                onPress={() => setZodiac(sign)}
              >
                <MaterialCommunityIcons name={`zodiac-${sign.toLowerCase()}`} size={18} color="#fff" />
                <Text style={styles.optionText}>{sign}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Smoking</Text>
          <View style={styles.optionsRow}>
            {['No', 'Sometimes', 'Yes'].map((val) => (
              <TouchableOpacity
                key={val}
                style={[styles.optionBtn, smoking === val && styles.optionSelected]}
                onPress={() => setSmoking(val)}
              >
                <MaterialCommunityIcons name="smoking-off" size={18} color="#fff" />
                <Text style={styles.optionText}>{val}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Drinking</Text>
          <View style={styles.optionsRow}>
            {['No', 'Sometimes', 'Yes'].map((val) => (
              <TouchableOpacity
                key={val}
                style={[styles.optionBtn, drinking === val && styles.optionSelected]}
                onPress={() => setDrinking(val)}
              >
                <MaterialCommunityIcons name="glass-cocktail" size={18} color="#fff" />
                <Text style={styles.optionText}>{val}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Kids</Text>
          <TouchableOpacity
            style={[styles.optionBtn, kids && styles.optionSelected]}
            onPress={() => setKids(!kids)}
          >
            <MaterialCommunityIcons name="baby-face-outline" size={18} color="#fff" />
            <Text style={styles.optionText}>{kids ? 'Yes' : 'No'}</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Job</Text>
          <View style={styles.inputRow}>
            <MaterialCommunityIcons name="briefcase-outline" size={18} color="#fff" style={{ marginRight: 6 }} />
            <TextInput
              style={styles.input}
              value={job}
              onChangeText={setJob}
              placeholder="Your profession"
              placeholderTextColor="#777"
            />
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => onSave({ relationship, height, languages, zodiac, smoking, drinking, kids, job })}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0c',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  body: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  sectionTitle: {
    color: '#00e676',
    fontWeight: '600',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 8,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionBtn: {
    backgroundColor: '#2a2a2a',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  optionSelected: {
    backgroundColor: '#00e676',
  },
  optionText: {
    color: '#fff',
    fontSize: 13,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#1a1a1d',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  unitText: {
    color: '#aaa',
    fontSize: 13,
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#3a3a3a',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 4,
  },
  tagText: {
    color: '#fff',
    fontSize: 13,
  },
  saveBtn: {
    backgroundColor: '#00e676',
    padding: 14,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
});
