import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm({ addReview }) {
  const initialValues = {
    title: "A Game",
    body: "It is just a game",
    rating: "0",
  };
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
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
