import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter  >
      {/* <AuthProvider loginRouter="/login"> */}
      <Routers />
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
