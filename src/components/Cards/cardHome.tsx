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

const CardHome: React.FC<CardProps> = ({onPress, text /* imgPath */}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
        <Image
          source={require('../../assets/images/restaurant.png')}
          style={{width: 200, height: 200}}
        />
      </View>

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
  },
  image: {
    width: 200,
    height: 200,
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