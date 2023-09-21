import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * @author
 * @function Settings
 **/
export const Settings = () => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
