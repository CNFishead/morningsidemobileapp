import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

interface NavigationButtonProps {
  imageUrl: any;
  text: string;
  onPress: () => void;
}

const NavigationButton = ({ imageUrl, text, onPress }: NavigationButtonProps) => {
  return (
    <View style={styles.navigationContainer}>
      <Pressable
        style={({ pressed }) => [pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer]}
        onPress={() => onPress()}
        android_ripple={{
          color: colors.primary,
        }}
      >
        <ImageBackground
          source={imageUrl}
          resizeMode="cover"
          style={styles.image}
          // load lazy
          blurRadius={1}
          fadeDuration={0}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default NavigationButton;

const styles = StyleSheet.create({
  navigationContainer: {
    height: 100,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    width: "100%",
  },
});
