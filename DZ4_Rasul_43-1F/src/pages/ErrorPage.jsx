import React, { useState, useEffect } from 'react';

const ErrorPage = ({ user }) => {
  const [state, setState] = useState({ name: '', lastname: '' });

  useEffect(() => {
    if (user) {
      setState({ name: user.name, lastname: user.lastname });
    }
  }, [user]);

  return (
    <div>
      <h1>Тебе сюда нельзя - {state.name} {state.lastname}</h1>
    </div>
  );
};

export default ErrorPage;