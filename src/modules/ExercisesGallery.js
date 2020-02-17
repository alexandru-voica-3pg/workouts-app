import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import * as actionCreators from '../redux/actionCreators';
import {
	Text,
	StyleSheet,
	ScrollView,
	View,
	TouchableOpacity
} from 'react-native';
import Card from '../components/Card';

const styles = StyleSheet.create({
	galleryContainer: {
		height: '100%'
	},
	countView: {
		width: '100%',
		marginBottom: 10,
		marginTop: 10
	},
	countText: {
		textAlign: 'center',
		color: 'gray'
	},
	loadMoreButton: {
		flex: 1,
		backgroundColor: 'navy',
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
		marginLeft: 40,
		marginRight: 40
	},
	loadMoreText: {
		color: 'white',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

const LoadMoreButton = handler => {
	return (
		<TouchableOpacity style={styles.loadMoreButton}>
			<Text style={styles.loadMoreText}>Load more</Text>
		</TouchableOpacity>
	);
};

const Exercises = ({ exercises, handleClick }) => {
	if (exercises.length) {
		return exercises.map(exercise => {
			const { name, id } = exercise;

			return (
				<Card key={id} size='small' handler={() => handleClick(id)}>
					<Text>{name || 'no name'}</Text>
				</Card>
			);
		});
	} else {
		return <Text>no exercises available</Text>;
	}
};

class ExercisesGallery extends React.Component {
	componentDidMount() {
		this.props.login({ a: 'a', b: 'b' });
		if (!this.props.exercises.length) {
			this.props.getAllExercises();
		}
	}

	render() {
		const { exercises } = this.props;

		return (
			<ScrollView
				style={styles.galleryContainer}
				contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
			>
				<View style={styles.countView}>
					<Text style={styles.countText}>
						{exercises.length} exercises loaded
					</Text>
				</View>
				<Exercises
					exercises={exercises}
					handleClick={id =>
						this.props.navigation.navigate('ExerciseDetails', {
							id
						})
					}
				/>
				<LoadMoreButton handler={() => {}} />
			</ScrollView>
		);
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
