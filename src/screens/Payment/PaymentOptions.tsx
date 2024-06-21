import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles/colors';
import {useSharedState} from './logic';
import {Navigation} from '../../context/interface';
import PaymentRow from './PaymentRow';
import {useSharedGlobalState} from '../../helpers/globalUseState';
import Button from '../../components/Button/button';

const PaymentOption: React.FC<Navigation> = ({navigation}) => {
  const {selectedOption, setSelectedOption, toggleButton, setToggleButton} =
    useSharedState();
  const {paymentType, setPaymentType} = useSharedGlobalState();
  // =============================================================================
  const handlePaymentRowPress = (text: string) => {
    if (paymentType !== text) {
      setPaymentType(text);
    }
  };

  const paymentOptions = [
    {prefix: 'Elo', iconName: 'credit-card-alt', iconColor: 'black'},
    {prefix: 'Mastercard', iconName: 'cc-mastercard', iconColor: 'red'},
    {prefix: 'Visa', iconName: 'cc-visa', iconColor: 'orange'},
  ];
  // =============================================================================
  const renderPaymentOptions = (type: string) => {
    return paymentOptions.map((option, index) => {
      const text = `${option.prefix} ${type}`;
      return (
        <PaymentRow
          key={`${option.prefix}-${type}`}
          iconName={option.iconName}
          iconColor={option.iconColor}
          text={text}
          isSelected={paymentType === text}
          onPress={() => handlePaymentRowPress(text)}
        />
      );
    });
  };
  // =============================================================================

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => setSelectedOption('APP')}
          style={[
            styles.tabSection,
            selectedOption === 'APP' && styles.selectedTabSection,
          ]}>
          <Text style={styles.tabText}>PAGUE PELO APP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedOption('ENTREGA')}
          style={[
            styles.tabSection,
            selectedOption === 'ENTREGA' && styles.selectedTabSection,
          ]}>
          <Text style={styles.tabText}>PAGUE NA ENTREGA</Text>
        </TouchableOpacity>
      </View>
      {selectedOption === 'APP' ? (
        /* { PAGUE PELO APP SECTION } */
        <View>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <Icon
                name={'briefcase'}
                size={30}
                color={Colors.secondary}
                style={styles.leftIcon}
              />
              <View style={styles.textContainer}>
                <Text style={styles.description}>Saldo da Carteira</Text>
                <Text style={styles.text}>R$ 0,00</Text>
              </View>
              <TouchableOpacity onPress={() => setToggleButton(!toggleButton)}>
                <Icon
                  name={toggleButton ? 'toggle-on' : 'toggle-off'}
                  size={30}
                  color={'#2f3133'}
                  style={styles.rightIcon}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Store')}
              style={styles.addItem}>
              <Text style={styles.addItemText}>Adicionar Saldo </Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.title, {textAlign: 'left', marginBottom: 10}]}>
            Formas de Pagamento
          </Text>
          <View style={styles.paymentRowSection}>
            <PaymentRow
              iconName="credit-card-alt"
              text="Cartão de Crédito"
              description="Selecione seu Cartão de Crédito"
              isSelected={paymentType === 'Cartão de Crédito - APP'}
              onPress={() => handlePaymentRowPress('Cartão de Crédito - APP')}
            />
            <PaymentRow
              iconName="diamond"
              text="Pix"
              description="Prático e Rápido"
              isSelected={paymentType === 'Pix'}
              onPress={() => handlePaymentRowPress('Pix')}
            />
            <PaymentRow
              iconName="google-plus-square"
              text="Google Pay"
              description="Organize sua carteira com o Google"
              isSelected={paymentType === 'Google Pay'}
              onPress={() => handlePaymentRowPress('Google Pay')}
            />
          </View>
          <View>
            <Button
              onPress={() => console.log('')}
              color={'#EA0033'}
              text={'Adicionar novo cartão'}
            />
          </View>
        </View>
      ) : (
        /* { PAGUE NA ENTREGA } */
        <View style={{marginVertical: 10}}>
          <PaymentRow
            iconName="money"
            iconColor="green"
            text="Dinheiro"
            isSelected={paymentType === 'Dinheiro'}
            onPress={() => handlePaymentRowPress('Dinheiro')}
          />
          <Text style={[styles.title, {textAlign: 'left', marginBottom: 10}]}>
            Crédito
          </Text>
          {renderPaymentOptions('Crédito')}
          <Text style={[styles.title, {textAlign: 'left', marginBottom: 10}]}>
            Débito
          </Text>
          {renderPaymentOptions('Débito')}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabSection: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  selectedTabSection: {
    borderBottomColor: Colors.red,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap',
  },
  wrapper: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  leftIcon: {
    paddingVertical: 10,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  rightIcon: {
    paddingRight: 20,
    marginLeft: 'auto',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 18,
    color: '#333',
  },
  addItem: {
    marginTop: 10,
  },
  addItemText: {
    color: Colors.red,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#383838',
    marginVertical: 20,
  },
  paymentRowSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PaymentOption;
