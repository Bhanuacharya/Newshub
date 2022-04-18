
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Flexbox from './components/Flexbox';
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 * 
 */
class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  };
}

  render() {
    return <div>
    
      <Navbar/>
      <News/>
      <Flexbox/>
    </div>;
  }
}


// #endregion

export default App;

