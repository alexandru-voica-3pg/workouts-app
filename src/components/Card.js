// @flow

import React from 'react';
import {
	View,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	Animated
} from 'react-native';

const styles = StyleSheet.create({
	cardContainer: {
		width: '50%',
		height: 120,
		padding: 5
	},
	cardBody: {
		backgroundColor: 'white',
		borderRadius: 10,
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

type Size = 'small' | 'large';

interface Props {
	handler: any;
	size: Size;
	children: any;
}

interface State {
	elevation: any;
}

const computeStyleFromSize = (size: Size) => {
	let dimensionBySize = {};

	switch (size) {
		case 'large':
			dimensionBySize = { height: 150, width: '100%' };
			break;

		case 'small':

		default:
			dimensionBySize = { height: 120, width: '50%' };
			break;
	}

	return {
		...styles.cardContainer,
		...dimensionBySize
	};
};

const elevationValues = {
	initial: 0,
	final: 1
};

class CardComponent extends React.Component<Props, State> {
	state = {
		elevation: new Animated.Value(elevationValues.initial)
	};

	render() {
		const { elevation } = this.state;
		const { size, children } = this.props;

		return (
			<View style={computeStyleFromSize(size)}>
				<TouchableWithoutFeedback
					onPress={() => this.handleClick()}
					onPressIn={() => this.handlePressIn()}
					onPressOut={() => this.handlePressOut()}
				>
					<Animated.View
						style={[
							styles.cardBody,
							{
								shadowColor: '#a8a8a8',
								shadowOffset: {
									width: 0,
									height: elevation.interpolate({
										inputRange: [
											elevationValues.initial,
											elevationValues.final
										],
										outputRange: [2, 1]
									})
								},
								shadowOpacity: 0.5,
								shadowRadius: elevation.interpolate({
									inputRange: [elevationValues.initial, elevationValues.final],
									outputRange: [3.5, 1]
								})
							}
						]}
					>
						{children}
					</Animated.View>
				</TouchableWithoutFeedback>
			</View>
		);
	}

	handleClick() {
		const { handler } = this.props;
		if (handler) this.props.handler();
	}

	handlePressIn() {
		Animated.timing(this.state.elevation, {
			toValue: elevationValues.final,
			duration: 100,
			useNativeDriver: true
		}).start();
	}

	handlePressOut() {
		Animated.timing(this.state.elevation, {
			toValue: elevationValues.initial,
			duration: 100,
			useNativeDriver: true
		}).start();
	}
}

export default CardComponent;
