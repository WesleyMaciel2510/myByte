import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button/button';
import {/* useInit, useSharedState */ flatListImages} from './logic';
import {Navigation} from '../../context/interface';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardHome from '../../components/Cards/cardHome';
import {globalStyles} from '../../styles/globalStyles';
import {Colors} from '../../styles/colors';
import {useSharedGlobalState} from '../../helpers/globalUseState';

const Home: React.FC<Navigation> = ({navigation}) => {
  //const {loading, setLoading} = useSharedState();
  const {currentAddress, setCategorySelected} = useSharedGlobalState();
  //useInit();

  // ============================================================================
  const match = currentAddress.match(/(.*?\d+)/); //regex to show only
  const streetAndNumber = match ? match[0] : ''; //street and number
  // ============================================================================
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/images/food.jpg')}
            style={styles.headlineArea}
            resizeMode="cover">
            <Image
              source={require('../../assets/images/title.png')}
              style={[styles.image, styles.title]}
            />
            <Image
              source={require('../../assets/images/potato.png')}
              style={[styles.image, styles.potato]}
            />
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => navigation.navigate('PrivacyPolicy')}
                text={'Conferir Ofertas'}
                width={'33%'}
              />
            </View>
          </ImageBackground>
          <View style={styles.roundedCornerOverlay} />
          <View style={styles.contentArea}>
            <TouchableOpacity onPress={() => navigation.navigate('Address')}>
              <Text style={styles.titleText}>
                {currentAddress.length > 0
                  ? streetAndNumber
                  : 'Ativar Localização'}
                <Icon name="chevron-down" size={20} color={'#F72020'} />
              </Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
              <View style={{flex: 1}}>
                <CardHome
                  onPress={() => {
                    setCategorySelected('Restaurante');
                    navigation.navigate('Category');
                  }}
                  imgPath={require('../../assets/images/restaurant.png')}
                  text="Restaurante"
                />
              </View>
              <View style={{flex: 1}}>
                <CardHome
                  onPress={() => {
                    setCategorySelected('Lanche');
                    navigation.navigate('Category');
                  }}
                  imgPath={require('../../assets/images/snack.png')}
                  text="Lanche"
                />
              </View>
            </View>
            <View
              style={{
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
                style={[
                  styles.button,
                  {backgroundColor: Colors.red, flexDirection: 'row'},
                ]}>
                <Icon
                  name="plus"
                  size={25}
                  color={'#fff'}
                  style={{marginHorizontal: 10}}
                />
                <Text style={{color: '#fff', fontSize: 20}}>Opções</Text>
              </TouchableOpacity>
            </View>

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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  headlineArea: {
    flex: 1,
    width: '100%',
    height: 300,
  },
  contentArea: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  image: {
    resizeMode: 'center',
    position: 'absolute',
  },
  potato: {
    width: 70,
    height: 100,
    right: 50,
    top: 150,
  },
  title: {
    width: 200,
    height: 200,
    left: 120,
    top: 50,
  },
  bannerArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    padding: 10,
  },
  banner: {
    width: 350,
    height: 200,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 15,
    borderRadius: 10,
  },
  roundedCornerOverlay: {
    position: 'absolute',
    bottom: 0,
    top: '33%',
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    padding: 30,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 200,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    width: '35%',
  },
});

export default Home;
