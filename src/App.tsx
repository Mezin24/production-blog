import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { HomeAsync as Home } from './pages/home/Home.async';
import { AboutAsync as About } from './pages/about/About.async';
import { Suspense } from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
