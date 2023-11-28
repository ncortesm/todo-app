import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://png.pngtree.com/png-vector/20221227/ourmid/pngtree-hand-drawn-app-folder-empty-state-vector-illustration-png-image_6507785.png'
        }}
      />
      <Text style={styles.title}>No hay tareas</Text>
      <Text style={styles.subtitle}>Agrega una nueva tarea para comenzar</Text>
    </View>
  );
};

export default memo(EmptyState);
