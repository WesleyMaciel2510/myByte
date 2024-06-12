import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingStars = () => {
  const [selectedStars, setSelectedStars] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleSelect = (index: number) => {
    const updatedStars = selectedStars.map((_, i) => {
      if (i <= index) {
        // Set all stars to the left of the pressed star, and the star itself, to true
        return true;
      }
      // Set all stars to the right of the pressed star to false
      return false;
    });
    setSelectedStars(updatedStars);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingVertical: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginRight: 40,
        }}>
        Avaliação:
      </Text>

      {selectedStars.map((selected, index) => (
        <TouchableOpacity key={index} onPress={() => handleSelect(index)}>
          <Icon name={selected ? 'star-o' : 'star'} size={40} color="#f0ed3a" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingStars;
