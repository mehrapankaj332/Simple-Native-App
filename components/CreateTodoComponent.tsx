import React, { useState } from 'react';
import { Alert, Button, Platform, StyleSheet, TextInput } from 'react-native';
import { ThemedView } from './ThemedView';

type CreateTodoComponentProps = {
  allTodos: string[];
  setAllTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function CreateTodoComponent ({allTodos, setAllTodos}: CreateTodoComponentProps) {
  const [todo, setTodo] = useState("");
  const handleAddTodo=()=>{
    if (!todo.trim()) {
      Alert.alert("Please enter a valid todo item.");
      return;
    }
    setAllTodos([todo, ...allTodos]);
    setTodo('');
  };

  return (
    <ThemedView style={styles.container}>
      <TextInput
        placeholder="Enter your todo..."
        value={todo}
        onChangeText={setTodo}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <Button 
       title="Add Todo" 
       onPress={handleAddTodo} 
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    padding: 16,
    shadowColor: Platform.OS === 'ios' ? '#000' : '#00000066',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  button: {
    textTransform:'none'
  }
});