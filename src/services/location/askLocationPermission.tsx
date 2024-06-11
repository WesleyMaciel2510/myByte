import {PermissionsAndroid, Alert} from 'react-native';

export const requestLocationPermission = async () => {
  try {
    console.log('Requesting location permission...');
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    console.log('result = ', result);
    if (result === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted!');
    } else {
      console.log('Location permission denied!');
      Alert.alert(
        'Permission Denied',
        'Please go to App Settings and Grant the permission or clean the Cache.',
      );
    }
    return result;
  } catch (error) {
    console.error('Error in requestLocationPermission:', error);
    return PermissionsAndroid.RESULTS.DENIED;
  }
};

export const checkLocationPermission = async () => {
  try {
    console.log('Called @checkLocationPermission...');
    const result = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    console.log('Location permission status:', result);
    return result;
  } catch (error) {
    console.error('Error in checkLocationPermission:', error);
    return false;
  }
};
