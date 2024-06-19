import React from 'react';
import AppStack from './src/routes';
import BottomIcons from './src/components/Button/bottomIcons';

import {NavigationContainer} from '@react-navigation/native';
import OrderSummary from './src/components/Modals/OrderSummary';

const App: React.FC = () => {
  const produtosSelecionados = true;
  return (
    <NavigationContainer>
      <AppStack />
      {produtosSelecionados && <OrderSummary />}
      <BottomIcons />
    </NavigationContainer>
  );
};

export default App;
