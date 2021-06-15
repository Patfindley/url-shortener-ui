import React, { useState, useEffect } from 'react';
import postUrl from '../UrlForm/UrlForm';

const UrlForm = ({ addUrl }) => {
  // constructor(props) {
  //   super();
  //   this.props = props;
  //   this.state = {
  //     title: '',
  //     urlToShorten: ''
  //   };
  // }

  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState('')

  // const handleNameChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      long_url: urlToShorten,
      title: title
    }
    addUrl(newUrl);
    postUrl(newUrl);
    clearInputs();
  }

  const clearInputs = () => {
    // this.setState({title: '', urlToShorten: ''});
    setTitle('')
    setUrlToShorten('')
  }

    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={urlToShorten}
          onChange={e => setUrlToShorten(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Shorten Please!
        </button>
      </form>
    )
}

export default UrlForm;


// constructor(props) {
//   super();
//   this.props = props;
//   this.state = {
//     title: '',
//     urlToShorten: ''
//   };
// }