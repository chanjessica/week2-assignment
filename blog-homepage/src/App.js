import React from 'react';
import './App.css';
import uArticles from './your-articles.json';
// import ForYou from './YourArticles';
import mArticles from './missed-articles.json';
// import Missed from './MissedArticles';
import Articles from './articles';

function App() {
  return (
    <div className="App">
      <section>
        <h1>For You</h1>
        <div className="flex-container">
          {/* <ForYou uData={uArticles} title="For You" /> */}
          <Articles uData={uArticles} styleClass="box-two" />
        </div>
      </section>
      <section>
        <h1>In Case you missed it</h1>
        <div className="flex-container">
          {/* <Missed mData={mArticles} title="In Case you missed it" /> */}
          <Articles uData={mArticles} styleClass="box-three" />
        </div>
      </section>
    </div>
  );
}

export default App;
