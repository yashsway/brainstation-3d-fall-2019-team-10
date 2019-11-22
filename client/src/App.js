import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header/Header';
import ProvinceContent from './components/ProvinceContent';
import Footer from './components/Footer';
import Map from './components/Map/Map';


export default class App extends Component {

  render(){

  return (
    <div className="App">
      <Helmet>
        <title>This is our app!</title>
      </Helmet>
      <Header />
      <Map />
      <ProvinceContent />
      <Footer />
    </div>
  );
}
}

