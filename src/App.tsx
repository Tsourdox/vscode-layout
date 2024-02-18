import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="flex h-full flex-col text-neutral-500 dark:text-neutral-400">
      <Header />

      <div className="flex h-0 flex-1">
        <Sidebar>
          <Outlet />
        </Sidebar>
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
