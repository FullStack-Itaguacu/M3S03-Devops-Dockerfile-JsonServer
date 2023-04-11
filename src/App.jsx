import react from 'react' ;
import './App.css';
import './icons.jsx';
import AppRouter from './Router.jsx';

const API = "http://localhost:5000";

function App() {

return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App
