import AsyncStorage from '@react-native-async-storage/async-storage';

export const addTask = (task) => {
  return async (dispatch, getState) => {
    // Dispatch the action to update the state immediately
    dispatch({ type: 'ADD_TASK', payload: task });

    // Get the updated tasks from the Redux store
    const updatedTasks = getState().tasks;

    try {
      // Save the updated tasks array to AsyncStorage
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };
};

export const updateTask = (task) => {
  return async (dispatch, getState) => {
    // Dispatch the action to update the state immediately
    dispatch({ type: 'UPDATE_TASK', payload: task });

    // Get the updated tasks from the Redux store
    const updatedTasks = getState().tasks;

    try {
      // Save the updated tasks array to AsyncStorage
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch, getState) => {
    // Dispatch the action to update the state immediately
    dispatch({ type: 'DELETE_TASK', payload: taskId });

    // Get the updated tasks from the Redux store
    const updatedTasks = getState().tasks;

    try {
      // Save the updated tasks array to AsyncStorage
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };
};
