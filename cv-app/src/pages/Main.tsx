import { About } from '../components/About/About';
import { Contacts } from '../components/Contacts/Contacts';
import { Welcome } from '../components/Welcome/Welcome';

export const Main = () => {
  return (
    <>
      <Welcome />
      <About />
      <Contacts />
    </>
  );
};
