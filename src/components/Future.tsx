import { motion } from 'framer-motion';

export default function Future() {
  return (
    <section id="future" className="py-12 bg-transparent">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Where I'm Headed</h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            My technical roadmap and long-term vision for backend engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg"
            >
              <div className="text-primary text-2xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Current Focus</h3>
              <ul className="space-y-2 text-muted text-sm">
                <li>• Node.js & TypeScript mastery</li>
                <li>• API design & RESTful services</li>
                <li>• Database optimization</li>
                <li>• Cloud infrastructure (AWS)</li>
                <li>• Performance monitoring</li>
              </ul>
            </motion.div>

            {/* Near-term Goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg"
            >
              <div className="text-primary text-2xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Near-term Goals</h3>
              <ul className="space-y-2 text-muted text-sm">
                <li>• Microservices architecture</li>
                <li>• Event-driven systems</li>
                <li>• Container orchestration</li>
                <li>• Distributed caching</li>
                <li>• System design patterns</li>
              </ul>
            </motion.div>

            {/* Long-term Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg"
            >
              <div className="text-primary text-2xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Long-term Vision</h3>
              <ul className="space-y-2 text-muted text-sm">
                <li>• Distributed systems expert</li>
                <li>• Infrastructure architecture</li>
                <li>• High-scale system design</li>
                <li>• Open source contributions</li>
                <li>• Technical leadership</li>
              </ul>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
}