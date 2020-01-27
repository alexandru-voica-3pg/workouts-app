import React from 'react';
import { View } from 'react-native';
import Card from '../components/Card';

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome'
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Card />
			</View>
		);
	}
}

export default HomeScreen;
