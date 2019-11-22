import React, { Component } from 'react'
import Map from './components/Map'
import { Helmet } from 'react-helmet';
import Header from './components/Header';


export default class App extends Component {

  render(){

  return (
    <div className="App">
      <Helmet>
        <title>This is our app!</title>
      </Helmet>
      <Header />
      <Map />
    </div>
  );
}
}

