import './App.css';

import React, { useEffect, useState } from 'react';
import MainPage from './pages/mainPages/MainPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  const [user, setUser] = useState({ name: '', lastname: '' });
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const name = prompt('Как тебя зовут?');
    const lastname = prompt('Какая твоя фамилия?');

    setUser({ name, lastname });
    if (name === 'John' && lastname === 'Johns') {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  return (
    <div>
      {isAuthorized ? <MainPage user={user} /> : <ErrorPage user={user} />}
    </div>
  );
};

export default App;