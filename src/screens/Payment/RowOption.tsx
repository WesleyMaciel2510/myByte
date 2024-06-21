import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles/colors';

interface RowProps {
  iconName: string;
  titleText: string;
  description: string;
  onPress: () => void;
}

const RowOption: React.FC<RowProps> = ({
  iconName,
  titleText,
  description,
  onPress,
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        name={iconName}
        size={30}
        color={'#2f3133'}
        style={{paddingVertical: 10, marginRight: 20}}
      />
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={styles.text}>{titleText}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.description,
            {
              color: Colors.red,
              fontWeight: 'bold',
              padding: 10,
            },
          ]}>
          {titleText === 'Formas de Pagamento' ? 'Escolher' : 'Adicionar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 18,
    paddingBottom: 20,
    maxWidth: 200,
    flexWrap: 'wrap',
  },
});

export default RowOption;
