import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * @author
 * @function Today
 **/
export const Today = () => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>Today</Text>
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
