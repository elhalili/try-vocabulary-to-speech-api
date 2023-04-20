import React from 'react';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Convert from "./components/Convert";


const App: React.FC = () => {
  const paragraph = 'loremmdn jsnddj j sk   ksnv sv kndvskv nsk isvkmdv'

  return (
    <Router>
      <Header logo={{imgSrc: '/logo.png', alt: 'lolo'}} />
      <Routes>
        <Route path='/' element={ <Home title='Welcome to my api' paragraph={paragraph} /> } />
        <Route path='/convert' element={ <Convert /> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
