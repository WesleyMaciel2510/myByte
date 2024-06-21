import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CardProps {
  onPress: () => void;
  text: string;
  homeAddress?: boolean;
}

const CardAddress: React.FC<CardProps> = ({onPress, text, homeAddress}) => {
  const match = text.match(/(.*?\d+)/); //regex to show only
  const streetAndNumber = match ? match[0] : ''; //street and number
  let fullAddress = match ? text.replace(streetAndNumber, '').trim() : text;

  // Remove the first comma if it exists
  if (fullAddress.startsWith(',') || fullAddress.startsWith('-')) {
    fullAddress = fullAddress.substring(1).trim();
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Icon
        name={homeAddress ? 'home' : 'clock-o'}
        size={35}
        color={homeAddress ? '#F72020' : '#403e39'}
        style={styles.icon}
      />

      <View style={{flexDirection: 'column'}}>
        <Text style={styles.text}>{streetAndNumber}</Text>
        <Text style={styles.description}>{fullAddress}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 30,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    height: 130,
  },
  icon: {
    marginHorizontal: 25,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
    maxWidth: 300,
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 16,
    color: '#333',
    maxWidth: 250,
    flexWrap: 'wrap',
    flex: 1,
  },
});

export default CardAddress;
