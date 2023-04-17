import React from 'react' ;
import './App.css';
import AppRouter from './Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const API = "http://localhost:5000";

function App() {

return (
    <div className="App">
      <Header />
      <AppRouter/>
      <Footer />
    </div>
  );
}

export default App
