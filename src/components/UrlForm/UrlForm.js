import React, { useState, Component } from 'react';
import postUrl from '../UrlForm/UrlForm';

class UrlForm extends Component {
  constructor({ addUrl }) {
    super({ addUrl });
    this.state = {
      title: '',
      urlToShorten: ''
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
      this.setState(() => {
        this.props.addUrl(newUrl);  
      })
    postUrl(newUrl);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
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
          name='url'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}



// const UrlForm = ({ addUrl }) => {

//   const [title, setTitle] = useState('')
//   const [urlToShorten, setUrlToShorten] = useState('')

//   const handleSubmit = e => {
//     e.preventDefault();
//     let newUrl = {
//       long_url: urlToShorten,
//       title: title
//     }
//     addUrl(newUrl);
//     postUrl(newUrl);
//     clearInputs();
//   }

//   const clearInputs = () => {
//     setTitle('')
//     setUrlToShorten('')
//   }

//     return (
//       <form>
//         <input
//           type='text'
//           placeholder='Title...'
//           name='title'
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//         />

//         <input
//           type='text'
//           placeholder='URL to Shorten...'
//           name='url'
//           value={urlToShorten}
//           onChange={e => setUrlToShorten(e.target.value)}
//         />

//         <button onClick={handleSubmit}>
//           Shorten Please!
//         </button>
//       </form>
//     )
// }

export default UrlForm;


// constructor(props) {
//   super();
//   this.props = props;
//   this.state = {
//     title: '',
//     urlToShorten: ''
//   };
// }