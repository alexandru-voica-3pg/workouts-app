import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 5
	},
	title: {
		fontSize: 32
	}
});

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome'
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<Card size='large' handler={() => navigate('Workouts')}>
					<Text style={styles.title}>Exercises</Text>
				</Card>
				<Card size='large' handler={() => navigate('Workouts')}>
					<Text style={styles.title}>Workouts</Text>
				</Card>
			</View>
		);
	}
}

export default HomeScreen;
