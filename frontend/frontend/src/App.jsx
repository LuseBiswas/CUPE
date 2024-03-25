/* eslint-disable react/jsx-key */
import './App.css';
import { Routes, Route } from 'react-router-dom'
//For Layouts
import NavBar from './Layouts/NavBar/NavBar';

//For Components


//For Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import AddYourExperience from './Pages/AddYourExperience/AddYourExperience';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={[<NavBar/>,<Home/>]}></Route>
      <Route path='/About' element={[<NavBar/>,<About/>]}></Route>
      <Route path='/Experience' element={[<NavBar/>,<Experience/>]}></Route>
      <Route path='/AddYourExperience' element={[<NavBar/>,<AddYourExperience/>]}></Route>
    </Routes>
    </>
  )
}

export default App