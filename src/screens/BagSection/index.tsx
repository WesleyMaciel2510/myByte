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
import {FoodList} from '../../context/FoodList';
import StoreFoods from '../../components/Cards/storeFoods';
import {useSharedGlobalState} from '../../helpers/globalUseState';
import useBackHandler from '../../helpers/useBackHandler';
const BagSection: React.FC<Navigation> = ({navigation}) => {
  const {setItemSelected, setScreenName} = useSharedGlobalState();
  // ============================================================================
  const goBack = () => {
    setScreenName('ItemSelected');
    navigation.goBack();
  };
  useBackHandler(goBack);
  // ============================================================================
  const ArrayFoodList = FoodList.flatMap(restaurant => restaurant.data).slice(
    0,
    5,
  );

  const renderItem = ({item}) => (
    <StoreFoods
      text={item.name}
      cost={item.cost}
      onPress={() => {
        console.log('Pressed:', item.name);
        setItemSelected([item.name, item.cost, item.image]);
        navigation.navigate('ItemSelected');
      }}
      imgPath={require('../../assets/images/restaurant.png')}
    />
  );
  // ============================================================================
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
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
            <Text style={styles.titleText}>SACOLA</Text>
          </View>
        </View>

        <View style={styles.contentArea}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <Image
                source={require('../../assets/images/mcdonalds.jpg')}
                style={styles.image}
                resizeMode="center"
              />
            </View>
            <View style={{flex: 4, flexDirection: 'column', paddingLeft: 20}}>
              <Text style={styles.text}>MCDonalds - Unidade Centro</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 5,
                }}>
                <TouchableOpacity onPress={() => console.log('')}>
                  <Text
                    style={[
                      styles.description,
                      {
                        color: Colors.red,
                        fontWeight: 'bold',
                      },
                    ]}>
                    Adicionar Itens
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={[styles.title, {textAlign: 'left', marginBottom: 30}]}>
            Itens Adicionados
          </Text>

          <View style={styles.itemArea}>
            <Image
              source={require('../../assets/images/snack.png')}
              style={styles.image}
              resizeMode="center"
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text}> 2 Sanduíches com desconto</Text>
              <View>
                <Text
                  style={[
                    styles.description,
                    {
                      fontSize: 20,
                      color: 'green',
                      textAlign: 'left',
                      paddingLeft: 15,
                    },
                  ]}>
                  R
                  <Icon name="usd" size={18} color={'green'} /> 8,99
                </Text>
              </View>
            </View>
          </View>
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
          <Text style={[styles.title, {textAlign: 'left', marginBottom: 10}]}>
            Resumo de Valores
          </Text>
          <View style={styles.divider} />
          <View style={styles.priceSection}>
            <View style={styles.column}>
              <Text style={styles.label}>Subtotal</Text>
              <Text style={styles.label}>Taxa de Entrega</Text>
              <Text style={[styles.label, {fontWeight: 'bold', fontSize: 20}]}>
                Total
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.value}>R$ 52,88</Text>
              <Text style={styles.value}>R$ 7,99</Text>
              <Text style={[styles.value, {fontWeight: 'bold', fontSize: 20}]}>
                R$ 60,87
              </Text>
            </View>
          </View>
          <View style={styles.divider} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contentArea: {
    padding: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#383838',
  },
  titleText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 22,
    maxWidth: 200,
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    bottom: 10,
  },
  itemArea: {
    flex: 1,
    flexDirection: 'row',
  },
  priceSection: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  column: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    color: '#000',
    textAlign: 'right',
    marginBottom: 10,
  },
  divider: {
    height: 3,
    backgroundColor: '#d3d3d3',
  },
});

export default BagSection;
