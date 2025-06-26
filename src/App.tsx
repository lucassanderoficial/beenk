import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Contact />
          </>
        } />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-servico" element={<TermsOfService />} />
        <Route path="/politica-de-cookies" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;