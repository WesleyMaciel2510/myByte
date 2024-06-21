import React from 'react';
import {
  FlatList,
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
import {categoryList} from '../../context/CategoryList';
import {useSharedGlobalState} from '../../helpers/globalUseState';
import CategoryItem from '../../components/Cards/CategoryItem';
import {flatListImages, useCustomNavigation} from './logic';
import CardStore from '../../components/Cards/cardStore';
import {useNavigation} from '@react-navigation/native';

const Category: React.FC<Navigation> = ({navigation}) => {
  const {currentAddress, categorySelected, itemSelected, setItemSelected} =
    useSharedGlobalState();
  const {navigateToScreen} = useCustomNavigation({navigation});
  // ============================================================================
  const match = currentAddress.match(/(.*?\d+)/); //regex to show only
  const streetAndNumber = match ? match[0] : ''; //street and number
  // ============================================================================
  const selectedCategory = categoryList.find(
    item => item.key === categorySelected,
  );
  const renderItem = ({item}) => (
    <CategoryItem
      text={item}
      onPress={() => {
        setItemSelected(item);
        navigation.navigate('StoresList');
      }}
      imgPath={require('../../assets/images/restaurant.png')}
    />
  );
  // ============================================================================
  const goBack = () => {
    navigation.goBack();
  };
  const handleChange = (value: string) => {
    console.log('Text input value:', value);
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
        <View style={{padding: 10, marginTop: 10}}>
          <TouchableOpacity
            style={styles.searchArea}
            onPress={() => console.log('aaaaaaaaaaaa')}>
            <View style={{alignSelf: 'center'}}>
              <Icon name="search" size={25} color={'#F72020'} />
            </View>
            <View style={{marginLeft: 10}}>
              <TextInput
                placeholder={`Buscar item em ${categorySelected}`}
                placeholderTextColor="#888"
                style={{fontSize: 23}}
                onChangeText={handleChange}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.contentArea}>
          <Text style={[styles.title, {textAlign: 'left'}]}>
            Mais Pedidos em {categorySelected}
          </Text>

          <View style={{marginBottom: 30}}>
            <FlatList
              horizontal
              data={selectedCategory ? selectedCategory.data : []}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <Text style={[styles.title, {textAlign: 'left'}]}>
            Últimas Ofertas para você!
          </Text>
          <View style={styles.bannerArea}>
            <FlatList
              horizontal
              data={flatListImages}
              renderItem={({item}) => (
                <Image source={item} style={styles.banner} />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text style={[styles.title, {textAlign: 'left', marginBottom: 30}]}>
            Últimas Lojas
          </Text>
          <CardStore
            onPress={() =>
              navigateToScreen('MCDonalds - Unidade Centro', 'Store')
            }
            title={'MCDonalds - Unidade Centro'}
            text={'Lanche'}
            imgPath={require('../../assets/images/mcdonalds.jpg')}
          />
          <CardStore
            onPress={() =>
              navigateToScreen('MCDonalds - Unidade Centro', 'Store')
            }
            title={'MCDonalds - Unidade Centro'}
            text={'Lanche'}
            imgPath={require('../../assets/images/mcdonalds.jpg')}
          />
          <CardStore
            onPress={() =>
              navigateToScreen('MCDonalds - Unidade Centro', 'Store')
            }
            title={'MCDonalds - Unidade Centro'}
            text={'Lanche'}
            imgPath={require('../../assets/images/mcdonalds.jpg')}
          />
          <CardStore
            onPress={() =>
              navigateToScreen('MCDonalds - Unidade Centro', 'Store')
            }
            title={'MCDonalds - Unidade Centro'}
            text={'Lanche'}
            imgPath={require('../../assets/images/mcdonalds.jpg')}
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
    width: 120,
    height: 70,
    borderRadius: 5,
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
  searchArea: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#e3e3e3',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  contentArea: {
    padding: 10,
    marginTop: 10,
  },
  bannerArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  banner: {
    width: 350,
    height: 180,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 12,
    borderRadius: 10,
  },
});

export default Category;
