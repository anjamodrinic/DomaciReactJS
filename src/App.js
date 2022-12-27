import './App.css';
import SkijeItemList from './components/skije/SkijeItemList';
import NavBar from './components/navbar/NavBar';
const SKIES = [
  {
    id:1,
    model:"Atomic Redster X7 Wb",
    specifikacije:"Atomic Redster X7 WB imaju 10mm širi struk od običnih skija, ukupne širine struka 75mm, čineći ih savršenim za skijanje tokom čitave sezone.",
    
    slikaUrl:'https://rs.beosport.com/media/catalog/product/cache/5520706cdd5888f9caf980abe039f428/A/A/AASS0027701-01_1_1.jpg',
    brojPonavljanja:0
  },
  {
    id:2,
    model:"Atomic Cloud C7",
    specifikacije:"Atomic Cloud C7 su izuzetno jednostavne za vožnju, nude dosledan osećan kako i na stazi tako i van nje i omogućavaju svakom da skija sa samopouzdanjem.",
    
    slikaUrl:'https://rs.beosport.com/media/catalog/product/cache/5520706cdd5888f9caf980abe039f428/A/A/AASS02844-01_1.jpg',
    brojPonavljanja:0
  },
  {
    id:3,
    model:"Atomic Redster S9 SERVO",
    specifikacije: "Atomic Redster S9 SERVO je slalomska skija opremljena revolucionarom tehnologijom Servotec, koja funkcioniše po principu servo volana na automobilu. Pri malim brzinama skija je mekša i lako upravljiva dok sa povećanjem brzine,  postaje tvrđa i preciznija.",
    
    slikaUrl:'https://rs.beosport.com/media/catalog/product/cache/5520706cdd5888f9caf980abe039f428/A/A/AASS02748-01_1.jpg',
    brojPonavljanja:0
  }
]

function App() {
  return (
    <div className="App">
      <NavBar/>

     <SkijeItemList skije={SKIES}/>
    </div>
  );
}
export default App;