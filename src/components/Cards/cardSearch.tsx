import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface CardProps {
  onPress: () => void;
  text: string;
  imgPath?: ImageSourcePropType;
  color?: string;
}

const CardSearch: React.FC<CardProps> = ({onPress, text, imgPath, color}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, {backgroundColor: color}]}>
      <Image
        source={imgPath}
        style={{width: 150, height: 100}}
        resizeMode="contain"
      />

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#ddd',
    padding: 10,
    margin: 10,
    width: 190,
    height: 150,
    borderWidth: 2,
    borderColor: '#ADD8E6',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CardSearch;
