import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "../Components/Form/Form";
import Filter from "../Components/Filter/Filter";
import ContactList from "../Components/ContactList/ContactList";
import { fetchContact } from "../redux/contacts/contacts-operations";
import s from "./ContactsView.module.css";

const ContactsView = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContact()));
  return (
    <div className={s.wrapper}>
      <div className={s.formSection}>
        <Form />
        <Filter />
      </div>
      <div className={s.listSection}>
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsView;
