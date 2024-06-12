import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../styles/colors';

const BottomIcons: React.FC<{}> = () => {
  const navigation = useNavigation();
  const iconColor = '#fff';

  return (
    <View style={[styles.container, {backgroundColor: Colors.red}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.iconContainer}>
        <Icon name="home" size={25} color={iconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={styles.iconContainer}>
        <Icon name="search" size={25} color={iconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Orders')}
        style={styles.iconContainer}>
        <Icon name="file-text-o" size={25} color={iconColor} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.iconContainer}>
        <Icon name="user" size={25} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderColor: '#fff',
    marginTop: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomIcons;
