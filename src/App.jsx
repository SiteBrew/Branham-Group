import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import CaseStudyPage from './pages/CaseStudyPage';
import AffiliationsPage from './pages/AffiliationsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<CaseStudyPage />} />
          <Route path="/affiliations" element={<AffiliationsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
      {/*
        Until now the site recorded nothing at all — no analytics of any kind
        were installed, which is why there is no traffic history to report.
        Vercel Analytics is cookieless and needs no consent banner, so it can
        go live without a legal review. It only starts collecting from the
        moment this deploys; it cannot backfill.
      */}
      <Analytics />
    </div>
  );
}
