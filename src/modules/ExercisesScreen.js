import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import ExercisesGallery from './ExercisesGallery';

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

class ExercisesScreen extends React.Component<any, State> {
	static navigationOptions = {
		title: 'Exercises'
	};

	render() {
		const { navigation } = this.props;

		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.galleryContainer}
					contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
				>
					<ExercisesGallery />
				</ScrollView>
			</View>
		);
	}
}

export default ExercisesScreen;
