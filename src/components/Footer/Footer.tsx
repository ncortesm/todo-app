import React, { memo, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface FooterProps {
  addTodo: (todo: string) => void;
}

const Footer = ({ addTodo }: FooterProps) => {
  const [isFocused, setFocus] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo === '') return;
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, isFocused && styles.focusedInput]}
          placeholder="Añade una nueva tarea..."
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={setNewTodo}
          value={newTodo}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Añadir tarea</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Footer);
