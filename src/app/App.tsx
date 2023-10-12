import { useTheme } from 'app/providers/theme';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='page-wrapper'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
