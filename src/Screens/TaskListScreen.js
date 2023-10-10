import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

const TaskListScreen = ({ navigation }) => {
  const tasks = useSelector((state) => state.tasks);

  const renderTaskItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('TaskDetails', { taskId: item.id })}
    >
      <View style={styles.taskItemContainer}>
        <Text style={styles.taskTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTaskItem}
        contentContainerStyle={styles.taskList}
      />

      <Button
        title="Add Task"
        onPress={() => navigation.navigate('TaskEdit', { taskId: null })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  taskList: {
    paddingTop: 16,
  },
  taskItemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 12,
    padding: 16,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
});

export default TaskListScreen;
