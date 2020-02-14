import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './modules/Home';
import ExercisesScreen from './modules/ExercisesScreen';
import ExerciseDetailsScreen from './modules/ExerciseDetailsScreen';

const RouteConfigs = {
	Home: { screen: HomeScreen },
	Exercises: { screen: ExercisesScreen },
	ExerciseDetails: { screen: ExerciseDetailsScreen }
};

const StackNavigatorConfig = {
	initialRouteName: 'Home'
};

const Navigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default Navigator;
