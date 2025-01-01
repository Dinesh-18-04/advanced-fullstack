import Home from './components/Home.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx'
import UseContext from './components/UseContext.jsx';
import UseRef from './components/UseRef.jsx'

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home name="Welcome" />}></Route>
        <Route  path='/about' element={<About />} ></Route>
        <Route  path='/gallery' element={<Gallery />} ></Route>
        <Route  path='/usecontext' element={<UseContext />} ></Route>
        <Route  path='/useref' element={<UseRef />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
