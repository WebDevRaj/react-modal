import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
class App extends Component {
  constructor() {
    super();
    this.state = {
      isModal:false
    }
  }

  toggleModal = () => {
    this.setState( prevState => ({
      isModal: !prevState.isModal
    }))
  }

  // modalCloseHandler = () => {
  //   this.setState({
  //     isModal: false
  //   })
  // }

  render() {
    return (
      <div className="App">
      <Modal show={this.state.isModal} toggle={this.toggleModal} closeOnOverlayClick={false}>
        <div>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </Modal>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggleModal}>
          show modal
        </button>
      </div>
    );
  }
}

export default App;
