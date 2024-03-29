import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  Modal,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useContext, useState } from "react";
import { RootLayoutContext } from "../App";
import Card from "../components/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const { onLayoutRootView } = useContext(RootLayoutContext);
  console.log(onLayoutRootView);
  const [reviews, setReviews] = useState([
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
  const [modalOpen, setModalOpen] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => [review, ...currentReviews]);
    setModalOpen(false);
  };
  return (
    <View onLayout={onLayoutRootView} style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{ ...{ padding: 40, height: 200 }, ...styles.modalContent }}
          >
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />

            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.paragraph}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: { marginTop: 20, marginBottom: 0 },
  modalContent: { flex: 1 },
});
