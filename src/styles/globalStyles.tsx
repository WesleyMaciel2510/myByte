import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#383838',
    padding: 20,
    marginLeft: 10,
  },
  divider: {
    height: 2,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 10,
  },
});
