
import './App.css';
import ListMovies from './components/ListMovies';
import AddMovie from './components/AddMovie';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
    <div className="container">
      <Routes>
        <Route exact path ="/" element={<ListMovies/>} ></Route>
        <Route path ="/movies" element={<ListMovies/>} ></Route>
        <Route path ="/add-movie" element={<AddMovie/>} ></Route>
        <Route path ="/edit-movie/:id" element={<AddMovie/>} ></Route>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
