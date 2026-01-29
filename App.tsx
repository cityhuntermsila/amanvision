
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { PlanType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentPlan, setCurrentPlan] = useState<PlanType>('free');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'about': return <About />;
      case 'solutions': return <Solutions />;
      case 'pricing': return <Pricing currentPlan={currentPlan} onSelectPlan={setCurrentPlan} onNavigate={setCurrentPage} />;
      case 'demo': return <Demo currentPlan={currentPlan} onNavigate={setCurrentPage} />;
      case 'faq': return <FAQ />;
      case 'contact': return <Contact />;
      case 'privacy': return <Privacy />;
      case 'terms': return <Terms />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-14">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
