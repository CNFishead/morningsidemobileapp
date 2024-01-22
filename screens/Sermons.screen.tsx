import React from "react";
import { Text, View } from "react-native";
import WebView from "react-native-webview";

const Sermons = () => {
  return (
    <View style={{flex: 1}}>
      <WebView source={{ uri: "https://embed.truthcasting.com/embed/63e25cc52da50d79fb49dd76/premium?sermonArchive=true" }} />
    </View>
  );
};

export default Sermons;
