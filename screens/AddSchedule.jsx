import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * @author
 * @function AddSchedule
 **/
export const AddSchedule = () => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>AddSchedule</Text>
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
