// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  const { renderNavBar, searchTerm } = Navbar();
  return (
    <div className='App'>
      <Router>
        {/*Navbar renders here*/}
        {renderNavBar}
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home searchTerm={searchTerm} />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
