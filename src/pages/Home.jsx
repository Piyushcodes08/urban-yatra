import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ServicesPage from '../components/sections/ServicesPage';
import WhyUs from '../components/sections/WhyUs';
import Gallery from '../components/sections/Gallery';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ServicesPage />
      <WhyUs />
      <Gallery />
    </div>
  );
};

export default Home;
