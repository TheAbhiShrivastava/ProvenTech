import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ImageCarousel from './Components/Image';


const Services = () => <div>Services Page</div>;
const Work = () => <div>Work Page</div>;
const Insights = () => <div>Insights Page</div>;
const Careers = () => <div>Careers Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const images = [
  './Asset/Screenshot 2024-02-26 215538.png',
  './Asset/Screenshot 2024-02-27 091247.png',
  './Asset/Screenshot 2024-02-27 092242.png',
  // Add more image paths as needed
];


function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/#" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
      <ImageCarousel images={images} interval={5000} />
    </div>

    </div>
  );
}

export default App;
