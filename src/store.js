import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import taskReducer from './reducers/taskReducer';

const initialState = {
  tasks: [], // Default empty tasks array
};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
  
  const persistedReducer = persistReducer(persistConfig, taskReducer);
  
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  
  export { store, persistor }

// Load tasks from AsyncStorage and update the store
const loadTasksFromAsyncStorage = async () => {
  try {
    const storedTasks = await AsyncStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      store.dispatch({ type: 'LOAD_TASKS_FROM_STORAGE', payload: parsedTasks });
    }
  } catch (error) {
    console.error('Error loading tasks from AsyncStorage:', error);
  }
};

// Load tasks from AsyncStorage when the app starts
loadTasksFromAsyncStorage();

export default store;

