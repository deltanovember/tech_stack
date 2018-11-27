import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const myStore = createStore(reducers)
const App = () => {
  return (
    <Provider store={myStore}>
      <View>
        <Header headerText="Tech Stack" />
      </View>
    </Provider>
  );
};

export default App;
