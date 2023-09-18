import * as React from "react";
import {  Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import OnBoardScreen from "../screens/OnBoardScreen";
import SignInScreen from "../screens/SignInScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/TabsScreens/HomeScreen";
import LocationsScreen from "../screens/TabsScreens/LocationsScreen";
import MyListScreen from "../screens/TabsScreens/MyListScreen";
import ProfileScreen from "../screens/TabsScreens/ProfileScreen";
import PizzaInfoScreen from "../screens/PizzaInfoScreen";

const WIDTH = Dimensions.get("window").width;

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="tabs" component={Tabs} />
        {/* <Stack.Screen name="PizzaInfoScreen" component={PizzaInfoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

const HomeStack = createNativeStackNavigator();

function HomeStackFunc() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      
      }}
    >
      <HomeStack.Screen name="homescreen" component={HomeScreen} />
      <HomeStack.Screen name="PizzaInfoScreen" component={PizzaInfoScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: true,

        style: {
          backgroundColor: "#EDEDED",

          // Max Height...
          height: RFValue(50),

          // Shadow...
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },

          borderTopWidth: 0,
          width: WIDTH,
          paddingHorizontal: RFValue(30),
          paddingTop: RFValue(10),
          paddingBottom: 2,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "home") {
            if (focused) {
              return (
                <Image
                  style={{
                    width: RFValue(20),
                    height: RFValue(20),
                    tintColor: "#0091FF",
                  }}
                  source={require("../assets/icons/home.png")}
                />
              );
            } else
              return (
                <Image
                  style={{ width: RFValue(20), height: RFValue(20) }}
                  source={require("../assets/icons/home.png")}
                />
              );
          } else if (route.name === "location") {
            if (focused) {
              return (
                <Image
                  style={{
                    width: RFValue(20),
                    height: RFValue(20),
                    tintColor: "#0091FF",
                  }}
                  source={require("../assets/icons/location.png")}
                />
              );
            } else
              return (
                <Image
                  style={{ width: RFValue(20), height: RFValue(20) }}
                  source={require("../assets/icons/location.png")}
                />
              );
          } else if (route.name === "list") {
            if (focused) {
              return (
                <Image
                  style={{
                    width: RFValue(20),
                    height: RFValue(20),
                    tintColor: "#0091FF",
                  }}
                  source={require("../assets/icons/list.png")}
                />
              );
            } else
              return (
                <Image
                  style={{ width: RFValue(20), height: RFValue(20) }}
                  source={require("../assets/icons/list.png")}
                />
              );
          } else if (route.name === "profile") {
            if (focused) {
              return (
                <Image
                  style={{
                    width: RFValue(20),
                    height: RFValue(20),
                    tintColor: "#0091FF",
                  }}
                  source={require("../assets/icons/profile.png")}
                />
              );
            } else
              return (
                <Image
                  style={{ width: RFValue(20), height: RFValue(20) }}
                  source={require("../assets/icons/profile.png")}
                />
              );
          }
        },

        headerShown: false,
      })}
    >
      <Tab.Screen
        options={{ tabBarLabel: "Home" }}
        name="home"
        component={HomeStackFunc}
      />

      <Tab.Screen
        options={{ tabBarLabel: "Locations" }}
        name="location"
        component={LocationsScreen}
      />

      <Tab.Screen
        options={{ tabBarLabel: "My List" }}
        name="list"
        component={MyListScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Profile" }}
        name="profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
