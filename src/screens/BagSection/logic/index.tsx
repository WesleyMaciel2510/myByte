import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import {useSharedGlobalState} from '../../../helpers/globalUseState';

export const useStateVariables = () => {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    'Option Restaurantes',
  );
  const [productAmount, setProductAmount] = useState(0);
  const [productDescription, setProductDescription] = useState('');
  return {
    loading,
    setLoading,
    selectedOption,
    setSelectedOption,
    productAmount,
    setProductAmount,
    productDescription,
    setProductDescription,
  };
};

export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  //const {} = useSharedGlobalState();
  useEffect(() => {
    console.log('useInit working!!');
  }, []);
};
export const flatListImages = [
  require('../../../assets/images/banner/banner1.png'),
  require('../../../assets/images/banner/banner2.png'),
  require('../../../assets/images/banner/banner3.png'),
];
