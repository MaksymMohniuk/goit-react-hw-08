import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "../components/ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/operations";

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .min(3, "Too short")
    .max(38, "Too long"),
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
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.contactNumber,
      })
    );
    actions.resetForm();
  };
  return (
    <div className={styles.contactForm}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={registerUserSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        <Form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage component="p" name="name" className={styles.error} />
          </div>
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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
