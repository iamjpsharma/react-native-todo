import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  tasks: [], // Initial tasks array
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TASK':
      // Logic for updating a task
      const updatedTask = action.payload;
      const updatedTasks = state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      return { ...state, tasks: updatedTasks };

    case 'ADD_TASK':
      // Logic for adding a new task
      const newTask = action.payload;
      const newTasks = [...state.tasks, newTask];
      return { ...state, tasks: newTasks };

    case 'LOAD_TASKS_FROM_STORAGE':
      // Logic for loading tasks from AsyncStorage
      return { ...state, tasks: action.payload };

    case 'DELETE_TASK':
      // Logic for deleting a task
      const taskIdToDelete = action.payload;
      const updatedTasksAfterDeletion = state.tasks.filter(
        (task) => task.id !== taskIdToDelete
      );
      return { ...state, tasks: updatedTasksAfterDeletion };

    default:
      return state;
  }
};

export default taskReducer;
