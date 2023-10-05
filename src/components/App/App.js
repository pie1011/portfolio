import React from 'react';
import './App.css';

import Cover from '../Cover/Cover';
import About from '../About/About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <>
        <Cover />
        <About />
      </>
    );
  }
}

export default App;
