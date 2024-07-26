import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import ProductPage from './components/ProductPage';
import AboutPage from './components/AboutPage';
import TermsPage from './components/TermsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import AddButton from './components/AddButton'
import './styles.css';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kobush" element={<AdminPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/terms' element={<TermsPage />} />
            <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
            <Route path='/add' element = { <AddButton /> } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
