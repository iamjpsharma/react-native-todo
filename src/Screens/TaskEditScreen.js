import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'; // Import Alert for showing messages
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../actions/taskActions';

const TaskEditScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const [editedTask, setEditedTask] = useState({
    id: null,
    title: '',
    description: '',
    dueDate: '',
    status: 'Incomplete',
  });

  useEffect(() => {
    if (route.params && route.params.taskId) {
      const existingTask = tasks.find((task) => task.id === route.params.taskId);
      if (existingTask) {
        setEditedTask(existingTask);
      }
    }
  }, [route.params, tasks]);

  const handleSave = () => {
    // Validate the fields
    if (!editedTask.title.trim()) {
      Alert.alert('Title is required');
      return;
    }

    if (!editedTask.dueDate.trim()) {
      Alert.alert('Due Date is required');
      return;
    }

    // Proceed with saving if fields are not empty
    if (editedTask.id) {
      dispatch(updateTask(editedTask));
    } else {
      const newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      dispatch(addTask({ ...editedTask, id: newTaskId }));
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {editedTask.id ? 'Edit Task' : 'Add Task'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={editedTask.title}
        onChangeText={(text) => setEditedTask({ ...editedTask, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={editedTask.description}
        onChangeText={(text) => setEditedTask({ ...editedTask, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date"
        value={editedTask.dueDate}
        onChangeText={(text) => setEditedTask({ ...editedTask, dueDate: text })}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export default TaskEditScreen;
