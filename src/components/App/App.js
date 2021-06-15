import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export const App = () => {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    getUrls()
    .then( data => setUrls(data.urls))
  }, [])

  const addUrl = (newUrl) => {
    setUrls([...urls, newUrl])
    console.log('got it!', urls)
  }

    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={addUrl}/>
        </header>
        <section>
        <UrlContainer urls={urls}/>

        </section>
      </main>
    );
}

export default App;
