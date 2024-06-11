import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../../../services/location/askLocationPermission';
import {getPosition} from '../../../services/location/getPosition';
import {handleEnabledPressed} from '../../../services/location/enableLocationModal';
import {getAddressFromCoordinates} from '../../../services/location/getLocationInfo';
import apiKey from '../../../../keys/hereapi.json';
import {getGPSStatus} from '../../../services/location/getGPSStatus';
import {useSharedGlobalState} from '../../../helpers/globalUseState';

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

export const useOnHandleLocation = () => {
  const {setCurrentAddress} = useSharedGlobalState();
  const handleLocation = async () => {
    const permissionGranted = await checkLocationPermission();

    if (permissionGranted) {
      console.log('Permission granted. Checking GPS status...');
      const locationAddress = await organizer();
      if (locationAddress !== null && locationAddress !== undefined) {
        setCurrentAddress(locationAddress);
      }
    } else {
      console.log('Permission not granted. Asking for permission...');
      const locationPermission = await requestLocationPermission();
      console.log('locationPermission in logic = ', locationPermission);
      if (locationPermission) {
        const locationAddress = await organizer();
        if (locationAddress !== null && locationAddress !== undefined) {
          setCurrentAddress(locationAddress);
        }
      }
    }
  };

  const organizer = async () => {
    const GPSStatus = await getGPSStatus();
    console.log('@ GPSStatus = ', GPSStatus);
    if (GPSStatus) {
      // if gps is on, get position and send position to get address
      const position = await getPosition();
      const locationAddress = await getAddressFromCoordinates(
        position.positionLatitude,
        position.positionLongitude,
        apiKey,
      );

      console.log('locationAddress = ', locationAddress);
      return locationAddress;
    } else {
      handleEnabledPressed();
    }
  };

  return handleLocation;
};

/*
@@@ STEPS @@@
- CheckPermission:
if not granted, ask permission
if granted, checkGPS Status: (if on, getPosition, if it is off, request blackModal to turn it on)

- GetLatlong
- SendLatLong to receive full Address
*/
