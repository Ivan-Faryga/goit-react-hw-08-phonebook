import React from "react";
import ContactListItem from "./ContactListItem/ContactListItem";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import { deleteContact } from "../../redux/contacts/contacts-operations";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.contactsList}>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
