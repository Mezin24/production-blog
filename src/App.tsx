import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutAsync as About } from './pages/about/About.async';
import { HomeAsync as Home } from './pages/home/Home.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
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
    </div>
  );
};

export default App;
