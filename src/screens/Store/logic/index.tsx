import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';

export const useStateVariables = () => {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    'Option Restaurantes',
  );
  return {
    loading,
    setLoading,
    selectedOption,
    setSelectedOption,
  };
};

export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  //const {description, setDescription, loading, setLoading} = useSharedState();
  useEffect(() => {
    console.log('useInit working!!');
  }, []);
};
