import React from "react";
import { Styles } from "./Styles";
import { Formik, useFormik } from "formik";
import UserForm from "./components/userform";
import * as Yup from "yup";
import UserDetails from "./components/userDetails";

function App() {
  const ErrorSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("Firstname is required")
      .matches(/^[A-Za-z]*$/, "Enter valid name !")
      .min(3, "Minimum 3 characters")
      .max(20, "Maximum 20 characters"),
    lastname: Yup.string()
      .matches(/^[A-Za-z]*$/, "Enter valid name !")
      .max(20, "Maximum 20 characters"),
    gender: Yup.string().required("Select gender!"),

    email: Yup.string().email("Invalid email").required("Enter your email!"),
    mobile: Yup.string().max(10),
    startDate: Yup.string().required("require"),
    state: Yup.string().required("Select State!"),
    district: Yup.string().required("Select District!"),
    address: Yup.string().max(500),
  });
  return (
    <Styles>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          gender: "",
          startDate: new Date(),
          email: "",
          mobile: "",
          state: "",
          district: "",
          address: "",
        }}
        onSubmit={(value, { setSubmitting, resetForm }) => {
          console.log(value);
          alert(JSON.stringify(value, null, 2));
          // <UserDetails prop={value} />;
          resetForm();
          setSubmitting(false);
        }}
        validationSchema={ErrorSchema}
        component={UserForm}
      />
      {/* <UserDetails prop={("rozy", "bharimal")} /> */}
    </Styles>
  );
}

export default App;
