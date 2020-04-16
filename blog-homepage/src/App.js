import React from 'react';
import './App.css';
import uArticles from './your-articles.json';
import ForYou from './YourArticles';
import mArticles from './missed-articles.json';
import Missed from './MissedArticles';

function App() {
  return (
    <div className="App">
      <section>
        <h1>For You</h1>
        <div className="flex-container">
          <ForYou uData={uArticles} title="For You" />
        </div>
      </section>
      <section>
        <h1>In Case you missed it</h1>
        <div className="flex-container">
          <Missed mData={mArticles} title="In Case you missed it" />
        </div>
      </section>
    </div>
  );
}

export default App;
