import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import PostUpload from './pages/PostUpload';
import Gallery from './pages/Gallery';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/uploadPost' element={<PostUpload />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
