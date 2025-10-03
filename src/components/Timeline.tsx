import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2018',
    title: 'Coding Journey Begins',
    description: 'Began coding in school with C & C++, learned advanced software engineering principles, and built with Java for 3 years covering backend systems to mobile app development.',
  },
  {
    year: '2021',
    title: 'First Job: Software Engineer',
    description: (
      <>
        Started working as a software engineer at Pitason & Smart Pro, focusing on financial applications and CBN-related projects with{' '}
        <a
          href="https://firstcentralcreditbureau.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80"
        >
          First Central Credit Bureau
        </a>
        .
      </>
    ),
  },
  {
    year: '2023',
    title: 'Senior Engineer Promotion',
    description: 'Promoted to Senior Software Engineer.',
  },
  {
    year: '2024',
    title: 'BSc Computer Science Graduate',
    description: 'Completed university in December, graduated with BSc in Computer Science.',
  },
  {
    year: '2024.',
    title: 'Team Lead Role',
    description: 'Promoted to Team Lead at Pitason & Smart Pro in Networks & Infrastructure, leading a team working on backend systems for fast-moving apps with millions of users and financial/risk data (credit reports).',
  },
  {
    year: '2025',
    title: 'Pursuing MSc Software Engineering',
    description: 'Started MSc in Software Engineering in September.',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-transparent">
      <div className="container mx-auto px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-heading font-bold text-foreground mb-6"
          >
            My Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-muted max-w-2xl mx-auto"
          >
            From my first lines of code to leading complex backend systems
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6,  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-200 relative overflow-hidden"
                  style={{ willChange: 'transform' }}
                >
                  <div>
                    <div className="text-primary font-bold text-lg mb-2">{event.year}</div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted">{event.description}</p>
                  </div>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}