import {useState,useEffect} from 'react';
import Globelstyles from './styled/Globelstyles';
import Home from './components/Home';
import List from './components/List';
import Nav from './components/Nav';
import Search from './components/Search';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App(){
  const [meals, setMeals] = useState<any[]>([])
  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(response => response.json())
    .then(result => setMeals(result.meals))
    .catch(err => {
      console.error(err);
    });
  },[])
  console.log(meals);
  
  return (
    <>
      <Globelstyles />
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
