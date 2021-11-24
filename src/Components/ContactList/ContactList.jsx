import React from "react";
import ContactListItem from "./ContactListItem/ContactListItem";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredContacts,
  isLoading,
} from "../../redux/contacts/contacts-selectors";
import { deleteContact } from "../../redux/contacts/contacts-operations";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  // const handleInputFilter = (contacts, filter) => {
  //   const filterToLowerCase = filter?.toLocaleLowerCase().trim();

  //   return contacts?.filter((contact) =>
  //     contact?.name.toLocaleLowerCase().trim().includes(filterToLowerCase)
  //   );
  // };

  return (
    <ul className={s.contactsList}>
      {/* {isLoading && <h4>Loading, please wait..</h4>} */}
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
