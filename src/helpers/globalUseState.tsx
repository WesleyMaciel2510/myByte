import {useState} from 'react';
import {useBetween} from 'use-between';
import {Order} from '../context/interface';

export const useStateVariables = () => {
  const [internetOn, setInternetOn] = useState(true);
  const [latlong, setLatlong] = useState(['']);
  const [currentAddress, setCurrentAddress] = useState('');
  const [categorySelected, setCategorySelected] = useState('');
  const [storeSelected, setStoreSelected] = useState('');
  const [itemSelected, setItemSelected] = useState(['']);
  const [typeOfProduct, setTypeOfProduct] = useState('');
  const [currentOrder, setCurrentOrder] = useState<Order[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
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
    totalPrice,
    setTotalPrice,
  };
};

export const useSharedGlobalState = () => useBetween(useStateVariables);
