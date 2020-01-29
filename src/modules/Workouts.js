import React from 'react';
import { Text } from 'react-native';

class WorkoutsScreen extends React.Component {
	static navigationOptions = {
		title: 'Workouts'
	};

	state = {
		exercises: []
	};

	render() {
		const { navigation } = this.props;

		return <Text>hello {navigation.getParam('name', 'Aurora')}</Text>;
	}

	componentDidMount() {
		this.fetchExercises();
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
			.catch(error => console.log(error));
	}
}

export default WorkoutsScreen;
