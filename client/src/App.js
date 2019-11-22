import React from 'react';

import { Helmet } from 'react-helmet';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Your App Title Here</title>
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
