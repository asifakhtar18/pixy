import React from "react";
import Header from "./component/header";
import {Routes , Route} from 'react-router-dom'

import Photos from './pages/photos'
import Cart from "./pages/cart";


function App() {
  return (
    <div className="App">
      <Header />

        <Routes>

          <Route exact path="/" element={<Photos />} />
            

          <Route  path="/cart" element={<Cart />} />

         
           
          

        </Routes>

    </div>
  )
}

export default App;
