import {Order} from '../context/interface';
import {storage} from './storage';

export const updateOrderHistory = (newOrder: Order[]) => {
  const storedCurrentOrder = storage.getString('currentOrder');
  let currentOrders = [];

  if (storedCurrentOrder) {
    currentOrders = JSON.parse(storedCurrentOrder);
  }

  // Add the new order to the existing array
  const updatedCurrentOrder = [...currentOrders, newOrder];
  console.log('@@@ updatedCurrentOrder = ', updatedCurrentOrder[0]);
  // Save the updated array back to storage
  storage.set('currentOrder', JSON.stringify(updatedCurrentOrder[0]));

  return updatedCurrentOrder[0];
};
