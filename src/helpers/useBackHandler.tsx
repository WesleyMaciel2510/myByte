// Use this custom Hook everytime you need to handleBackButton;

// useBackHandler.js
import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import {useSharedGlobalState} from './globalUseState';

const useBackHandler = (action: any) => {
  const navigation = useNavigation();
  //const {} = useSharedGlobalState();
  useEffect(() => {
    const backAction = () => {
      action();
      return true; // Returning true means we handled the back button press
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    // Cleanup the event listener on component unmount
    return () => backHandler.remove();
  }, [action]);
};

export default useBackHandler;
