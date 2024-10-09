import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { Ionicons } from '@expo/vector-icons';

type CreateTodoComponentProps = {
  allTodos: string[];
  setAllTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

const TodoList = ({ allTodos, setAllTodos }: CreateTodoComponentProps) => {
  const handleDelete = (index: number) => {
    setAllTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <ThemedView style={styles.container}>
      {allTodos.map((el, index) => (
        <View style={styles.itemContainer} key={index}>
          <ThemedText style={styles.itemText}>
            {index + 1}. {el}
          </ThemedText>
          <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
            <Ionicons name="trash" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      ))}
    </ThemedView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#534332',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 4,
  },
});
