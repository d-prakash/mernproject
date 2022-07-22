import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services />
      <Pricing/>
      <Testimonial/>
      <Contact/>
    </div>
    
  );
}

export default App;
