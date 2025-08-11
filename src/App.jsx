import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Card from './components/Card';
// import CompA from './components/CompA';
import Movies from './pages/Movies'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navvbar from './components/Navvbar';
import Form from './components/Form';
import UseEffect from './components/UseEffect';
import SignupForm from './SignUp';
import Login from './components/Login';
import Blog from './components/blog';
import Navbar2 from './components/Navbar2';
// import UseState from './components/UseState';

function App() {
  return (
    <>
      {/* <Card /> */}
      {/* {Movie.map((item, i) => {
  return <Card
  title={item.title}
  image={item.image}  
  release={item.releaseYear}
  director={item.director}
  description={item.description}
  />;
  })} */}
      {/* <CompA data="This is data from component 1 " /> */}
      <BrowserRouter>
  {/* <Navvbar/> */}
  <Navbar2/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignupForm/>}></Route>    
          <Route path='/login' element={<Login/>}></Route>          


        </Routes>
        </BrowserRouter>
{/* <Form/> */}
{/* <UseEffect/> */}
{/* <UseState/> */}

    </>
  )
}

export default App
