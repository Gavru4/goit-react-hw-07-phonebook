import "./App.css";
import Section from "./Components/Section/Section";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "./redux/contacts/contactsOperation";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <>
          <Filter />
          <ContactList />
        </>
      </Section>
    </>
  );
};

export default App;
