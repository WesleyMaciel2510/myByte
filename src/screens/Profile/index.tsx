import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Navigation} from '../../context/interface';
import UserSection from '../../components/Cards/userSection';
import {globalStyles} from '../../styles/globalStyles';

const Profile: React.FC<Navigation> = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.container, {paddingHorizontal: 20}]}>
      <ScrollView>
        <View>
          <View style={styles.headerArea}>
            <Image
              source={require('../../assets/images/user1.png')}
              style={styles.userImage}
            />
            <Text style={styles.title}> Perfil </Text>
          </View>

          <UserSection
            onPress={() => console.log('apertou')}
            text={'Notificações'}
            iconName={'bell'}
          />
          <View style={globalStyles.divider} />
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Pagamentos'}
            iconName={'credit-card'}
          />
          <View style={globalStyles.divider} />
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Dados da Conta'}
            iconName={'newspaper-o'}
          />
          <View style={globalStyles.divider} />
          <UserSection
            onPress={() => navigation.navigate('Address')}
            text={'Meus Endereços'}
            iconName={'map-marker'}
          />
          <View style={globalStyles.divider} />
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Cupons'}
            iconName={'ticket'}
          />
          <View style={globalStyles.divider} />
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Limpar Dados'}
            iconName={'trash-o'}
          />
          <View style={globalStyles.divider} />
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Configurações'}
            iconName={'gear'}
          />
          <View style={globalStyles.divider} />
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Sair'}
            iconName={'sign-out'}
          />
          <View style={globalStyles.divider} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerArea: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    color: '#383838',
    padding: 20,
    marginLeft: 10,
  },
});

export default Profile;
