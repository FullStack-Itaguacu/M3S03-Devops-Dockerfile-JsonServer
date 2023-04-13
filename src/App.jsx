import React from 'react' ;
import './App.css';
import './icons.jsx';
import AppRouter from './Router';
import Header from './components/Header/Header';

const API = "http://localhost:5000";

function App() {

return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App
