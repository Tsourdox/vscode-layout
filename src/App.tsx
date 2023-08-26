import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="flex flex-col h-full dark:text-neutral-400 text-neutral-500">
      <Header />

      <div className="flex flex-1 h-0">
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
