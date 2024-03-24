/* eslint-disable react/jsx-key */
import './App.css';
import { Routes, Route } from 'react-router-dom'
//For Layouts
import NavBar from './Layouts/NavBar/NavBar';

//For Components


//For Pages
import Home from './Pages/Home/Home';
import Experience from './Pages/Experience/Experience';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={[<NavBar/>,<Home/>]}></Route>
      <Route path='/Experience' element={[<NavBar/>,<Experience/>]}></Route>
    </Routes>
    </>
  )
}

export default App