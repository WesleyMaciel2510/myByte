import React, {useEffect} from 'react';
import AppStack from './src/routes';
import BottomIcons from './src/components/Button/bottomIcons';

import {NavigationContainer} from '@react-navigation/native';
import OrderSummary from './src/components/Modals/OrderSummary';
import {useSharedGlobalState} from './src/helpers/globalUseState';
const App: React.FC = () => {
  const {bagItems} = useSharedGlobalState();
  // ==========================================
  return (
    <NavigationContainer>
      <AppStack />
      {bagItems.length > 0 && <OrderSummary />}
      <BottomIcons />
    </NavigationContainer>
  );
};

export default App;
