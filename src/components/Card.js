import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	cardContainer: {
		borderRadius: 5,
		backgroundColor: 'red',
		paddingLeft: 10,
		paddingRight: 10,
		width: '100%',
		height: 100
	}
});

class CardComponent extends React.Component {
	render() {
		return <View style={styles.cardContainer}></View>;
	}
}

export default CardComponent;
