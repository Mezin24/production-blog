import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { About } from 'pages/about';
import { Home } from 'pages/home';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/theme';

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
