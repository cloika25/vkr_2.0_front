import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Login from './views/Login';
import Register from './views/Register';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route
          element={<MainLayout />}
          path="/"
        />
        <Route
          element={<Login />}
          path="/login"
        />
        <Route
          element={<Register />}
          path="/register"
        />
      </Routes>
    </Router>
  </div>
);

export default App;
