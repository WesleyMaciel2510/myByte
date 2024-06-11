import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CardProps {
  onPress: () => void;
  text: string;
  iconName?: string;
}

const UserSection: React.FC<CardProps> = ({onPress, text, iconName}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Icon
        name={iconName ? iconName : 'home'}
        size={35}
        color={'#403e39'}
        style={{flex: 1, paddingLeft: 20}}
      />

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#ddd',
    padding: 20,
    margin: 10,
    //width: 190,
    //height: 150,
    borderWidth: 1,
    borderColor: 'gray',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    flex: 3,
  },
});

export default UserSection;
