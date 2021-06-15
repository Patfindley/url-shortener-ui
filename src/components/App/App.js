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
  }, [urls])

  const addUrl = (newUrl) => {
    setUrls([...urls, newUrl])
    console.log('got it!', urls)
  }

  const renderError = () => {
    return (
      <article className="display-bad-news">
        <h3>site currently undergoing maintenance</h3>
            <a href='http://bright-bucket.surge.sh/'>Try something else in the meantime!</a>
      </article>
      )
  }

    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={addUrl}/>
        </header>
        <section>
          {urls.length > 0 ? 
            <UrlContainer urls={urls}/> :
            renderError()
          }
        {/* <UrlContainer urls={urls}/> */}
        </section>
      </main>
    );
}

export default App;
