import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Future from './components/Future';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import Loader from './components/Loader';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for fonts and assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // 1.8 seconds to match loader animation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-with-pattern text-foreground font-body">
      <Nav />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Philosophy />
            <Future />
            <Timeline />
            <Projects />
            <Blog />
            <Contact />
          </main>
        } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
