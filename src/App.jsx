import './App.css';
import Header from './components/header';
import Links from './components/links';

function App() {
  return (
    <div className="min-h-full flex flex-col items-center bg-gray rounded-lg max-w-[380px]">
      <Header />
      <Links />
    </div>
  );
}

export default App;
