import {StackNavigationProp} from '@react-navigation/stack';

export interface Navigation {
  navigation: StackNavigationProp<any>;
}

export interface Order {
  id: number;
  productName: string;
  cost: string;
  store: string;
  description: string;
}
