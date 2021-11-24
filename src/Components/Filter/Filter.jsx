import React from "react";
import s from "./Filter.module.css";
import { filterContact } from "../../redux/contacts/contacts-actions";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <label className={s.filterInputLabel}>Find contacts by name</label>
      <br />
      <input
        className={s.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(filterContact(e.target.value))}
        placeholder="Contact"
      />
    </>
  );
};

export default Filter;
