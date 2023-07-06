import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Layout from './Layout';
import AboutMe from './pages/AbooutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route exact path="/">
          <Route component={AboutMe} />
        </Route>
          <Route  path="/aboutme" element={<AboutMe/>} />
          <Route  path="/portfolio" element={<Portfolio/>} />
          <Route  path="/contact" element={<ContactMe/>} />


        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
