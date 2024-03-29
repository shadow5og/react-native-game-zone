import { Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../components/button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .max(1)
    .test(
      "is-num-1-5",
      "Rating must be a number 1 - 5",
      (value) => parseInt(value) < 6 && parseInt(value) > 0
    ),
});

export default function ReviewForm({ addReview }) {
  const initialValues = {
    title: "",
    body: "",
    rating: "",
  };
  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={reviewSchema}
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          addReview(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />

            <Text style={globalStyles.errorText}>
              {touched.title && errors.title}
            </Text>

            <TextInput
              multiline
              minHeight={180}
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={handleChange("body")}
              onBlur={handleBlur("body")}
              value={values.body}
            />

            <Text style={globalStyles.errorText}>
              {touched.title && errors.body}
            </Text>

            <TextInput
              keyboardType="numeric"
              style={globalStyles.input}
              placeholder="Rating (1=5)"
              onChangeText={handleChange("rating")}
              onBlur={handleBlur("rating")}
              value={values.rating}
            />

            <Text style={touched.title && globalStyles.errorText}>
              {errors.rating}
            </Text>

            <FlatButton onPress={handleSubmit}>Submit</FlatButton>
          </View>
        )}
      </Formik>
    </View>
  );
}
