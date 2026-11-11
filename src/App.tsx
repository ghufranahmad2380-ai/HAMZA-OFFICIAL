import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { TikTok } from './components/TikTokCard';
import { PersonalInfo } from './components/PersonalInfo';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <TikTok />
      <PersonalInfo />
      <Footer />
    </>
  );
}

export default App;
