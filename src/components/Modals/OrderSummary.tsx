import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSharedGlobalState} from '../../helpers/globalUseState';
import Button from '../Button/button';
import {useNavigation} from '@react-navigation/native';

const OrderSummary = () => {
  const navigation = useNavigation();

  const {totalPrice, setTotalPrice} = useSharedGlobalState();
  const imgPath = require('../../assets/images/mddonalds.jpg');

  return (
    <View style={styles.container}>
      <Image source={imgPath} style={styles.image} resizeMode="center" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Total sem a entrega</Text>
        <Text style={styles.totalPrice}>R$ {totalPrice} / 1 item</Text>
      </View>
      <View style={{}}>
        <Button
          onPress={() => navigation.navigate('BagSection')}
          color="#EA0033"
          text="Ver Sacola"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    width: '100%',
    height: '10%',
    padding: 10,
    borderTopWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
    color: '#444',
    fontWeight: 'bold',
  },
});

export default OrderSummary;
