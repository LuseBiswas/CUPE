/* eslint-disable react/jsx-key */
import './App.css';
import { Routes, Route } from 'react-router-dom'
//For Layouts
import NavBar from './Layouts/NavBar/NavBar';
import Footer from './Layouts/Footer/Footer';

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
      <Route path='/' element={[<NavBar/>,<Home/>,<Footer/>]}></Route>
      <Route path='/About' element={[<NavBar/>,<About/>,<Footer/>]}></Route>
      <Route path='/Experience' element={[<NavBar/>,<Experience/>,<Footer/>]}></Route>
      <Route path='/AddYourExperience' element={[<NavBar/>,<AddYourExperience/>,<Footer/>]}></Route>
      <Route path='/Read/:id' element={[<NavBar/>, <Read/>,<Footer/>]}></Route>
      <Route path='/Edit/:id' element={[<NavBar/>, <Edit/>,<Footer/>]}></Route>
      <Route path='/Delete/:id' element={[<NavBar/>, <Delete/>,<Footer/>]}></Route>
    </Routes>
    </>
  )
}

export default App