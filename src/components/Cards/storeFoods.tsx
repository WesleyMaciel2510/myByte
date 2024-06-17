import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
} from 'react-native';

interface CardProps {
  onPress: () => void;
  text: string;
  cost: string;
  imgPath?: ImageSourcePropType;
}

const StoreFoods: React.FC<CardProps> = ({onPress, text, cost, imgPath}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
        <Image source={imgPath} style={styles.image} resizeMode="contain" />
      </View>

      <View style={{paddingVertical: 1}}>
        <Text style={styles.cost}>{cost}</Text>
      </View>

      <View style={{paddingVertical: 1}}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'lightgreen',
    borderWidth: 2,
    borderColor: 'gray',
    margin: 10,
    maxWidth: '100%',
    width: '33%',
    height: 120,
    marginBottom: 10,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
  },
  cost: {
    paddingVertical: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    maxWidth: 170,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    maxWidth: 170,
    flexWrap: 'wrap',
    textAlign: 'center',
    color: '#333',
  },
});

export default StoreFoods;
