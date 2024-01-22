import React from "react";
import EventType from "../../types/EventType";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface EventItemProps {
  item: EventType;
  onPress: () => void;
}

const EventItem = ({ item, onPress }: EventItemProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.textHeader}>
              {
                // truncate title if it's too long
                item.name.length > 20 ? item.name.substring(0, 20 - 3) + "..." : item.name
              }
            </Text>
            <Text style={styles.textHeader}>{item.date}</Text>
          </View>
          <Text style={styles.textSub}>
            {
              // truncate description if it's too long
              item.description.length > 100 ? item.description.substring(0, 100 - 3) + "..." : item.description
            }
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  pressed: {
    opacity: 0.5,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {
    flex: 0.5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textSub: {
    fontSize: 12,
  },
});
