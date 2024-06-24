import React from 'react';
import {
  FlatList,
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
import {useSharedGlobalState} from '../../helpers/globalUseState';
import {useSharedState} from './logic';
import StoreFoods from '../../components/Cards/storeFoods';
import {FoodList} from '../../context/FoodList';

const Store: React.FC<Navigation> = ({navigation}) => {
  const {currentAddress, storeSelected, setItemSelected} =
    useSharedGlobalState();
  const {selectedOption, setSelectedOption} = useSharedState();
  // ============================================================================
  const match = currentAddress.match(/(.*?\d+)/); //regex to show only
  const streetAndNumber = match ? match[0] : ''; //street and number
  // ============================================================================
  const ArrayFoodList = FoodList.flatMap(restaurant => restaurant.data);

  const renderItem = ({item}) => (
    <StoreFoods
      text={item.name}
      cost={item.cost}
      onPress={() => {
        console.log('Pressed:', item.name);
        setItemSelected([item.name, item.cost]);
        navigation.navigate('ItemSelected');
      }}
      imgPath={require('../../assets/images/restaurant.png')}
    />
  );
  // ============================================================================
  const goBack = () => {
    navigation.goBack();
  };
  const handlePress = (text: string) => {
    console.log('chamou handlePress');
    console.log('text = ', text);
    console.log('selectedOption = ', selectedOption);

    setSelectedOption(text === selectedOption ? null : text);
  };
  // ============================================================================
  return (
    <SafeAreaView
      style={[globalStyles.container, {flexDirection: 'column', padding: 20}]}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={goBack}>
            <Icon name={'chevron-left'} size={20} color={Colors.red} />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Address')}>
              <Text style={styles.titleText}>
                {currentAddress.length > 0
                  ? streetAndNumber
                  : 'Ativar Localização'}
                <Icon name="chevron-down" size={20} color={'#F72020'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentArea}>
          <Image
            source={require('../../assets/images/stores/mcdonalds.store.jpg')}
            style={styles.image}
          />
          <Text style={[styles.title, {textAlign: 'left'}]}>
            {storeSelected}
          </Text>
          <View style={styles.divider} />

          <View style={{flexDirection: 'row'}}>
            <Icon
              name="star"
              size={25}
              color="#f0ed3a"
              style={{marginVertical: 10}}
            />
            <Text
              style={[
                styles.description,
                {color: '#f0ed3a', fontWeight: 'bold', marginLeft: 5},
              ]}>
              4.8
            </Text>
            <Text style={styles.description}>
              {'Lanches'} - {'2.2km'}
            </Text>
          </View>
          <Text style={styles.description}>
            Aberto até 23:59 - Pedido Mínimo: R$ 20,00
          </Text>
          <View style={styles.divider} />

          <Text style={[styles.title, {textAlign: 'left', marginVertical: 20}]}>
            Os mais pedidos
          </Text>
          <View style={{marginBottom: 10, height: 230}}>
            <FlatList
              horizontal
              data={ArrayFoodList}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
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
    fontSize: 17,
    color: '#333',
    maxWidth: 300,
    flexWrap: 'wrap',
    marginVertical: 10,
    textAlign: 'left',
    marginLeft: 10,
  },
  image: {
    marginVertical: 20,
    width: 500,
    height: 200,
    borderRadius: 15,
  },
  orderArea: {
    marginTop: 30,
    flexDirection: 'column',
  },
  titleText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  contentArea: {
    padding: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  horizontalScrollView: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  divider: {
    height: 3,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 0,
  },
});

export default Store;
