// ✅ Final LevelModal – Chat message history preserved and smooth
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
  Easing,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const messages = [
  ['Hi there 👋', 'Hey!'],
  ['You look great today', 'Aww, thank you 😊'],
  ['Wanna grab coffee?', 'Sure, let’s do it!'],
  ['Talking to you is fun.', 'Same here, really.'],
  ['See you soon?', 'I’m looking forward!'],
];

const avatars = {
  male: 'https://randomuser.me/api/portraits/men/11.jpg',
  female: 'https://randomuser.me/api/portraits/women/44.jpg',
};

export default function LevelModal({ visible, onClose }) {
  const [wallet, setWallet] = useState(0);
  const [renderedMessages, setRenderedMessages] = useState([]);
  const [stage, setStage] = useState('intro');
  const [pressedAccept, setPressedAccept] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const flyAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const coinOpacity = useRef(new Animated.Value(0)).current;
  const walletScale = useRef(new Animated.Value(1)).current;
  const flatListRef = useRef();

  useEffect(() => {
    if (visible) resetAll();
  }, [visible]);

  const resetAll = () => {
    setWallet(0);
    setRenderedMessages([]);
    setStage('intro');
    setPressedAccept(false);
    fadeAnim.setValue(0);

    Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();

    setTimeout(() => {
      setStage('accept');
      setTimeout(() => {
        setPressedAccept(true);
        setTimeout(() => handleAccept(), 1000);
      }, 3000);
    }, 4000);
  };

  const handleAccept = () => {
    setStage('chat');
    playChat(0);
  };

  const playChat = async (index) => {
    if (index >= messages.length) {
      setTimeout(() => resetAll(), 1000);
      return;
    }
    const [msgB, msgA] = messages[index];

    await typeMessage(msgB, 'male', avatars.male);
    await wait(500);
    await typeMessage(msgA, 'female', avatars.female);
    await wait(500);

    triggerCoinAnimation(() => {
      setWallet(prev => +(prev + 1.2).toFixed(1));
      animateWalletBounce();
      playChat(index + 1);
    });
  };

  const typeMessage = (text, sender, avatar) => {
    return new Promise((resolve) => {
      let i = 0;
      let temp = '';
      const typing = setInterval(() => {
        if (i > text.length) {
          clearInterval(typing);
          resolve();
        } else {
          temp = text.slice(0, i);
          setRenderedMessages(prev => {
            const newList = [...prev];
            if (newList.length > 0 && newList[newList.length - 1].sender === sender && newList[newList.length - 1].text.length < text.length) {
              newList[newList.length - 1] = { sender, text: temp, avatar };
            } else {
              newList.push({ sender, text: temp, avatar });
            }
            return newList;
          });
          i++;
        }
      }, 40);
    });
  };

  const wait = (ms) => new Promise(res => setTimeout(res, ms));

  const triggerCoinAnimation = (callback) => {
    flyAnim.setValue({ x: 0, y: 0 });
    coinOpacity.setValue(1);
    Animated.parallel([
      Animated.timing(flyAnim, {
        toValue: { x: 200, y: -160 },
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(coinOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(callback);
  };

  const animateWalletBounce = () => {
    Animated.sequence([
      Animated.timing(walletScale, { toValue: 1.2, duration: 150, useNativeDriver: true }),
      Animated.timing(walletScale, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.levelLabel}>Level 12</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            {stage === 'intro' && (
              <View style={styles.centeredBox}>
                <Text style={styles.howItWorks}>💡 How this works</Text>
                <Text style={styles.infoText}>Each dialog earns you money. 10 dialogs = <Text style={{ color: '#FFD700' }}>$12</Text></Text>
              </View>
            )}

            {stage === 'accept' && (
              <View style={styles.centeredBox}>
                <Text style={styles.infoText}>John wants to chat with you 💬</Text>
                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.declineBtn} onPress={onClose}>
                    <Text style={styles.declineText}>Decline</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.acceptBtn, pressedAccept && styles.acceptBtnPressed]}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.acceptText}>Accept</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {stage === 'chat' && (
              <>
                <View style={styles.walletRow}>
                  <Ionicons name="wallet-outline" size={18} color="#FFD700" />
                  <Text style={styles.walletLabel}>Your Balance</Text>
                  <Animated.Text style={[styles.walletText, { transform: [{ scale: walletScale }] }]}>${wallet.toFixed(1)}</Animated.Text>
                </View>

                <FlatList
                  ref={flatListRef}
                  data={renderedMessages}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View style={[styles.bubbleRow, item.sender === 'female' && { flexDirection: 'row-reverse' }]}> 
                      <Image source={{ uri: item.avatar }} style={styles.avatar} />
                      <View style={[styles.bubble,
                        item.sender === 'female'
                          ? { ...styles.rightBubble, borderBottomRightRadius: 0 }
                          : { ...styles.leftBubble, borderBottomLeftRadius: 0 }
                      ]}>
                        <Text style={styles.bubbleText}>{item.text}</Text>
                      </View>
                    </View>
                  )}
                  style={styles.chatBox}
                  contentContainerStyle={styles.chatBoxContent}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={false}
                />

                <Animated.Text
                  style={[styles.coin, {
                    transform: flyAnim.getTranslateTransform(),
                    opacity: coinOpacity,
                    color: '#FFD700',
                  }]}
                >
                  +$1.2
                </Animated.Text>
              </>
            )}
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 340,
    height: 520,
    backgroundColor: '#1a1a1d',
    borderRadius: 20,
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelLabel: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centeredBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  howItWorks: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  infoText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  acceptBtn: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  acceptBtnPressed: {
    backgroundColor: '#ffc400',
    transform: [{ scale: 1.1 }],
  },
  acceptText: {
    color: '#000',
    fontWeight: '700',
  },
  declineBtn: {
    borderColor: '#666',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  declineText: {
    color: '#ccc',
    fontWeight: '600',
  },
  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 10,
  },
  walletLabel: {
    color: '#FFD700',
    fontSize: 13,
  },
  walletText: {
    color: '#FFD700',
    fontWeight: '600',
    fontSize: 16,
  },
  chatBox: {
    height: 168,
    overflow: 'hidden',
    marginBottom: 10,
  },
  chatBoxContent: {
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  bubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 4,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 6,
  },
  bubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 16,
    justifyContent: 'center',
  },
  leftBubble: {
    backgroundColor: '#333',
  },
  rightBubble: {
    backgroundColor: '#FFD700',
  },
  bubbleText: {
    color: '#000',
  },
  coin: {
    position: 'absolute',
    top: 140,
    left: 60,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
