import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';

export const useStateVariables = () => {
  const [selectPaymentSection, setSelectPaymentSection] = useState(false);
  const [selectedOption, setSelectedOption] = useState('APP');
  const [toggleButton, setToggleButton] = useState(false);
  return {
    selectPaymentSection,
    setSelectPaymentSection,
    selectedOption,
    setSelectedOption,
    toggleButton,
    setToggleButton,
  };
};

export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  //const {} = useSharedGlobalState();
  useEffect(() => {
    console.log('useInit working!!');
  }, []);
};
