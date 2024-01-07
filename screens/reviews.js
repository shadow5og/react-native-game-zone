import { Text, StyleSheet, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({
  navigation,
  route: {
    params: { title, body, rating },
  },
}) {
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{body}</Text>
    </View>
  );
}
