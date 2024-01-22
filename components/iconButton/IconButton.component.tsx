import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

interface IconProps {
  icon: any | string;
  size: number;
  color: string;
  onPress: () => void;
}

const IconButton = ({ icon, size, color, onPress }: IconProps) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons style={{}} name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
