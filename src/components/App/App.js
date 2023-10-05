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
      <Container className="container container-fluid min-vh-100 h-100 w-100 mx-auto"  style={{border: "1px solid red"}}>
      <Navigation />
        <Cover />
        <About />
      </Container>
    );
  }
}

export default App;
