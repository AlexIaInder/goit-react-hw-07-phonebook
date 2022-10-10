import './App.module.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import SearchProvider from './SearchProvider';

export const App = () => (
  <SearchProvider>
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  </SearchProvider>
);
