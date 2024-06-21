import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles/colors';

interface PaymentRowProps {
  iconName: string;
  iconColor?: string;
  text: string;
  description?: string;
  isSelected: boolean;
  onPress: () => void;
}

const PaymentRow: React.FC<PaymentRowProps> = ({
  iconName,
  iconColor = '',
  text,
  description,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          flexDirection: 'row',
          borderColor: isSelected ? Colors.red : '#d3d3d3',
        },
      ]}
      onPress={onPress}>
      <Icon
        name={iconName}
        size={30}
        color={iconColor.length > 0 ? iconColor : Colors.secondary}
        style={styles.leftIcon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
    height: 80,
  },
  leftIcon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default PaymentRow;
