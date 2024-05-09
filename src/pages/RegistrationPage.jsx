import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

import styles from "./RegistrationForm.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
