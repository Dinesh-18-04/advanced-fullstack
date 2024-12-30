import Home from './components/Home.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home name="Welcome" />}></Route>
        <Route  path='/about' element={<About />} ></Route>
        <Route  path='/gallery' element={<Gallery />} ></Route>
        <Route  path='/contact' element={<Contact />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
