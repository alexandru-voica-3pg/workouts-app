import React from 'react';
import Navigator from './Navigator';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';

const styles = StyleSheet.create({
	container: {},
	bottomBar: {
		height: 50,
		backgroundColor: 'red',
		width: '100%'
	}
});

const App = createAppContainer(Navigator);

export default App;
