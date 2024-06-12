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
import CardSearch from '../../components/Cards/cardSearch';

const Search: React.FC<Navigation> = ({navigation}) => {
  const handleChange = (value: string) => {
    console.log('Text input value:', value);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.searchArea}
            onPress={() => console.log('aaaaaaaaaaaa')}>
            <View style={{alignSelf: 'center'}}>
              <Icon name="search" size={25} color={'#F72020'} />
            </View>
            <View style={{padding: 10, marginLeft: 10}}>
              <TextInput
                placeholder="Buscar item no App"
                placeholderTextColor="#888"
                style={{fontSize: 23}}
                onChangeText={handleChange}
              />
            </View>
          </TouchableOpacity>
          <Text style={[styles.title, {marginTop: 30}]}> Categorias </Text>
          <View style={styles.line}>
            <CardSearch
              onPress={() => console.log('Card1 pressed')}
              text="Mercado"
              imgPath={require('../../assets/images/supermarket.png')}
              color={'#fff'}
            />
            <CardSearch
              onPress={() => console.log('Card2 pressed')}
              text="Farmácia"
              imgPath={require('../../assets/images/medicalKit.png')}
              color={'#fff'}
            />
          </View>
          <View style={styles.line}>
            <CardSearch
              onPress={() => console.log('Card2 pressed')}
              text="Bebidas"
              imgPath={require('../../assets/images/drink.png')}
              color={'#fff'}
            />
            <CardSearch
              onPress={() => console.log('Card1 pressed')}
              text="Lanche"
              imgPath={require('../../assets/images/snack.png')}
              color={'#fff'}
            />
          </View>
          <View style={styles.line}>
            <CardSearch
              onPress={() => console.log('Card1 pressed')}
              text="Restaurante"
              imgPath={require('../../assets/images/restaurant.png')}
              color={'#fff'}
            />
            <CardSearch
              onPress={() => console.log('Card2 pressed')}
              text="Espetinho"
              imgPath={require('../../assets/images/yakitori.png')}
              color={'#fff'}
            />
          </View>
          <View style={styles.line}>
            <CardSearch
              onPress={() => console.log('Card1 pressed')}
              text="Sorvete"
              imgPath={require('../../assets/images/icecream.png')}
              color={'#fff'}
            />
            <CardSearch
              onPress={() => console.log('Card2 pressed')}
              text="Doces e Bolos"
              imgPath={require('../../assets/images/cake.png')}
              color={'#fff'}
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
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#383838',
  },
});

export default Search;
