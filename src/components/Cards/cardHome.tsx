import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  View,
} from 'react-native';

interface CardProps {
  onPress: () => void;
  text: string;
  imgPath?: ImageSourcePropType;
}

const CardHome: React.FC<CardProps> = ({onPress, text, imgPath}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
        <Image source={imgPath} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#f2e9e9',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CardHome;
