import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, href: '#home', label: 'Home' },
  { icon: BookOpen, href: '#blog', label: 'Blog' },
  { icon: Mail, href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const location = useLocation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 nav-bg"
    >
      <div className="container mx-auto px-6 py-6 flex justify-center items-center">
        <div className="flex space-x-4 sm:space-x-8">
          {navItems.map((item, index) => {
            const isActive = (item.label === 'Home' && location.pathname === '/') ||
                             (item.label === 'Blog' && location.pathname === '/blog');

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.label === 'Blog' ? (
                  <Link
                    to="/blog"
                    className={`transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 group block ${
                      isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary'
                    }`}
                    aria-label={item.label}
                  >
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </Link>
                ) : item.label === 'Contact' ? (
                  <Link
                    to="/#contact"
                    className={`transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 group block ${
                      isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary'
                    }`}
                    aria-label={item.label}
                  >
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </Link>
                ) : (
                  location.pathname === '/' ? (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 group ${
                        isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary'
                      }`}
                      aria-label={item.label}
                    >
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                  ) : (
                    <Link
                      to="/"
                      className={`transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 group block ${
                        isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary'
                      }`}
                      aria-label={item.label}
                    >
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </Link>
                  )
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}