import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './modules/Home';
import ExercisesScreen from './modules/Exercises';

const RouteConfigs = {
	Home: { screen: HomeScreen },
	Exercises: { screen: ExercisesScreen }
};

const StackNavigatorConfig = {
	initialRouteName: 'Home'
};

const Navigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default Navigator;
