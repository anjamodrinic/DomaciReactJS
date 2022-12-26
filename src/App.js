import logo from './logo.svg';
import './App.css';
import SkijeItemList from './components/skije/SkijeItemList';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">


      <NavBar/>
     <SkijeItemList/>
    </div>
      
  );
}

export default App;
