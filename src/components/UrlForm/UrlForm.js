import React, { Component } from 'react';
import {postUrl} from '../../apiCalls.js';

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      urlToShorten: '',
      error: false
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    let newUrl = {
      long_url: this.state.urlToShorten,
      title: this.state.title
      }
      if (!newUrl.long_url.length || !newUrl.title.length) {
        this.inputError()
      } else {
        this.setState(() => {
          this.props.addUrl(newUrl);  
        })
    postUrl(newUrl);
    this.clearInputs();
    this.state.error = false;
      }
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  inputError = () => {
    this.state.error = true
  }

  render() {
    return (
      <>
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button className='submit-button' onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
      {this.state.error && 
      <h1 style={{color: 'red'}}>Please fill out both inputs</h1>
      }
      </>
    )
  }
}

export default UrlForm;

