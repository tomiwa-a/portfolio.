import { motion } from 'framer-motion';
import { GitBranch, Briefcase, Bird } from 'lucide-react';

const socialLinks = [
  { icon: GitBranch, href: 'https://github.com/username', label: 'GitHub' },
  { icon: Briefcase, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
  { icon: Bird, href: 'https://twitter.com/username', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted hover:text-primary transition-colors"
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-muted text-sm">
            © 2024 Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}