import {isLocationEnabled} from 'react-native-android-location-enabler';
import {Platform} from 'react-native';

export const getGPSStatus = async () => {
  //console.log('chamou handleCheckPressed');
  if (Platform.OS === 'android') {
    const checkEnabled: boolean = await isLocationEnabled();
    //console.log('checkEnabled = ', checkEnabled);
    return checkEnabled;
  }
};
