import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Card from '../components/Card';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 5
	}
});

class ExercisesScreen extends React.Component {
	static navigationOptions = {
		title: 'Exercises'
	};

	state = {
		exercises: []
	};

	componentDidMount() {
		this.fetchExercises();
	}

	render() {
		const { navigation } = this.props;

		return <View style={styles.container}>{this.renderExercises()}</View>;
	}

	renderExercises() {
		const { exercises } = this.state;

		if (exercises.length) {
			return exercises.map(exercise => {
				return (
					<Card key={exercise.id} size='small'>
						<Text>{exercise.name}</Text>
					</Card>
				);
			});
		} else {
			return <Text>no exercises available</Text>;
		}
	}

	fetchExercises() {
		const self = this;
		const url = 'https://wger.de/api/v2/exerciseinfo';
		fetch(url)
			.then(response => response.json())
			.then(response => {
				self.setState({
					exercises: response.results
				});
			})
			.catch(error => {
				console.log(error);
				self.setState({
					exercises: [
						{
							id: 1,
							name: 'Dumbell presses'
						},
						{
							id: 2,
							name: 'Weighted bar presses'
						}
					]
				});
			});
	}
}

export default ExercisesScreen;
