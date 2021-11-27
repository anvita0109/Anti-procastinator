import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

import DisplayTask from '../screens/DisplayTask';
import AddTask from '../screens/AddTask';
import Profile from '../screens/Profile';
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'DisplayTask') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AddTask') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        },
      })}
      activeColor={'red'}
      inactiveColor={'white'}>

        <Tab.Screen name="DisplayTask" component={DisplayTask} />
      <Tab.Screen name="AddTask" component={AddTask} />
            
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#2F324C',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});

export default BottomTabNavigator;
