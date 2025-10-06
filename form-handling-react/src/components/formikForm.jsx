import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <div style={styles.container}>
      <h2>Formik User Registration</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted:", values);
          alert("Registration Successful!");
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form style={styles.form}>
            <label style={styles.label}>Username:</label>
            <Field type="text" name="username" style={styles.input} />
            <ErrorMessage
              name="username"
              component="div"
              style={styles.error}
            />

            <label style={styles.label}>Email:</label>
            <Field type="email" name="email" style={styles.input} />
            <ErrorMessage name="email" component="div" style={styles.error} />

            <label style={styles.label}>Password:</label>
            <Field type="password" name="password" style={styles.input} />
            <ErrorMessage
              name="password"
              component="div"
              style={styles.error}
            />

            <button
              type="submit"
              style={styles.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "5px",
    fontSize: "0.9em",
  },
};

export default FormikForm;