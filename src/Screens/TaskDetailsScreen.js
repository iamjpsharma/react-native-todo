import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskDetailsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const taskId = route.params.taskId;
  const task = tasks.find((item) => item.id === taskId);

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Details</Text>

      {task ? (
        <View style={styles.taskDetails}>
          <Text style={styles.detailLabel}>Title:</Text>
          <Text style={styles.detailText}>{task.title}</Text>

          <Text style={styles.detailLabel}>Description:</Text>
          <Text style={styles.detailText}>{task.description}</Text>

          <Text style={styles.detailLabel}>Due Date:</Text>
          <Text style={styles.detailText}>{task.dueDate}</Text>

          <Text style={styles.detailLabel}>Status:</Text>
          <Text style={styles.detailText}>{task.status}</Text>

          <Button
            title="Delete Task"
            onPress={handleDelete}
            color="#ff6347" 
          />
          <Button
          title="Edit Task"
          onPress={() => {
            navigation.navigate('TaskEdit', { taskId: task.id });
          }}
          color="#007aff"
        />
        </View>
      ) : (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Task not found</Text>
          <Button
            title="Go back"
            onPress={() => navigation.goBack()}
            color="#007aff" 
          />
        </View>
      )}
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
  taskDetails: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  detailText: {
    fontSize: 16,
    marginTop: 4,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default TaskDetailsScreen;
