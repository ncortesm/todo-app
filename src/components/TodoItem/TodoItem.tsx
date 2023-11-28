import React, { memo, useRef, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

import { styles } from './styles';
import { ITodo } from '../../interfaces/ITodo';

interface TodoItemProps {
  index: number;
  todo: ITodo;
  toggleComplete: (index: number) => void;
  updateTodo: (index: number, text: string) => void;
  setEditingIndex: (index?: number) => void;
  removeTodo: (index: number) => void;
  editingIndex: number | undefined;
}

const TodoItem = ({
  todo,
  toggleComplete,
  updateTodo,
  setEditingIndex,
  removeTodo,
  index,
  editingIndex
}: TodoItemProps) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (editingIndex === index) {
      inputRef.current?.focus();
    }
  }, [editingIndex, index]);

  return (
    <View style={styles.todoItem}>
      <CheckBox
        checked={todo.completed}
        onPress={() => toggleComplete(index)}
        checkedColor="#33D176"
      />
      {editingIndex === index ? (
        <>
          <TextInput
            ref={inputRef}
            style={styles.todoInput}
            onChangeText={(text) => updateTodo(index, text)}
            value={todo.text}
          />

          <Icon
            reverse
            size={16}
            name="check"
            type="font-awesome"
            color="#33D176"
            onPress={() => setEditingIndex(undefined)}
          />
        </>
      ) : (
        <>
          <Text
            style={[styles.todoText, todo.completed && styles.completedTodo]}>
            {todo.text}
          </Text>
          <View style={styles.buttons}>
            {!todo.completed && (
              <Icon
                reverse
                size={16}
                name="pencil"
                type="font-awesome"
                color="blue"
                onPress={() => setEditingIndex(index)}
              />
            )}
            <Icon
              reverse
              size={16}
              name="trash"
              type="font-awesome"
              color="red"
              onPress={() => removeTodo(index)}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default memo(TodoItem);
