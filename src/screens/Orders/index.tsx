import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Navigation, Order} from '../../context/interface';
import {globalStyles} from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles/colors';
import Button from '../../components/Button/button';
import CardOrder from '../../components/Cards/cardOrder';
import {useInit} from './logic';
import {useSharedGlobalState} from '../../helpers/globalUseState';
import {updateOrderHistory} from '../../helpers/updateOrderHistory';
import {storage} from '../../helpers/storage';

const Orders: React.FC<Navigation> = ({navigation}) => {
  const {currentOrder, orderHistory, setOrderHistory, setCurrentOrder} =
    useSharedGlobalState();
  // =====================================================
  const goBack = () => {
    navigation.goBack();
  };
  useInit();
  // ===================================================================
  const addOrderHistoryList = (bagItems: Order[]) => {
    console.log('bagItems = ', bagItems);
    const result = updateOrderHistory(bagItems);
    console.log(' LISTA DE PEDIDOS ATUALIZADA = ', result);
    storage.set('HistoryOrderList', JSON.stringify(result));
    setOrderHistory(result);
  };
  // ===================================================================
  return (
    <SafeAreaView
      style={[globalStyles.container, {flexDirection: 'column', padding: 20}]}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 20,
          }}>
          <TouchableOpacity onPress={goBack}>
            <Icon name={'chevron-left'} size={20} color={Colors.red} />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.title}> MEUS PEDIDOS</Text>
          </View>
          <Icon name={'shopping-bag'} size={35} color={Colors.red} />
        </View>
        {currentOrder.length > 0 ? (
          <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.text}>{currentOrder[0].productName}</Text>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                  <Icon
                    name={'clock-o'}
                    size={30}
                    color={'gray'}
                    style={{marginRight: 10}}
                  />
                  <Text style={styles.description}>
                    Tempo Estimado: 20 min.
                  </Text>
                </View>
              </View>

              <View>
                <Image
                  source={require('../../assets/images/snack.png')}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            </View>
            <Button
              onPress={() => {
                console.log(
                  'Finalizou Pedido, Lista de Pedidos Esvaziada, Adicionado ao Histórico',
                );
                addOrderHistoryList(currentOrder);
                setCurrentOrder([]);
              }}
              text={'Recebi Meu Pedido'}
            />
          </View>
        ) : (
          <View style={styles.card}>
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <View>
                <Text style={styles.text}>Peça de novo</Text>
                <Text style={styles.description}>1 Filé de Peixe G 800gr</Text>
              </View>

              <View>
                <Image
                  source={require('../../assets/images/restaurant.png')}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            </View>
            <Button
              onPress={() => console.log('')}
              text={'Adicionar à sacola'}
            />
          </View>
        )}

        <View style={{marginTop: 20, marginLeft: 20, flexDirection: 'row'}}>
          <View>
            <Text style={[styles.title, {textAlign: 'left'}]}>Histórico</Text>
            <Text style={styles.description}>Junho 2024</Text>
          </View>

          <Icon
            name={'calendar'}
            size={50}
            color={'#403e39'}
            style={{alignSelf: 'flex-start', position: 'absolute', right: 20}}
          />
        </View>
        <View style={globalStyles.divider} />
        <View style={styles.orderArea}>
          {orderHistory.length > 0 && (
            <CardOrder
              onPress={() => console.log('clicou')}
              imgPath={require('../../assets/images/snack.png')}
              title={orderHistory[0]?.store}
              text={orderHistory[0]?.productName}
            />
          )}
          <CardOrder
            onPress={() => console.log('clicou')}
            imgPath={require('../../assets/images/yakitori.png')}
            title={'Toca do Peixe'}
            text={'1 Filé de Peixe G 800gr'}
          />
          <CardOrder
            onPress={() => console.log('clicou')}
            imgPath={require('../../assets/images/restaurant.png')}
            title={'MCDonalds - Unidade Centro'}
            text={'1 McLanche Feliz, 1 McFritas Grande'}
          />
          <CardOrder
            onPress={() => console.log('clicou')}
            imgPath={require('../../assets/images/snack.png')}
            title={'Chicken Grill'}
            text={'1 Filé de Frango Grelhado 300g'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#383838',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    marginBottom: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  icon: {
    marginHorizontal: 25,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    maxWidth: 200,
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#333',
    maxWidth: 300,
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 5,
    bottom: 20,
  },
  orderArea: {
    marginTop: 30,
    flexDirection: 'column',
  },
});

export default Orders;
