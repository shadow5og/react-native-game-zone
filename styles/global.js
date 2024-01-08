import { StyleSheet } from "react-native";
import imgRating1 from "../assets/img/rating-1.png";
import imgRating2 from "../assets/img/rating-2.png";
import imgRating3 from "../assets/img/rating-3.png";
import imgRating4 from "../assets/img/rating-4.png";
import imgRating5 from "../assets/img/rating-5.png";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: { color: "#333", fontFamily: "poppins-black", fontSize: 20 },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    fontFamily: "poppins-regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginVertical: 6,
    textAlign: "center",
  },
});

export const RatingImage = {
  1: imgRating1,
  2: imgRating2,
  3: imgRating3,
  4: imgRating4,
  5: imgRating5,
};
