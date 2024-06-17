import {useState} from 'react';
import {useBetween} from 'use-between';

export const useStateVariables = () => {
  const [internetOn, setInternetOn] = useState(true);
  const [latlong, setLatlong] = useState(['']);
  const [currentAddress, setCurrentAddress] = useState('');
  const [categorySelected, setCategorySelected] = useState('');
  const [storeSelected, setStoreSelected] = useState('');
  const [itemSelected, setItemSelected] = useState('');
  const [typeOfProduct, setTypeOfProduct] = useState('');
  const [currentOrder, setCurrentOrder] = useState({
    product: '',
    amount: 0,
    price: 0.0,
  });
  return {
    internetOn,
    setInternetOn,
    latlong,
    setLatlong,
    currentAddress,
    setCurrentAddress,
    categorySelected,
    setCategorySelected,
    storeSelected,
    setStoreSelected,
    itemSelected,
    setItemSelected,
    typeOfProduct,
    setTypeOfProduct,
    currentOrder,
    setCurrentOrder,
  };
};

export const useSharedGlobalState = () => useBetween(useStateVariables);
