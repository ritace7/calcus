import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import CalculatorBody from './components/CalculatorBody';
import Footer from './components/Footer';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <CalculatorBody/>
        <Footer />
    </div>
  );
}

export default App;
