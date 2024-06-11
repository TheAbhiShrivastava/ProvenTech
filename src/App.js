
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Services from './Pages/Services.jsx';
import Work from './Pages/Work.jsx';
import Insights from './Pages/Insights';
import Careers from './Pages/Careers';
import About from './Pages/About';
import Contact from './Pages/Contact';



function App() {
  return (
    <div>
   
      <div>
        <Routes>
       <Route path = "/" element = {<Home/>} />
          <Route path="/Services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
     
    </div>
  );
}

export default App;
