import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import * as actionCreators from '../redux/actionCreators';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import Card from '../components/Card';

const styles = StyleSheet.create({
	label: {
		fontWeight: 'bold',
		marginTop: 10
	}
});

interface Muscle {
	id: number;
	name: string;
	is_front: boolean;
}

interface Equipment {
	id: number;
	name: string;
}

interface Exercise {
	name: string;
	category: any;
	description: string;
	muscles: Array<Muscle>;
	muscles_secondary: Array<Muscle>;
	equipment: Array<Equipment>;
}

class ExerciseDetails extends React.Component {
	componentDidMount() {
		const { id } = this.props;
		if (id) {
			this.props.getExerciseDetails(id);
		}
	}

	render() {
		const exercise: Exercise = this.props.exerciseDetails;

		if (Object.keys(exercise).length) {
			return (
				<View>
					<Text style={styles.label}>Name</Text>
					<Text>{exercise.name}</Text>
					<Text style={styles.label}>Description</Text>
					<Text>{exercise.description}</Text>
					<Text style={styles.label}>Muscles</Text>
					<Text>
						{[...exercise.muscles, ...exercise.muscles_secondary]
							.map(muscle => muscle.name)
							.join(', ')}
					</Text>
					<Text style={styles.label}>Equipment</Text>
					<Text>
						{exercise.equipment.map(equipment => equipment.name).join(', ')}
					</Text>
				</View>
			);
		} else {
			return (
				<View>
					<Text>no details</Text>
				</View>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		exerciseDetails: state.exerciseDetails
	};
};

const mapDispatchToProps = {
	getExerciseDetails: actionCreators.getExerciseDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseDetails);
