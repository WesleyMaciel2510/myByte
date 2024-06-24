import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSharedGlobalState} from '../../helpers/globalUseState';
import Button from '../Button/button';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../helpers/storage';
import {updateOrderHistory} from '../../helpers/updateOrderHistory';
import {Order} from '../../context/interface';

const OrderSummary = () => {
  const navigation = useNavigation();

  const {
    totalPrice,
    paymentType,
    setPaymentType,
    setBagItems,
    screenName,
    setScreenName,
    bagItems,
    setCurrentOrder,
  } = useSharedGlobalState();

  const imgPath = require('../../assets/images/mcdonalds.jpg');

  return (
    <View style={styles.container}>
      <Image source={imgPath} style={styles.image} resizeMode="center" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Total sem a entrega</Text>
        <Text style={styles.totalPrice}>R$ {totalPrice} / 1 item</Text>
      </View>
      <View>
        <Button
          onPress={() => {
            console.log('screenName ==== ', screenName);
            if (screenName === 'BagSection') {
              console.log(' IR PARA A TELA DE ENDEREÇOS');
              setScreenName('Address');
              navigation.navigate('Address');
            } else if (screenName === 'Address') {
              console.log(' IR PARA A TELA DE PAGAMENTOS');
              setScreenName('Payment');
              navigation.navigate('Payment');
            } else if (screenName === 'Payment') {
              paymentType.length > 0 || paymentType !== 'selectOption'
                ? (setScreenName('Orders'),
                  navigation.navigate('Orders'),
                  setCurrentOrder(bagItems),
                  setBagItems([]))
                : setPaymentType('selectOption');
            } else {
              console.log(' IR PARA A TELA SACOLA');
              setScreenName('BagSection');
              navigation.navigate('BagSection');
            }
          }}
          color="#EA0033"
          text={
            screenName === 'BagSection' || 'Payment' || 'Address'
              ? 'Continuar'
              : 'Ver Sacola'
          }
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
