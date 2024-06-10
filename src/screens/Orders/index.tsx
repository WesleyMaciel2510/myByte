import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Navigation} from '../../context/interface';

const Orders: React.FC<Navigation> = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text> Orders Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default Orders;
