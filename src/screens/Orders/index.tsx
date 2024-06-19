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
import {Navigation} from '../../context/interface';
import {globalStyles} from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles/colors';
import Button from '../../components/Button/button';
import CardOrder from '../../components/Cards/cardOrder';

const Orders: React.FC<Navigation> = ({navigation}) => {
  // =====================================================
  const goBack = () => {
    navigation.goBack();
  };
  // =====================================================
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

        <View style={styles.card}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.text}>Peça de novo</Text>
              <Text style={styles.description}>1 Filé de Peixe G 800gr</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginLeft: 20,
              }}>
              <Image
                source={require('../../assets/images/restaurant.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
          <Button onPress={() => console.log('')} text={'Adicionar à sacola'} />
        </View>
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
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  icon: {
    marginHorizontal: 25,
    alignSelf: 'center',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    maxWidth: 300,
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 18,
    color: '#333',
    maxWidth: 300,
    flexWrap: 'wrap',
    flex: 1,
  },
  image: {
    width: 150,
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
