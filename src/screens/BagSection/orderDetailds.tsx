import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface OrderItemProps {
  item: {
    title: string;
    price: string;
    quantity: number;
    name: string;
  };
}

const OrderItem: React.FC<OrderItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.price}>
          R$
          <Text style={styles.priceValue}>{item.price}</Text>
        </Text>
        <Text style={styles.quantity}>{item.quantity} item</Text>
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  priceValue: {
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 12,
  },
  name: {
    fontStyle: 'italic',
  },
});

export default OrderItem;
