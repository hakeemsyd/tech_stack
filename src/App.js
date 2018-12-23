import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import reducers from './reducers';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class App extends React.Component {
  render() {
    return (

        <Provider store={createStore(reducers)}>
          <View style={{flex: 1}}>
            <Header headerText='Tech Stack' />
            <LibraryList />
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
