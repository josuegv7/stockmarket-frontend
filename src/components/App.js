import '../style/Queries.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Stocks from './Stocks';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component ={Stocks}/>
          <Footer />
        </div>
      </BrowserRouter>
    </div>

  );
};
export default App;
