import { motion } from 'framer-motion';

const Loader = () => {
  const bars = [0, 1, 2, 3, 4];

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex items-end space-x-1">
        {bars.map((index) => (
          <motion.div
            key={index}
            className="w-2 bg-primary rounded-full"
            animate={{
              height: [20, 60, 20],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            style={{
              minHeight: '20px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;