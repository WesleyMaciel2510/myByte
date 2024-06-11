import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Navigation} from '../../context/interface';
import UserSection from '../../components/Cards/userSection';

const Profile: React.FC<Navigation> = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.title, {marginTop: 30}]}> Perfil </Text>
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Notificações'}
            iconName={'bell'}
          />
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Pagamentos'}
            iconName={'credit-card'}
          />
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Cupons'}
            iconName={'ticket'}
          />
          <UserSection
            onPress={() => console.log('apertou')}
            text={'Notificações'}
            iconName={'bell'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#383838',
    padding: 20,
    marginLeft: 10,
  },
});

export default Profile;
