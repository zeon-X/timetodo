import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Today } from "../screens/Today";
import { AddSchedule } from "../screens/AddSchedule";
import { Listing } from "../screens/Listing";
import { Settings } from "../screens/Settings";
import CustomTabBar from "./CustomTabBar";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Today"
      // tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Today: "clock-outline",
            "Add Schedule": "calendar-edit",
            Listings: "format-list-bulleted",
            Settings: "cog",
          };

          const iconName = icons[route.name];
          const iconColor = focused ? "#DB23D5" : color;

          // console.log(iconName, focused);

          return (
            <MaterialCommunityIcons
              name={iconName}
              color={iconColor}
              size={size}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          const labels = {
            Today: "Today",
            "Add Schedule": "Add Schedule",
            Listings: "Listings",
            Settings: "Settings",
          };

          return (
            <Text
              style={{
                color: focused ? "#DB23D5" : "#333",
                paddingBottom: 2,
              }}
            >
              {labels[route.name]}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen name="Add Schedule" component={AddSchedule} />
      <Tab.Screen name="Listings" component={Listing} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
