import React, { Component } from 'react'
import Map from './components/Map'
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import ProvinceContent from './components/ProvinceContent';


export default class App extends Component {

  render(){

  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>This is our app!</title>
      </Helmet>
      <Header />
      <Map />
      <ProvinceContent />
    </div>
  );
}
}

