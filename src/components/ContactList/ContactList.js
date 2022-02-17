import React from 'react';

import { HiOutlineUser, HiOutlinePhone, HiMinusCircle } from 'react-icons/hi';

import {
  ContactItems,
  ContactItem,
  ContactListButton,
} from './ContactList.styles';

const ContactList = ({ value, onDeleteContant }) => {
  return (
    <ContactItems>
      {value.map(({ id, name, number }) => (
        <ContactItem key={id} id={id}>
          {<HiOutlineUser />}
          {name}: {number}
          <ContactListButton type="button" onClick={() => onDeleteContant(id)}>
            Delete {<HiMinusCircle />}
          </ContactListButton>
        </ContactItem>
      ))}
    </ContactItems>
  );
};

export default ContactList;
