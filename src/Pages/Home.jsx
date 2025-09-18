import React from "react";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Advertisement } from "../Elements/Advertisement";
import { Carbrand } from "../Elements/companies";
import { Offers } from "../Elements/whochoose";

import { Rentals } from "../Elements/rentaldeal";
import { Testimonial } from "../Elements/Testimonial";
import { DownloadeApp } from "../Elements/downloadeapp";


function Homepage() {
    // const howitworkRef = useRef(null)
    // const whochooseRef=useRef(null)
    return (
      <>
        <div>
          <Advertisement />
          <div id='howitwork'>
            <Carbrand />
          </div>
          <div id="whochoose">
            <Offers />
          </div>
          <Rentals />
          <Testimonial />
          <DownloadeApp />
        </div>
      </>
    )
}
 
export default Homepage