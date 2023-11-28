import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FEFEFF',
    borderRadius: 16,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  todoText: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 18,
    fontWeight: '600'
  },
  todoInput: {
    fontSize: 16,
    flex: 1,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 8,
    fontWeight: '600'
  },
  completedTodo: {
    textDecorationLine: 'line-through'
  },
  buttons: {
    flexDirection: 'row'
  }
});
