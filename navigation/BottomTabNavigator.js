import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Today } from "../screens/Today";
import { AddSchedule } from "../screens/AddSchedule";
import { Listing } from "../screens/Listing";
import { Settings } from "../screens/Settings";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Today"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen name="Add Schedule" component={AddSchedule} />
      <Tab.Screen name="Listings" component={Listing} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
