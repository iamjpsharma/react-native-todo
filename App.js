// App.js
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; // Import Provider
import Navigation from './src/Navigation';
import { store } from './src/store';
const App = () => {
  return (
    <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  </Provider>
  );
};

export default App;
