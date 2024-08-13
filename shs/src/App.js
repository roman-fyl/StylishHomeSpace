import React from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/stores/store';
import HomePage from "./HomePage";



import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;