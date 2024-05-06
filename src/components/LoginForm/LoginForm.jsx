import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";

const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .min(3, "Too short")
    .max(38, "Too long"),
  password: Yup.string()
    .required("Password is required!")
    .min(7, "Too short")
    .max(50, "Too long"),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
    actions.resetForm();
  };
  return (
    <div className={styles.contactForm}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={loginUserSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        <Form>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage component="p" name="email" className={styles.error} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              component="p"
              name="password"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
