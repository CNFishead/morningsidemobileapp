import React from "react";
import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";

const Events = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/morningsidechurch.webp")} style={styles.image}>
        <View style={{ height: "100%", justifyContent: "flex-end" }}>
          <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold", textAlign: "right", margin: 10 }}>
            Morningside Church
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.subContainer}>
        <ImageBackground
          source={require("../assets/images/Cross-Watercolor-Blue-Religious-Website-Banner-.jpg")}
          style={{ flex: 1, height: '100%', width: '100%' }}
        >
          <FlatList data={[]} renderItem={() => <View></View>} />
        </ImageBackground>
      </View>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 0.25,
    width: "100%",
  },
  subContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
