import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <div>
        <Navbar />
      </div>
      <AppRouter />
    </div>
  );
};

export default App;
