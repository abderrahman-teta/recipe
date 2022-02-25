
import Globelstyles from './styled/Globelstyles';
import Home from './components/Home';
import List from './components/List';
import Nav from './components/Nav';
import Search from './components/Search';
import Page404 from './components/Page404';
import Meal from './components/Meal'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App(){
  
  
  return (
    <>
      <Globelstyles />
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/:id' element={<Meal />}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
