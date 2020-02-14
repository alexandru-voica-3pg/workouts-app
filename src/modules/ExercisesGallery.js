import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import * as actionCreators from '../redux/actionCreators';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import Card from '../components/Card';

class ExercisesGallery extends React.Component {
	componentDidMount() {
		this.props.login({ a: 'a', b: 'b' });
		this.props.getAllExercises();
	}

	render() {
		const { exercises } = this.props;

		if (exercises.length) {
			return exercises.map(exercise => {
				const { name, id } = exercise;

				return (
					<Card
						key={id}
						size='small'
						handler={() => {
							this.props.navigation.navigate('ExerciseDetails', {
								id
							});
						}}
					>
						<Text>{name || 'no name'}</Text>
					</Card>
				);
			});
		} else {
			return <Text>no exercises available</Text>;
		}
	}
}

const mapStateToProps = state => {
	return {
		exercises: state.exercises,
		status: state.status
	};
};

const mapDispatchToProps = {
	login: actionCreators.login,
	getAllExercises: actionCreators.getAllExercises
};

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesGallery);
