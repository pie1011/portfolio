import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

import Navigation from '../Navigation/Navigation';
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
      <Container id="App" className="container-fluid min-vw-100 p-0"  style={{border: "1px solid blue"}}>
        <Navigation />
        <Cover />
        <About />
      </Container>
    );
  }
}

export default App;
