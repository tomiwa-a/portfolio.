import { motion } from 'framer-motion';
import { GitBranch, Briefcase, Bird } from 'lucide-react';

const socialLinks = [
  { icon: Bird, href: 'https://x.com/tomiwa_amole', label: 'X' },
  { icon: GitBranch, href: 'https://github.com/tomiwa-a', label: 'GitHub' },
  { icon: Briefcase, href: 'https://www.linkedin.com/in/amole-oluwatomiwa-5a083b167/', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-12 lg:px-20">
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
            © {new Date().getFullYear()} Tomiwa. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}