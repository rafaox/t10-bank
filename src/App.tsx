import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';

import './styles/global.scss';

function App() {
  return (
    <>
      <Header />

      <Home />

      <AboutUs />

      <Services />

      <Portfolio />

      <Contact />
    </>
  );
}

export default App;
