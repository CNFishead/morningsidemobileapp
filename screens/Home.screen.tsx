import React from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import NavigationButton from "../components/navigationButton/NavigationButton.component";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/morningsidechurch.webp")} style={styles.image}>
        <View style={{ height: "100%", justifyContent: "flex-end" }}>
          <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold", textAlign: "right", margin: 10 }}>
            Morningside Church
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.navigationContainerParent}>
        <ScrollView>
          <NavigationButton
            imageUrl={{
              uri: "https://b.kisscc0.com/20180816/ife/kisscc0-wood-grain-wood-flooring-texture-wooden-background-5b75a931da3800.6578938115344376818938.png",
            }}
            text="About Us"
            onPress={() => {
              Alert.alert("Coming Soon", "This feature is coming soon");
            }}
          />
          <NavigationButton
            imageUrl={{ uri: "https://th.bing.com/th/id/OIP.2Zmp9hZJUkBqVpW1aP5gPQHaE6?rs=1&pid=ImgDetMain" }}
            text="Give"
            onPress={() => {
              navigation.navigate("Give");
            }}
          />
          <NavigationButton
            imageUrl={{ uri: "https://wallpaperboat.com/wp-content/uploads/2019/06/praying-hands-05-920x518.jpg" }}
            text="Prayer Requests"
            onPress={() => {
              Alert.alert("Coming Soon", "This feature is coming soon");
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationContainerParent: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
