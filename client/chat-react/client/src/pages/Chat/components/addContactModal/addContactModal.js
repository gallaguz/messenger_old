import {Modal as ModalBase} from '@material-ui/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {addConversation} from 'store';
import styles from './addContactModal.module.css';

const contacts = Array.from({length: 10}, (_, i) => `room${i}`);

export const AddContactModal = ({isOpen, onClose, conversations}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleContactClick = (contact) => {
    if (checkActiveConversation(contact) === undefined) {
      dispatch(addConversation(contact));
    }
    history.push(`/chat/${contact}`);
    onClose();
  };

  const checkActiveConversation = (contact) => {
    return conversations.find((conversation) =>
      conversation.title === contact);
  };

  return (
    <ModalBase open={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Добавить участников</h2>
        <ul>
          {contacts.map((contact) => (
            <li
              className={classnames({
                [styles.active]: checkActiveConversation(contact),
              })}
              onClick={() => handleContactClick(contact)}
              key={contact}
            >
              {contact}
            </li>
          ))}
        </ul>
      </div>
    </ModalBase>
  );
};

AddContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  conversations: PropTypes.array.isRequired,
};
