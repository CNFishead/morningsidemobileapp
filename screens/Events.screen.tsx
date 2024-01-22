import React from "react";
import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import EventsDummy from "../data/EventsDummy";
import EventItem from "../components/eventItem/EventItem.component";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../types/RootStackParamList";

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Events = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/morningsidechurch.webp")} style={styles.image}>
        <View style={{ height: "100%", justifyContent: "flex-end" }}>
          <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold", textAlign: "right", margin: 10 }}>
            Morningside Church Events
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.subContainer}>
        <ImageBackground
          source={require("../assets/images/Cross-Watercolor-Blue-Religious-Website-Banner-.jpg")}
          style={{ flex: 1, height: "100%", width: "100%" }}
        >
          <FlatList
            data={EventsDummy}
            renderItem={(item: any) => (
              <EventItem
                item={item.item}
                onPress={() => {
                  navigation.navigate("EventDetails", {
                    eventId: item.item.id,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
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
