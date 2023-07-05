import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Layout from './Layout';
import AboutMe from './pages/AbooutMe';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route exact path="/">
          <Route component={AboutMe} />
        </Route>
          <Route  path="/aboutme" element={<AboutMe/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
