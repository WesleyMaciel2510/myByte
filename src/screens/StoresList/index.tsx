import React from 'react';
import {
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
import CardStore from '../../components/Cards/cardStore';
import StoreOptions from './storeOptions';
import {useSharedState} from './logic';

const StoresList: React.FC<Navigation> = ({navigation}) => {
  const {currentAddress, storeSelected, setStoreSelected} =
    useSharedGlobalState();
  const {selectedOption, setSelectedOption} = useSharedState();

  // ============================================================================
  const match = currentAddress.match(/(.*?\d+)/); //regex to show only
  const streetAndNumber = match ? match[0] : ''; //street and number
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalScrollView}>
              <StoreOptions
                text="Restaurantes"
                isSelected={selectedOption === 'Option Restaurantes'}
                onPress={() => handlePress('Option Restaurantes')}
              />
              <StoreOptions
                text="Lanches"
                isSelected={selectedOption === 'Option Lanches'}
                onPress={() => handlePress('Option Lanches')}
              />
              <StoreOptions
                text="Mercado"
                isSelected={selectedOption === 'Option Mercado'}
                onPress={() => handlePress('Option Mercado')}
              />
              <StoreOptions
                text="Farmácia"
                isSelected={selectedOption === 'Option Farmacia'}
                onPress={() => handlePress('Option Farmacia')}
              />
            </View>
          </ScrollView>

          <CardStore
            onPress={() => {
              setStoreSelected('MCDonalds - Unidade Centro');
              navigation.navigate('Store');
            }}
            title={'MCDonalds - Unidade Centro'}
            text={'Lanches'}
            imgPath={require('../../assets/images/mddonalds.jpg')}
          />
          <CardStore
            onPress={() => {
              setStoreSelected('MCDonalds - Unidade Centro');
              navigation.navigate('Store');
            }}
            title={'MCDonalds - Unidade Centro'}
            text={'Lanches'}
            imgPath={require('../../assets/images/mddonalds.jpg')}
          />
          <CardStore
            onPress={() => console.log('')}
            title={'MCDonalds - Unidade Centro'}
            text={'Lanches'}
            imgPath={require('../../assets/images/mddonalds.jpg')}
          />
          <CardStore
            onPress={() => console.log('')}
            title={'MCDonalds - Unidade Centro'}
            text={'Lanches'}
            imgPath={require('../../assets/images/mddonalds.jpg')}
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
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StoresList;
