import { Text, StyleSheet, View, Image } from "react-native";
import { globalStyles, RatingImage } from "../styles/global";
import Card from "../components/card";

export default function ReviewDetails({
  navigation,
  route: {
    params: { title, body, rating },
  },
}) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating</Text>
          <Image source={RatingImage[rating]} />
        </View>
        <Text>{body}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: { color: "black" },
});
