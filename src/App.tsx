import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Login from './views/Login';

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
      </Routes>
    </Router>
  </div>
);

export default App;
