import './App.css';
import News from './News';
import Navbar from './components/Navbar';
import React, { Component } from 'react'

export default class App extends Component {
  // apiKey='011710500a534a138978a7a3332e12dd'
  apiKey=process.env.REACT_APP_MY_API_KEY
  render() {
    return (
        <div>
          <Navbar />
          <News country="in" category="sports" apiKey={this.apiKey}/>
        </div>
    );
  }
}

