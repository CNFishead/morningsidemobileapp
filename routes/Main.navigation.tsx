import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home.screen";
import IconButton from "../components/iconButton/IconButton.component";
import { colors } from "../constants/colors";
import Events from "../screens/Events.screen";
import Sermons from "../screens/Sermons.screen";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        // change the style of active tab
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: colors.gray,
        tabBarItemStyle: {
          backgroundColor: colors.primaryDarker,
        },
        // make the active tab bigger in size than the inactive tab
        tabBarStyle: {
          borderTopWidth: 0,
          // backgroundColor: "transparent",
          height: 60,
        },
        headerShown: false,
      })}
      // set the default page to be the HomeOverview tab
      initialRouteName="HomeOverview"
    >
      <Tab.Screen
        name="EventsOverview"
        component={Events}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar-number-outline" color={color} size={size} />,
          title: "Events",
          tabBarLabel: "Events",
        }}
      />
      <Tab.Screen
        name="HomeOverview"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="SermonsOverview"
        component={Sermons}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="videocam" color={color} size={size} />,
          title: "Sermons",
          tabBarLabel: "Sermons",
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  activeTabStyle: {
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.primary,
  },
});
