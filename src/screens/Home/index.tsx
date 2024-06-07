import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/Button/button';
//import {useInit, useSharedState} from './logic';
import {Navigation} from '../../context/interface';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen: React.FC<Navigation> = ({navigation}) => {
  //const {loading, setLoading} = useSharedState();
  //useInit();
  // ============================================================================
  return (
    <SafeAreaView style={styles.safeArea}>
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
          <View>
            <Text style={styles.titleText}>
              R. Leopoldino de Oliveira, 110{' '}
              <Icon name="chevron-down" size={20} color={'#F72020'} />
            </Text>
          </View>

          <View style={styles.bannerArea}>
            <Image
              source={require('../../assets/images/banner1.png')}
              style={[styles.image, styles.banner]}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  headlineArea: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  banner: {
    width: 350,
    height: 200,
    right: 50,
    bottom: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 30,
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
    padding: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 200,
  },
});

export default HomeScreen;
