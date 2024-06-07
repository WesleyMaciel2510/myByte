import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const BottomIcons: React.FC<{}> = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: '#fff'}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={styles.iconContainer}>
        <Icon name="search" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.iconContainer}>
        <Icon name="home" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('User')}
        style={styles.iconContainer}>
        <Icon name="user" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderColor: '#fff',
    borderRadius: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomIcons;
