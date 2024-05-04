import { useDispatch, useSelector } from "react-redux";
import {
  selectfetchedContacts,
  selectfetchedContactsIsError,
  selectfetchedContactsIsLoading,
} from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import { ErrorMessage } from "formik";
import ContactList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const fetchedContacts = useSelector(selectfetchedContacts);
  const isLoading = useSelector(selectfetchedContactsIsLoading);
  const isError = useSelector(selectfetchedContactsIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {fetchedContacts !== null && <ContactList />}
    </div>
  );
};

export default ContactsPage;
