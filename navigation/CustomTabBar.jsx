import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 80, // Adjust the height here
        backgroundColor: "#fff", // Set the background color
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icons = {
          Today: "clock-outline",
          "Add Schedule": "calendar-edit",
          Listings: "format-list-bulleted",
          Settings: "cog",
        };

        const iconName = icons[route.name];
        const iconColor = isFocused ? "#DB23D5" : "#333";

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableWithoutFeedback key={route.key} onPress={onPress}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <MaterialCommunityIcons
                name={iconName}
                color={iconColor}
                size={24}
              />
              <Text
                style={{
                  color: iconColor,
                  marginTop: 2,
                  fontFamily: "semi",
                  fontSize: 12,
                }}
              >
                {label}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
