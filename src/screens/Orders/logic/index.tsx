import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import {storage} from '../../../helpers/storage';
import {Order} from '../../../context/interface';
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
  const {currentOrder, orderHistory, setOrderHistory} = useSharedGlobalState();

  useEffect(() => {
    console.log('useInit working in Orders!!');

    const storedOrders = storage.getString('HistoryOrderList');
    if (storedOrders) {
      const parsedOrders: Order[] = JSON.parse(storedOrders);
      console.log('parsedOrders = ', parsedOrders);
      setOrderHistory(parsedOrders);
    }
  }, []);
};
