import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validation";

const Login = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && touched.name && <div>{errors.name}</div>}
        <label htmlFor="password">Password : </label>
        <input
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password && <div>{errors.password}</div>}

        <button type="submit">Submit</button>
        <kbd>{JSON.stringify(values)}</kbd>
      </form>
    </div>
  );
};

export default Login;
