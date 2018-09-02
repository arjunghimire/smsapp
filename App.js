import React from 'react';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './src/Home';
import DetailsScreen from './src/Details';




const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
