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
//import {useSharedGlobalState} from '../../helpers/globalUseState';
//import {useSharedState} from './logic';

const BagSection: React.FC<Navigation> = ({navigation}) => {
  /* const {itemSelected, storeSelected, currentOrder, setCurrentOrder} =
    useSharedGlobalState();
  const {
    productAmount,
    setProductAmount,
    productDescription,
    setProductDescription,
  } = useSharedState(); */

  // ============================================================================
  const goBack = () => {
    navigation.goBack();
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
            <Text style={styles.titleText}>SACOLA</Text>
          </View>
        </View>

        <View style={styles.contentArea}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Image
                  source={require('../../assets/images/mddonalds.jpg')}
                  style={styles.image}
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
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}> 2 Sanduíches com desconto</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contentArea: {
    padding: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 20,
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
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    // maxHeight: 30,
    flexWrap: 'wrap',
    marginHorizontal: 10,
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
});

export default BagSection;
