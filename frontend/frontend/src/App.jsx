/* eslint-disable react/jsx-key */
import './App.css';
import { Routes, Route } from 'react-router-dom'
//For Layouts
import NavBar from './Layouts/NavBar/NavBar';

//For Components


//For Pages
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={[<NavBar/>,<Home/>]}>

      </Route>
    </Routes>
    </>
  )
}

export default App