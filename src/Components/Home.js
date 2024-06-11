import React from 'react'
import Navbar from './Navbar'
import ImageCarousel from './Image'

const images = [
    require('../Asset/pexels-carlos-oliva-1966452-3586966.jpg'),
    require('../Asset/pexels-lkloeppel-466685.jpg'),
    require('../Asset/pics3.jpg'),
    // Add more image paths as needed
  ];
const Home = () => {
  return (
    <div>
    <Navbar/>
    <div>
    <ImageCarousel images={images} interval={5000} />    
        </div>
<div>

</div>

    </div>
  )
}

export default Home