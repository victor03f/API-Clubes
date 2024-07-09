import React from 'react';
import Header from '../components/Header';
import Clubs from '../components/Clubs';

function Home() {
  return (
    <div>
      <Header />
      <div className="main">
        <Clubs />
      </div>
    </div>
  );
}

export default Home;
