import {
  Text,
  StyleSheet,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import Rive from "rive-react-native";

export default function Home({ onLayoutRootView, navigation }) {
  const [reviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "It's a nice game",
      key: 1,
    },
    {
      title: "Gotta Cathct Them All (again)",
      rating: 4,
      body: "You can never get bored by Pokemon action, right?",
      key: 2,
    },
    {
      title: "Not so 'Finanl' Fantasy",
      rating: 3,
      body: "It's cool but getting old now.",
      key: 3,
    },
  ]);
  return (
    <View onLayout={onLayoutRootView} style={globalStyles.container}>
      {/* <Rive
        url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
        artboardName="Avatar 1"
        stateMachineName="avatar"
        style={{ width: 400, height: 400 }}
      /> */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.paragraph}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
