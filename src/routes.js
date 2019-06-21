import {
  createAppContainer, createBottomTabNavigator, createStackNavigator, createDrawerNavigator,
} from 'react-navigation';
import React from 'react';
import Home from '~/pages/Home';
import Jobs from '~/pages/Jobs';
import Job from '~/pages/Job';
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
  Settings: {
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
  Jobs: TabNavigator,
  Job: { screen: Job },
});

const Routes = createAppContainer(StackNavigator);

export default Routes;
