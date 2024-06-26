import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Navigation} from '../../context/interface';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyles';
import {useSharedGlobalState} from '../../helpers/globalUseState';
import {useOnHandleLocation} from './logic';
import CardAddress from '../../components/Cards/cardAddress';

const Address: React.FC<Navigation> = ({navigation}) => {
  const handleChange = (value: string) => {
    console.log('Text input value:', value);
  };
  const goBack = () => {
    navigation.goBack();
  };
  // =====================================================
  const {currentAddress, setCurrentAddress} = useSharedGlobalState();
  const handleLocation = useOnHandleLocation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <TouchableOpacity onPress={goBack}>
              <Icon name={'chevron-left'} size={20} color={Colors.red} />
            </TouchableOpacity>
            <View style={{flex: 1}}>
              <Text style={styles.title}>ENDEREÇO DE ENTREGA</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.searchArea}
            onPress={() => console.log('aaaaaaaaaaaa')}>
            <View style={{alignSelf: 'center'}}>
              <Icon name="search" size={25} color={'#F72020'} />
            </View>
            <View style={{marginLeft: 10}}>
              <TextInput
                placeholder="Endereço e número"
                placeholderTextColor="#888"
                style={{fontSize: 23}}
                onChangeText={handleChange}
              />
            </View>
          </TouchableOpacity>
          <View style={[globalStyles.divider, {marginTop: 10}]} />
          <TouchableOpacity onPress={handleLocation} style={styles.card}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <Icon
                name={'crosshairs'}
                size={35}
                color={Colors.red}
                style={{marginLeft: 20}}
              />
              <View style={styles.addressArea}>
                <Text style={styles.text}>Usar Localização do GPS</Text>
                <Text style={{fontSize: 16, color: 'gray', maxWidth: 300}}>
                  {currentAddress.length > 0
                    ? 'Localização Coletada  '
                    : 'Ativar Localização'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={globalStyles.divider} />

          <View style={styles.line}>
            <CardAddress
              onPress={() =>
                setCurrentAddress(
                  'Rua Darci Bittencourt 1692, São Paulo - SP, 02726-030',
                )
              }
              text={
                currentAddress.length > 0
                  ? currentAddress
                  : 'Rua Darci Bittencourt 1692, São Paulo - SP, 02726-030'
              }
              homeAddress={true}
            />
            <CardAddress
              onPress={() =>
                setCurrentAddress(
                  'Avenida Lions Club, 162 - Vila Santa Cecília, Volta Redonda - RJ, 27260-2503',
                )
              }
              text={
                'Avenida Lions Club, 162 - Vila Santa Cecília, Volta Redonda - RJ, 27260-2503'
              }
            />
            <CardAddress
              onPress={() =>
                setCurrentAddress(
                  'Avenida Munir Abude, 543 - Praia do Morro, Guarapari - ES, 29216-0454',
                )
              }
              text={
                'Avenida Munir Abude, 543 - Praia do Morro, Guarapari - ES, 29216-0454'
              }
            />
            <CardAddress
              onPress={() =>
                setCurrentAddress(
                  'Avenida Afonso Pena 4000, Belo Horizonte - MG, 30130-0091',
                )
              }
              text={'Avenida Afonso Pena 4000, Belo Horizonte - MG, 30130-0091'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 20,
    paddingHorizontal: 30,
  },
  searchArea: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#e3e3e3',
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  line: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#383838',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  addressArea: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 30,
    marginLeft: 10,
  },
});

export default Address;
