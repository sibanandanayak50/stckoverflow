import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReactScreen from './ReactScreen';
import ReactNativeScreen from './ReactNativeScreen';
import NodeScreen from './NodeScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="React"
        component={ReactScreen}
        options={{
          tabBarLabel: 'React',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={{
                uri: 'https://img.icons8.com/ultraviolet/40/react--v1.png',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="React Native"
        component={ReactNativeScreen}
        options={{
          tabBarLabel: 'React Native',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={{uri: 'https://img.icons8.com/color/48/react-native.png'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Node"
        component={NodeScreen}
        options={{
          tabBarLabel: 'Node',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={{uri: 'https://img.icons8.com/fluency/48/node-js.png'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
