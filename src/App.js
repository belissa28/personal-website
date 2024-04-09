// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <Router>

      <div style={{ backgroundColor: 'black', color: 'black', minHeight: '100vh' }}>
        <NavBar />

        <div style={{ color: 'white' }} className="container mt-4">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
      </div>

    </Router >

  );


}

export default App;
