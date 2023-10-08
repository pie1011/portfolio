import React from 'react';
import './App.css';
import { resumeDetails } from '../../resumeDetails';
import Container from 'react-bootstrap/Container';

import Navigation from '../Navigation/Navigation';
import Cover from '../Cover/Cover';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Foot from '../Foot/Foot';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <Container id="App" className="container-fluid min-vw-100 p-0">
        <Navigation />
        <Cover data={resumeDetails.main} />
        <About data={resumeDetails.main} />
        <Resume data={resumeDetails.resume} />
        <Projects data={resumeDetails.portfolio} />
        <Foot />
      </Container>
    );
  }
}

export default App;
