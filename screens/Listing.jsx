import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * @author
 * @function Listing
 **/
export const Listing = () => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>Listings</Text>
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
