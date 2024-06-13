import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RatingStars from '../Rating/RatingStars';
import {Colors} from '../../styles/colors';

interface CardProps {
  onPress: () => void;
  title: string;
  text: string;
  imgPath?: ImageSourcePropType;
}

const CardOrder: React.FC<CardProps> = ({onPress, imgPath, text, title}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={[styles.text, {maxWidth: 200, paddingRight: 15}]}>
            <Icon name="check-circle" size={25} color={'green'} />
            {title}
          </Text>
          <Text style={styles.description}>{text}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',
            marginLeft: 20,
          }}>
          <Image source={imgPath} style={styles.image} resizeMode="contain" />
        </View>
      </View>
      <View style={{paddingBottom: 10}}>
        <RatingStars />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{flex: 1}}>
          <Text style={[styles.text, {color: Colors.red}]}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.text, {color: Colors.red}]}>
            Adicionar à sacola
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    maxWidth: '97%',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    maxWidth: 300,
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 18,
    color: '#333',
    maxWidth: 200,
    flexWrap: 'wrap',
    paddingBottom: 20,
    flex: 1,
  },
  image: {
    width: 150,
    height: 80,
    borderRadius: 5,
    bottom: 10,
    right: 12,
  },
});

export default CardOrder;
