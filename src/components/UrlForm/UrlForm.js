import React, { useState, useEffect } from 'react';

const UrlForm = (props) => {
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

        <button onClick={e => this.handleSubmit(e)}>
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