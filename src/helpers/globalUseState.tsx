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
  const [bagItems, setBagItems] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order[]>([]);
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentType, setPaymentType] = useState('');
  const [screenName, setScreenName] = useState('');

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
    bagItems,
    setBagItems,
    currentOrder,
    setCurrentOrder,
    orderHistory,
    setOrderHistory,
    totalPrice,
    setTotalPrice,
    paymentType,
    setPaymentType,
    screenName,
    setScreenName,
  };
};

export const useSharedGlobalState = () => useBetween(useStateVariables);
