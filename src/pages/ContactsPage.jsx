import { useDispatch, useSelector } from "react-redux";
import {
  selectPhonebookContacts,
  selectPhonebookIsError,
  selectPhonebookIsLoading,
} from "../redux/contacts/selectors";
import { useEffect } from "react";
import { apiGetContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrrorMessage/ErrorMessage";
import ContactList from "../components/ContactList/ContactList";

import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectPhonebookContacts);
  const isLoading = useSelector(selectPhonebookIsLoading);
  const isError = useSelector(selectPhonebookIsError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.title}>Contacts</h1>
        <ContactForm />
      </div>
      <div className={styles.section}>
        <SearchBox />
      </div>
      <div className={styles.section}>
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {contacts !== null && <ContactList />}
      </div>
    </div>
  );
};

export default ContactsPage;
