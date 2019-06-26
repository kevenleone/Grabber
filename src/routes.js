import {
  createAppContainer, createBottomTabNavigator, createStackNavigator,
} from 'react-navigation';
import React from 'react';
import Home from '~/pages/Home';
import Jobs from '~/pages/Jobs';
import Job from '~/pages/Job';
import Login from '~/pages/Login';
import Settings from '~/pages/Settings';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createBottomTabNavigator({
  Jobs: {
    screen: Jobs,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="briefcase" size={25} color={tintColor} />,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
    },
  },
  Profile: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="gears" size={25} color={tintColor} />,
    },
  },
}, {
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#71B280',
      },
    };
  },
  animationEnabled: true,
  tabBarOptions: {
    style: {
      paddingTop: 5,
    },
  },
});

const StackNavigator = createStackNavigator({
  Login: { screen: Login },
  Profile: TabNavigator,
}, {
  cardStyle: {
    backgroundColor: '#E8E8E8',
  },
});

const Routes = createAppContainer(StackNavigator);

export default Routes;
