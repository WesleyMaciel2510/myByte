import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Navigation} from '../../context/interface';
import {globalStyles} from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles/colors';
import {useSharedGlobalState} from '../../helpers/globalUseState';
import {useSharedState} from './logic';
import Button from '../../components/Button/button';
import {Order} from '../../context/interface';
import {storage} from '../../helpers/storage';

const ItemSelected: React.FC<Navigation> = ({navigation}) => {
  const {
    itemSelected,
    storeSelected,
    setBagItems,
    currentOrder,
    orderHistory,
    setScreenName,
  } = useSharedGlobalState();
  const {
    productAmount,
    setProductAmount,
    productDescription,
    setProductDescription,
  } = useSharedState();
  console.log('orderHistory = ', orderHistory);
  // ============================================================================
  const handleChange = (value: string) => {
    console.log('Text input value:', value);
    setProductDescription(value);
  };
  const handleAddProduct = () => {
    console.log('chamou handleAddProduct');
    setScreenName('BagSection');
    navigation.navigate('BagSection');

    const newOrder: Order = {
      id: currentOrder.length + 1,
      productName: itemSelected[0],
      cost: itemSelected[1],
      store: storeSelected,
      description: productDescription,
    };
    console.log('newOrder = ', newOrder);

    if (currentOrder.length === 0) {
      setBagItems([newOrder]);
    } else {
      setBagItems(prevState => [...prevState, newOrder]);
    }
  };

  // ============================================================================
  const goBack = () => {
    navigation.goBack();
  };
  // ============================================================================
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableOpacity
          style={{position: 'absolute', left: 0, top: 0}}
          onPress={goBack}>
          <Icon name={'chevron-left'} size={20} color={Colors.red} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/stores/items/mc-donalds-910455.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.contentArea}>
          <Text style={[styles.title, {textAlign: 'left'}]}>
            {itemSelected[0]}
          </Text>
          <View style={styles.divider} />
          <Text style={styles.description}>
            Dois hambúrgueres, queijo, alface, cebola, picles e molho especial
            em pão de gergelim, acompanhado de batatas fritas médias.
          </Text>
          <View style={styles.divider} />
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="clock-o"
              size={30}
              color="gray"
              style={{marginVertical: 10}}
            />
            <Text style={styles.description}> Entrega: </Text>
            <Text style={styles.description}> 30-40 min - </Text>
            <Text style={[styles.description, {fontSize: 20, color: 'green'}]}>
              <Icon name="usd" size={18} color={'green'} />
              <Icon name="usd" size={18} color={'green'} /> 8,99
            </Text>
          </View>
          <View style={styles.divider} />

          <View style={{marginVertical: 20, marginHorizontal: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Image
                  source={require('../../assets/images/mcdonalds.jpg')}
                  style={styles.itemImage}
                  resizeMode="center"
                />
              </View>
              <View style={{flex: 4, flexDirection: 'column', paddingLeft: 20}}>
                <Text style={[styles.text, {paddingRight: 15}]}>
                  MCDonalds - Unidade Centro
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={[
                      styles.description,
                      {color: '#f0ed3a', fontWeight: 'bold'},
                    ]}>
                    <Icon
                      name={'star'}
                      size={25}
                      color="#f0ed3a"
                      style={{marginRight: 5, alignItems: 'center'}}
                    />
                    4,8
                  </Text>

                  <Text style={[styles.description, {marginHorizontal: 10}]}>
                    Lanche - {'2,2km'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={[styles.title, {textAlign: 'left'}]}>
              <Icon
                name="comment"
                size={25}
                color={'gray'}
                style={{marginRight: 20}}
              />
              {'   '}
              Alguma Observação?
            </Text>
            <TextInput
              placeholder="Ex.: Tirar cebola, Maionese à parte, etc. "
              placeholderTextColor="#888"
              style={styles.input}
              onChangeText={handleChange}
            />
          </View>
          <View style={styles.bottomArea}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => setProductAmount(prevAmount => prevAmount - 1)}>
                <Icon name="minus" size={25} color={'#F72020'} />
              </TouchableOpacity>
              <Text style={styles.amountText}>{productAmount}</Text>
              <TouchableOpacity
                onPress={() => setProductAmount(prevAmount => prevAmount + 1)}>
                <Icon name="plus" size={25} color={'#F72020'} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => handleAddProduct()}
                color={'#EA0033'}
                text={'Adicionar à sacola'}
              />
            </View>
          </View>
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
    fontSize: 20,
    color: '#333',
    marginVertical: 10,
    textAlign: 'left',
  },
  image: {
    position: 'relative',
    marginVertical: 0,
    width: 500,
    height: 200,
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: 200,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 60,
    bottom: 10,
    right: 12,
  },
  input: {
    fontSize: 18,
    marginVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    maxWidth: 400,
    height: 80,
    flexWrap: 'wrap',
    textAlign: 'left',
    alignItems: 'flex-start',
    alignContent: 'center',
  },
  bottomArea: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  contentArea: {
    marginHorizontal: 30,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    padding: 30,
  },
  divider: {
    height: 3,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 0,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  buttonContainer: {
    flex: 2,
    marginLeft: 30,
  },
});

export default ItemSelected;
