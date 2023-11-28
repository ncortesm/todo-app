import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 16,
    backgroundColor: '#FBFBFB',
    width: '100%'
  },
  todoList: {
    flex: 0.77
  }
});
