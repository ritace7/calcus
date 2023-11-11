import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import CalculatorBody from './components/CalculatorBody';
import Footer from './components/Footer';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <Container fluid>   
        <HeaderComponent/>
        <CalculatorBody/>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
