import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/Home';
import DetailsScreen from './src/Details';


export default RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'All SMS'
      }),
      headerMode: 'auto'
    },
    Details: {
      screen: DetailsScreen
    } 
  },
  {
    initialRouteName: 'Home',
  }
);