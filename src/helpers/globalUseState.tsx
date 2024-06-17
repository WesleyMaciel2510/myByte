import {useState} from 'react';
import {useBetween} from 'use-between';

export const useStateVariables = () => {
  const [internetOn, setInternetOn] = useState(true);
  const [latlong, setLatlong] = useState(['']);
  const [currentAddress, setCurrentAddress] = useState('');
  const [categorySelected, setCategorySelected] = useState('');
  const [typeOfProduct, setTypeOfProduct] = useState('');
  const [storeSelected, setStoreSelected] = useState('');
  return {
    internetOn,
    setInternetOn,
    latlong,
    setLatlong,
    currentAddress,
    setCurrentAddress,
    categorySelected,
    setCategorySelected,
    typeOfProduct,
    setTypeOfProduct,
    storeSelected,
    setStoreSelected,
  };
};

export const useSharedGlobalState = () => useBetween(useStateVariables);
