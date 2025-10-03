import { motion } from 'framer-motion';
import { Code, Database, Server, Zap, GitBranch, Terminal, HardDrive, Network, Monitor, Globe, Shield, Wifi } from 'lucide-react';

const icons = [
  Code, Database, Server, Zap, GitBranch, Terminal, HardDrive, Network, Monitor, Globe, Shield, Wifi
];

const shapes = ['rounded-full', 'rounded-lg', 'rounded-lg', 'rounded-full'];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0">
      {icons.map((Icon, index) => {
        const shape = shapes[index % shapes.length];
        const isPizza = index === 8 || index === 9 || index === 10 || index === 11; // Last 4 as pizzas
        const emoji = isPizza ? '🍕' : null;

        // Random movement paths
        const randomX = (Math.random() - 0.5) * 300; // -150 to 150
        const randomY = (Math.random() - 0.5) * 300;
        const centerX = (Math.random() - 0.5) * 100; // Near center
        const centerY = (Math.random() - 0.5) * 100;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              scale: [0, 1, 1.2, 0.8],
              x: [0, randomX, centerX, randomX * 0.5],
              y: [0, randomY, centerY, randomY * 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            className={`absolute w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg ${shape}`}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {emoji ? <span className="text-2xl">{emoji}</span> : <Icon className="w-6 h-6 text-primary" />}
          </motion.div>
        );
      })}
    </div>
  );
}