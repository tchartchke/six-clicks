import './App.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import logo from './logo.svg';

function App() {

  
  return (
    <div className="App">
      <img className="App-logo" src={logo} alt="Logo" />
      <Header text={'Six Clicks'} />
      <div className="mainLink" >
        <Link className="box1" to='/rules'>Rules</Link>
        <Link className="box2" to='/play'>Play</Link>
      </div>
    </div>
  );
}

export default App;