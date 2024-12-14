import { IoMoon, IoSunny } from 'react-icons/io5';
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Links from './components/links';

function App() {
  const [dark, setDark] = React.useState(true);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  // Update body class on dark mode toggle
  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark', 'bg-black');
      document.body.classList.remove('bg-white');
    } else {
      document.body.classList.remove('dark', 'bg-black');
      document.body.classList.add('bg-white');
    }
  }, [dark]);

  return (
    <>
      <div className="min-h-full flex flex-col items-center bg-gray-100 dark:bg-gray rounded-lg max-w-[380px]">
        <Header />
        <Links />
      </div>
      <button className="mt-2" onClick={() => darkModeHandler()}>
        {dark ? (
          <IoSunny className="text-purple dark:text-purple" />
        ) : (
          <IoMoon className="text-purple dark:text-black" />
        )}
      </button>
    </>
  );
}

export default App;
