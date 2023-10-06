import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='page-wrapper'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
