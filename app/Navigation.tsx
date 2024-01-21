/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './screens/LoginScreen';
import HomePageScreen from './screens/HomeScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import {useSelector} from 'react-redux';
import {RootState} from './store';
import {Colors} from './constants';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export type StackParamList = {
  Login: undefined;
  Profile: undefined;
  Home: undefined;
  Productive: undefined;
  Details: undefined;
};

export type StackScreenNavigationProp<T extends keyof StackParamList> =
  StackNavigationProp<StackParamList, T>;

const HomeTabs = () => (
  <Tab.Navigator
    //@ts-ignore
    tabBarOptions={{
      activeTintColor: Colors.primary,
    }}>
    <Tab.Screen
      name="Home"
      component={HomePageScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={UserProfileScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Navigation = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Productive"
              component={HomeTabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
