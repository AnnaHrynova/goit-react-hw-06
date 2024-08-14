import css from "./Contact.module.css";
import { HiUser, HiPhone } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import {deleteContact} from '../../redux/contactsSlice';

export default function Contact({ contact }) {
    const dispatch = useDispatch();    
  return (
    <div className={css.card}>
      <div className={css.contacts}>
        <div className={css.cardWrap}>
          <HiUser size={"18px"} title="contact icon" />
          <p className={css.cardText}>{contact.name}</p>
        </div>
        <div className={css.cardWrap}>
          <HiPhone size={"18px"} title="phone icon" /> 
          <p className={css.cardText}>{contact.number}</p>
        </div>
      </div>
            <button className={css.deleteButton} onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
}