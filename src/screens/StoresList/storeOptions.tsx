import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface StoreOptionsProps {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const StoreOptions: React.FC<StoreOptionsProps> = ({
  text,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        isSelected && styles.selected,
        {backgroundColor: isSelected ? '#f57e7d' : '#f2f5f2'},
      ]}
      onPress={onPress}>
      <Text style={[styles.optionText, {color: isSelected ? '#fff' : 'black'}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#eee',
    margin: 5,
  },
  selected: {
    borderWidth: 1,
    borderColor: 'red',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default StoreOptions;
