import React, { useState, useEffect } from 'react';

const MainPage = ({ user }) => {
  const [state, setState] = useState({ name: '', lastname: '' });

  useEffect(() => {
    if (user) {
      setState({ name: user.name, lastname: user.lastname });
    }
  }, [user]);

  return (
    <div>
      <h1>Добро пожаловать {state.name} {state.lastname}, мы тебя ждали</h1>
    </div>
  );
};

export default MainPage;
