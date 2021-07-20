import './App.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';

function App() {

  
  return (
    <div className="App">
      <Header text={'Six Clicks'} />
      <li><Link to='/rules'>Rules</Link></li>
      <li><Link to='/play'>Play</Link></li>
    </div>
  );
}

export default App;



//index
//rules
//play
  //manual
  //random