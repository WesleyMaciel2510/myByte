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
import {useSharedGlobalState} from '../../helpers/globalUseState';
import useBackHandler from '../../helpers/useBackHandler';
import RowOption from './RowOption';
import {useSharedState} from './logic';
import PaymentOption from './PaymentOptions';
const Payment: React.FC<Navigation> = ({navigation}) => {
  const {setScreenName, currentOrder, totalPrice} = useSharedGlobalState();
  const {selectPaymentSection, setSelectPaymentSection} = useSharedState();
  // ============================================================================
  const goBack = () => {
    setScreenName('ItemSelected');
    navigation.goBack();
  };
  useBackHandler(goBack);
  // ============================================================================
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={goBack}>
            <Icon name={'chevron-left'} size={20} color={Colors.red} />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            {/* <Text style={styles.titleText}>PAGAMENTO</Text> */}
            <TouchableOpacity
              onPress={() => setSelectPaymentSection(!selectPaymentSection)}>
              <Text style={styles.titleText}>PAGAMENTO</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentArea}>
          {/* Select Payment Section Placeholder */}
          {selectPaymentSection ? (
            <PaymentOption navigation={navigation} />
          ) : (
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <Image
                    source={require('../../assets/images/mcdonalds.jpg')}
                    style={styles.image}
                    resizeMode="center"
                  />
                </View>
                <View
                  style={{flex: 4, flexDirection: 'column', paddingLeft: 20}}>
                  <Text style={styles.text}>McDonald's - Unidade Centro</Text>
                  <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Store')}>
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
              <View>
                <Text
                  style={[styles.title, {textAlign: 'left', marginBottom: 10}]}>
                  Pagamento
                </Text>
                <RowOption
                  iconName={'credit-card-alt'}
                  titleText={'Formas de Pagamento'}
                  description={'Escolha uma Opção'}
                  onPress={() => {
                    console.log('pressed');
                    setSelectPaymentSection(true);
                  }}
                />
                <RowOption
                  iconName={'ticket'}
                  titleText={'Cupom de Desconto'}
                  description={'1 Cupom Disponível'}
                  onPress={() => console.log('Cupom')}
                />
              </View>
              {currentOrder.length > 0 && (
                <View>
                  <Text
                    style={[
                      styles.title,
                      {textAlign: 'left', marginBottom: 10},
                    ]}>
                    Resumo de Valores
                  </Text>
                  <View style={styles.priceSection}>
                    <View style={styles.column}>
                      <Text style={styles.label}>Subtotal</Text>
                      <Text style={styles.label}>Taxa de Entrega</Text>
                      <Text
                        style={[
                          styles.label,
                          {fontWeight: 'bold', fontSize: 20},
                        ]}>
                        Total
                      </Text>
                    </View>
                    <View style={styles.column}>
                      <Text style={styles.value}>R$ {totalPrice}</Text>
                      <Text style={styles.value}>R$ 7,99</Text>
                      <Text
                        style={[
                          styles.value,
                          {fontWeight: 'bold', fontSize: 20},
                        ]}>
                        R$ {totalPrice + 7.99}
                      </Text>
                    </View>
                  </View>
                </View>
              )}

              {/* Divider and CPF Option */}
              <View style={styles.divider} />
              <View style={{marginVertical: 10}}>
                <RowOption
                  iconName={'address-card'}
                  titleText={'CPF na Nota'}
                  description={'Registre seu CPF'}
                  onPress={() => console.log('CPF')}
                />
              </View>
            </View>
          )}
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
    fontSize: 20,
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

export default Payment;
