import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm({ addReview }) {
  const initialValues = {
    title: "",
    body: "",
    rating: "",
  };
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          addReview(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={handleChange("body")}
              onBlur={handleBlur("body")}
              value={values.body}
            />

            <TextInput
              keyboardType="numeric"
              style={globalStyles.input}
              placeholder="Rating (1=5)"
              onChangeText={handleChange("rating")}
              onBlur={handleBlur("rating")}
              value={values.rating}
            />

            <Button title="Submit" color="maroon" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
