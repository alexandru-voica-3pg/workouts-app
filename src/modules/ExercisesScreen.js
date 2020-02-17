import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExercisesGallery from './ExercisesGallery';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 5,
		marginBottom: 50
	}
});

class ExercisesScreen extends React.Component {
	static navigationOptions = {
		title: 'Exercises'
	};

	render() {
		const { navigation } = this.props;

		return (
			<View style={styles.container}>
				<ExercisesGallery navigation={navigation} />
			</View>
		);
	}
}

export default ExercisesScreen;
