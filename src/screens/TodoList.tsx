import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';
import { EmptyState } from '../components/EmptyState';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { TodoItem } from '../components/TodoItem';
import { ITodo } from '../interfaces/ITodo';

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [editingIndex, setEditingIndex] = useState<number>();

  const addTodo = useCallback(
    (todo: string) => {
      if (todo === '') return;
      setTodos([...todos, { text: todo, completed: false }]);
    },
    [setTodos, todos]
  );

  const updateTodo = useCallback(
    (index: number, text: string) => {
      const newTodos = [...todos];
      newTodos[index].text = text;
      setTodos(newTodos);
    },
    [todos]
  );

  const toggleComplete = useCallback(
    (index: number) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    },
    [todos]
  );

  const removeTodo = useCallback(
    (index: number) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <View style={styles.container}>
      {todos.length === 0 && <EmptyState />}
      {todos.length > 0 && (
        <>
          <Header todos={todos} />
          <View style={styles.todoList}>
            <FlatList
              data={todos}
              renderItem={({ item: todo, index }) => (
                <TodoItem
                  key={index}
                  index={index}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  updateTodo={updateTodo}
                  setEditingIndex={setEditingIndex}
                  removeTodo={removeTodo}
                  editingIndex={editingIndex}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </>
      )}

      <Footer addTodo={addTodo} />
    </View>
  );
};

export default TodoList;
