import {promptForEnableLocationIfNeeded} from 'react-native-android-location-enabler';
import {Platform} from 'react-native';

export const handleEnabledPressed = async () => {
  if (Platform.OS === 'android') {
    try {
      const enableResult = await promptForEnableLocationIfNeeded();
      console.log('enableResult', enableResult);
      return enableResult;
      // The user has accepted to enable the location services
      // data can be :
      //  - "already-enabled" if the location services has been already enabled
      //  - "enabled" if user has clicked on OK button in the popup
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        return error;
        // The user has not accepted to enable the location services or something went wrong during the process
        // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
        // codes :
        //  - ERR00 : The user has clicked on Cancel button in the popup
        //  - ERR01 : If the Settings change are unavailable
        //  - ERR02 : If the popup has failed to open
        //  - ERR03 : Internal error
      }
    }
  }
};
