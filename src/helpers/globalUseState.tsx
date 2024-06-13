import {useState} from 'react';
import {useBetween} from 'use-between';

export const useStateVariables = () => {
  const [internetOn, setInternetOn] = useState(true);
  const [latlong, setLatlong] = useState(['']);
  const [currentAddress, setCurrentAddress] = useState('');
  const [categorySelected, setCategorySelected] = useState('');
  return {
    internetOn,
    setInternetOn,
    latlong,
    setLatlong,
    currentAddress,
    setCurrentAddress,
    categorySelected,
    setCategorySelected,
  };
};

export const useSharedGlobalState = () => useBetween(useStateVariables);
