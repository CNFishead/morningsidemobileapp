import { StatusBar } from "expo-status-bar";
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./routes/Main.navigation";
import { colors } from "./constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home.screen";
import Give from "./screens/Give.screen";
import { RootStackParamList } from "./types/RootStackParamList";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  useWindowDimensions();

  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: colors.primary, marginTop: Dimensions.get("screen").height * 0.03 }}>
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen name="Home" component={Main} options={{ headerShown: false }} />
          <Stack.Screen
            name="Give"
            component={Give}
            options={() => ({
              presentation: "modal",
            })}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
