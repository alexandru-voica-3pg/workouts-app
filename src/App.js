import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './modules/Home';
import WorkoutsScreen from './modules/Workouts';

const MainNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	Workouts: { screen: WorkoutsScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
