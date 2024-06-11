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
        style={{flex: 1, marginHorizontal: 10}}
      />

      <Text style={styles.text}>{text}</Text>
      <Icon
        name={'chevron-right'}
        size={20}
        color={'gray'}
        style={{flex: 1, alignSelf: 'center', left: 30}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 30,
    marginLeft: 10,
  },
  text: {
    fontSize: 25,
    color: '#333',
    flex: 5,
  },
});

export default UserSection;
