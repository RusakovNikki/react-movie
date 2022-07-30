import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './css/App.css'

function App() {
  const error = useState(null);
  const loaded = useState(false);
  const films = useState([]);
  const searching = useState(false);
  const trailers = useState([]);
  const facts = useState([]);
  const awards = useState([]);

  return (
    <div className='wrapper'>
      <div className='container'>
        <Header error={error} loaded={loaded} films={films} searching={searching} />
        <Main
          error={error}
          loaded={loaded}
          films={films}
          searching={searching}
          trailers={trailers}
          facts={facts}
          awards={awards} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
