import { useDeleteContactMutation, useGetContactsQuery } from 'api/contacts';
import { useSearchContext } from 'components/SearchProvider';
import { useMemo } from 'react';
import './ContactList.module.css';

const ContactList = () => {
  const { search } = useSearchContext();
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filteredContacts = useMemo(
    () =>
      (search
        ? contacts?.filter(contact => contact.name.includes(search))
        : contacts) ?? [],
    [search, contacts]
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}: {phone}
          </p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
