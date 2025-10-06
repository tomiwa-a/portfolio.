import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-12 bg-transparent">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Engineering Philosophy</h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            My approach to building robust, scalable backend systems
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-lg"
          >
            <p className="text-foreground leading-relaxed mb-6">
              I believe in building backend systems that are not just functional, but fundamentally sound. Modern development often treats infrastructure as a commodity, but I approach it with the understanding that every abstraction has costs and trade-offs.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Core Principles</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Performance over convenience when it matters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Scalability built into the architecture from day one</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Understanding the "why" behind every technology choice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Documentation and monitoring as first-class citizens</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Building Approach</h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Start with requirements, not frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Design for failure and scale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Test the hard parts first</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Measure everything that matters</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}