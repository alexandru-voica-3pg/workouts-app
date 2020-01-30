import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import Card from '../components/Card';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 5,
		marginBottom: 50,
		shadowColor: '#a8a8a8',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.5,
		shadowRadius: 2
	},
	cards: {
		height: '100%'
	}
});

interface State {
	exercises: Array;
	error: boolean;
}

class ExercisesScreen extends React.Component<any, State> {
	static navigationOptions = {
		title: 'Exercises'
	};

	state = {
		exercises: [],
		error: false
	};

	componentDidMount() {
		this.fetchExercises();
	}

	render() {
		const { navigation } = this.props;
		const { error } = this.state;

		if (error) {
			return <Text>error</Text>;
		} else {
			return (
				<View style={styles.container}>
					<ScrollView
						style={styles.cards}
						contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
					>
						{this.renderExercises()}
					</ScrollView>
				</View>
			);
		}
	}

	renderExercises() {
		const { exercises } = this.state;

		if (exercises.length) {
			return exercises.map((exercise, index) => {
				const { name } = exercise;

				if (name) {
					return (
						<Card key={index} size='small'>
							<Text>{name}</Text>
						</Card>
					);
				}
			});
		} else {
			return <Text>no exercises available</Text>;
		}
	}

	fetchExercises() {
		const self = this;
		const url = 'http://wger.de/api/v2/exerciseinfo/';
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
					error: true
				});
			});
	}
}

export default ExercisesScreen;
