import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import ExerciseDetails from './ExerciseDetails';

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
	galleryContainer: {
		height: '100%'
	}
});

class ExerciseDetailsScreen extends React.Component<any, any> {
	static navigationOptions = {
		title: 'Exercise Details'
	};

	render() {
		const id = this.props.navigation.getParam('id', null);

		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.galleryContainer}
					contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
				>
					<ExerciseDetails id={id} />
				</ScrollView>
			</View>
		);
	}
}

export default ExerciseDetailsScreen;
