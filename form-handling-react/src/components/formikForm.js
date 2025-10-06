import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  return (
    <div>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert("Formik registration successful!");
          console.log(values);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label>Username:</label>
            <Field name="username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />

            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />

            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;