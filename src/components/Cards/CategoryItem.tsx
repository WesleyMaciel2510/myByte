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
  imgPath?: ImageSourcePropType;
}

const CategoryItem: React.FC<CardProps> = ({onPress, text, imgPath}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
        <Image source={imgPath} style={styles.image} resizeMode="contain" />
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
    backgroundColor: '#edebeb',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    maxWidth: '100%',
    width: '33%',
    height: 100,
    marginBottom: 20,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
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

export default CategoryItem;
