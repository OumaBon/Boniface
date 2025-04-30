import Contact from "./compontents/Contact"
import Footer from "./compontents/Footer";
import Hero from './compontents/hero/Hero'
import Navbar from './compontents/navbar/Navbar'
import Myservices from './pages/Myservices'

const App = () => {
  return (
    <>
      <section className="introduction">
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </section>

      <section className="services">
        <div className="container">
          <Myservices />
        </div>
      </section>

      <section className="my-contact">
        <div className="container">
          <Contact />
        </div>
      </section>
      <section className="my-footer">
        <div className="container">
         <Footer/>
        </div>
      </section>
    </>
  );
};

export default App;
