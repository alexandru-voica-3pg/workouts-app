import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import * as actionCreators from '../redux/actionCreators';
import {
	Text,
	StyleSheet,
	ScrollView,
	View,
	TouchableOpacity,
	FlatList
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
		marginRight: 40,
		marginBottom: 30
	},
	loadMoreText: {
		color: 'white',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

const LoadMoreButton = ({ handler }) => {
	return (
		<TouchableOpacity style={styles.loadMoreButton} onPress={() => handler()}>
			<Text style={styles.loadMoreText}>Load more</Text>
		</TouchableOpacity>
	);
};

class ExercisesGallery extends React.Component {
	componentDidMount() {
		this.props.login({ a: 'a', b: 'b' });

		if (!this.props.exercises.length) {
			this.props.getAllExercises();
		}
	}

	renderItem({ item }) {
		const { name, id } = item;

		return (
			<Card
				key={id}
				size='small'
				handler={() =>
					this.props.navigation.navigate('ExerciseDetails', { id })
				}
			>
				<Text>{name || 'no name'}</Text>
			</Card>
		);
	}

	render() {
		const { exercises } = this.props;
		const self = this;

		return (
			<FlatList
				style={styles.galleryContainer}
				data={exercises}
				keyExtractor={item => `${item.id}`}
				numColumns={2}
				renderItem={this.renderItem.bind(self)}
				ListEmptyComponent={() => {
					return (
						<View style={{ width: '100%' }}>
							<Text style={{ textAlign: 'center' }}>
								no exercises available
							</Text>
						</View>
					);
				}}
				ListHeaderComponent={() => {
					return (
						<View style={styles.countView}>
							<Text style={styles.countText}>
								{exercises.length} exercises loaded
							</Text>
						</View>
					);
				}}
				ListFooterComponent={() => {
					if (exercises.length) {
						return (
							<LoadMoreButton handler={() => this.props.loadMoreExercises()} />
						);
					} else {
						return null;
					}
				}}
			/>
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
	getAllExercises: actionCreators.getAllExercises,
	loadMoreExercises: actionCreators.loadMoreExercises
};

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesGallery);
