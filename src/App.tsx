import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import MainLayout from './components/MainLayout';
import CarsListView from './views/CarsListView';
import CarView from './views/CarView';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route
          element={<MainLayout />}
          path="/"
        >
          <Route
            element={<CarsListView />}
            path="/cars"
          />
          <Route
            element={<CarView />}
            path="/cars/:id"
          />
        </Route>
      </Routes>
    </Router>
  </div>
);

export default App;
