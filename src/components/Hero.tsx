import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FloatingIcons from './FloatingIcons';



export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-12 lg:px-20 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-lg mb-4 font-medium"
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
            Oluwatomiwa <br />
            <span className="text-primary">Amole</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 max-w-lg">
            Senior Backend Software Engineer specializing in scalable systems and modern technologies
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 active:bg-primary/80 transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white active:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Animated Elements */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            {/* Central Circles */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 border-2 border-primary/30 border-dashed rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-4 border border-secondary/20 rounded-full"
            />

            <FloatingIcons />

            {/* Animated Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, (Math.random() - 0.5) * 300],
                  y: [0, (Math.random() - 0.5) * 300],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3,
                }}
                className={`absolute rounded-full ${i % 3 === 0 ? 'w-3 h-3 bg-primary/40' : i % 3 === 1 ? 'w-2 h-2 bg-secondary/40' : 'w-1 h-1 bg-accent/40'}`}
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted hover:text-primary transition-colors cursor-pointer" />
        </motion.div>
      </motion.div>
    </section>
  );
}