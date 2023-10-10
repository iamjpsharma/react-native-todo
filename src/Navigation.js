import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from './Screens/TaskListScreen';
import TaskDetailsScreen from './Screens/TaskDetailsScreen';
import TaskEditScreen from './Screens/TaskEditScreen';

const Stack = createStackNavigator();

/**
 * Renders the navigation container with stack navigator
 * @returns {JSX.Element} The rendered navigation container
 */
const Navigation = () => {
  return (
    // Render the navigation container
    <NavigationContainer>
      {/* Set the initial route to TaskList */}
      <Stack.Navigator initialRouteName="TaskList">
        {/* Render the TaskListScreen */}
        <Stack.Screen name="TaskList" component={TaskListScreen} />
        {/* Render the TaskDetailsScreen */}
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
        {/* Render the TaskEditScreen */}
        <Stack.Screen name="TaskEdit" component={TaskEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
