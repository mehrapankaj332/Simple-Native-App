import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CreateTodoComponent from '@/components/CreateTodoComponent';
import { useState } from 'react';
import TodoList from '@/components/TodoList';

export default function HomeScreen() {
  const [allTodos, setAllTodos]=useState([]);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerComponent={
       <CreateTodoComponent allTodos={allTodos} setAllTodos={setAllTodos}/>
      }>
      <TodoList allTodos={allTodos} setAllTodos={setAllTodos}/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
