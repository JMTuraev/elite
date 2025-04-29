import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { Fonts } from './Fonts';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.textWhite,
    fontFamily: Fonts.bold, // Instagram’da ham title’lar semi-bold
  },

  text: {
    fontSize: 16,
    color: Colors.textLight,
    fontFamily: Fonts.regular,
  },

  mutedText: {
    fontSize: 14,
    color: Colors.textMuted,
    fontFamily: Fonts.regular,
  },

  button: {
    backgroundColor: Colors.accent,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: Colors.textWhite,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: Fonts.bold,
  },
});
