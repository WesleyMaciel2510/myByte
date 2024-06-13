import React, {useState} from 'react';
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

const CardStore: React.FC<CardProps> = ({onPress, imgPath, text, title}) => {
  const [isHeart, setIsHeart] = useState(false);

  const toggleHeart = () => {
    setIsHeart(!isHeart);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{marginVertical: 20, marginHorizontal: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <Image source={imgPath} style={styles.image} resizeMode="center" />
        </View>
        <View style={{flex: 4, flexDirection: 'column', paddingLeft: 10}}>
          <Text style={[styles.text, {paddingRight: 15}]}>{title}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
            }}>
            <Text
              style={[
                styles.description,
                {color: '#f0ed3a', fontWeight: 'bold'},
              ]}>
              <Icon
                name={'star'}
                size={25}
                color="#f0ed3a"
                style={{marginRight: 5, alignItems: 'center'}}
              />
              4,8
            </Text>

            <Text style={[styles.description, {marginHorizontal: 10}]}>
              {text} - {'2,2km'}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={toggleHeart}>
          <Icon name={isHeart ? 'heart' : 'heart-o'} size={30} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 20,
    color: '#333',
    maxWidth: 200,
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 60,
    bottom: 10,
    right: 12,
  },
});

export default CardStore;
