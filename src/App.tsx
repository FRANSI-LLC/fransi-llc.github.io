import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { HowWeWork } from './sections/HowWeWork';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { Flexible } from './sections/Flexible';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowWeWork />
        <About />
        <Services />
        <Process />
        <Flexible />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
