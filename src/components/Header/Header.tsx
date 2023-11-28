import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { ITodo } from '../../interfaces/ITodo';

interface HeaderProps {
  todos: ITodo[];
}

const Header = ({ todos }: HeaderProps) => {
  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas</Text>
      <Text style={styles.count}>
        ({completedTodosCount}/{todos.length}) tareas completadas
      </Text>
    </View>
  );
};

export default memo(Header);
