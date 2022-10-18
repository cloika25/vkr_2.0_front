import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Login from './views/Login';
import Register from './views/Register';
import Events from './views/Events';
import Event from './views/Event';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route
          element={<Login />}
          path="/login"
        />
        <Route
          element={<Register />}
          path="/register"
        />
        <Route
          element={<MainLayout />}
        >
          <Route
            element={<Events />}
            path="/events"
          />
          <Route
            element={<Event />}
            path="/events/:id"
          />
          <Route
            element={(
              <Navigate
                to="/events"
                replace
              />
            )}
            path="*"
          />
        </Route>
      </Routes>
    </Router>
  </div>
);

export default App;
