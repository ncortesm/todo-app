import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 10,
    paddingBottom: getBottomSpace() + 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderTopColor: '#F2F2F2'
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '80%',
    marginTop: 20
  },
  input: {
    height: 40,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  focusedInput: {
    borderColor: '#6F57E1'
  },
  button: {
    backgroundColor: '#5438DC',
    padding: 13,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
