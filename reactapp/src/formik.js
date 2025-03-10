import { Formik, Form, Field } from "formik";

function AppFormik() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        console.log("Form Submitted:", values);
      }}
    >
      {() => (
        <Form>
          <label>Username:</label>
          <Field type="text" name="username" /><br></br><br></br>
          
          <label>Password:</label>
          <Field type="password" name="password" />

          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
}

export default AppFormik;
