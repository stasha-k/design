import { HashRouter, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';

export default function App() {
  return (
    // HashRouter keeps routing working on GitHub Pages, which has no
    // server-side rewrites to fall back to index.html on a deep link.
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/case-study/:slug" element={<CaseStudyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}