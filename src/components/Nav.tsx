import { motion } from 'framer-motion';
import { Home, BookOpen, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, href: '#home', label: 'Home' },
  { icon: BookOpen, href: '#blog', label: 'Blog' },
  { icon: Mail, href: '#contact', label: 'Contact' },
];

export default function Nav() {
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
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 group"
              aria-label={item.label}
            >
              <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}