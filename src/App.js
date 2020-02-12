import React from 'react';
import Navigator from './Navigator';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './redux/store';

const styles = StyleSheet.create({
	container: {},
	bottomBar: {
		height: 50,
		backgroundColor: 'red',
		width: '100%'
	}
});

const App = createAppContainer(Navigator);

const AppWithProvider = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default AppWithProvider;
