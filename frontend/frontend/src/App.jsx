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
import Read from './Pages/Read/Read';
import Edit from './Pages/Edit/Edit';
import Delete from './Pages/Delete/Delete';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={[<NavBar/>,<Home/>]}></Route>
      <Route path='/About' element={[<NavBar/>,<About/>]}></Route>
      <Route path='/Experience' element={[<NavBar/>,<Experience/>]}></Route>
      <Route path='/AddYourExperience' element={[<NavBar/>,<AddYourExperience/>]}></Route>
      <Route path='/Read/:id' element={[<NavBar/>, <Read/>]}></Route>
      <Route path='/Edit/:id' element={[<NavBar/>, <Edit/>]}></Route>
      <Route path='/Delete/:id' element={[<NavBar/>, <Delete/>]}></Route>
    </Routes>
    </>
  )
}

export default App