import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import {useSharedGlobalState} from '../../../helpers/globalUseState';
import {StackNavigationProp} from '@react-navigation/stack';

type Navigation = StackNavigationProp<RootStackParamList>;

export const useStateVariables = () => {
  const [loading, setLoading] = useState(false);
  return {
    loading,
    setLoading,
  };
};

export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  //const {description, setDescription, loading, setLoading} = useSharedState();
  useEffect(() => {
    console.log('useInit working!!');
  }, []);
};

export const useCustomNavigation = ({navigation}: {navigation: Navigation}) => {
  const {setTypeOfProduct, setStoreSelected} = useSharedGlobalState();

  const navigateToScreen = (itemPressed: any, screenName: string) => {
    console.log('chamou useNavigation');
    console.log('screenName = ', screenName);
    setStoreSelected(itemPressed);

    if (screenName === 'Store') {
      console.log('foi para tela da LOJA');
      navigation.navigate(screenName);
    } else {
      console.log('foi para tela de ITEMS');
    }
  };

  return {navigateToScreen};
};

export const flatListImages = [
  require('../../../assets/images/banner/banner1.png'),
  require('../../../assets/images/banner/banner2.png'),
  require('../../../assets/images/banner/banner3.png'),
  //require('../../../assets/images/banner/banner4.png'),
];
