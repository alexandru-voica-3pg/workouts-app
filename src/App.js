import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './modules/Home';
import ExercisesScreen from './modules/Exercises';

const MainNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	Exercises: { screen: ExercisesScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
