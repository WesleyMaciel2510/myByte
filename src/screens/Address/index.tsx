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

const Address: React.FC<Navigation> = ({navigation}) => {
  const handleChange = (value: string) => {
    console.log('Text input value:', value);
  };
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
            <Icon name={'chevron-left'} size={20} color={Colors.red} />
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
            <View style={{padding: 10, marginLeft: 10}}>
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
            <Icon
              name={'crosshairs'}
              size={35}
              color={Colors.red}
              style={{flex: 1, marginLeft: 10, alignSelf: 'center'}}
            />
            <View>
              <Text style={styles.text}>Usar Localização do GPS</Text>
              <Text style={{fontSize: 16, color: 'gray', maxWidth: 300}}>
                {currentAddress.length > 0
                  ? currentAddress
                  : 'Ativar Localização'}
              </Text>
            </View>
            <Icon
              name={'chevron-right'}
              size={20}
              color={'gray'}
              style={{flex: 1, alignSelf: 'center', left: 30}}
            />
          </TouchableOpacity>
          <View style={globalStyles.divider} />

          <View style={styles.line}></View>
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
  },
  searchArea: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#e3e3e3',
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 30,
    marginLeft: 10,
  },
});

export default Address;
