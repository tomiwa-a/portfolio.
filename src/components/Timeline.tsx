import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2016',
    title: 'Started Coding',
    description: 'Began learning Python and web development basics',
  },
  {
    year: '2018',
    title: 'First Job',
    description: 'Joined a startup as a junior backend developer',
  },
  {
    year: '2020',
    title: 'Senior Role',
    description: 'Promoted to senior backend engineer, leading team projects',
  },
  {
    year: '2022',
    title: 'Tech Lead',
    description: 'Became tech lead for microservices architecture',
  },
  {
    year: '2024',
    title: 'Present',
    description: 'Continuing to build scalable systems and mentor junior developers',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">My Journey</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From my first lines of code to leading complex backend systems
          </p>
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
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="text-primary font-bold text-lg mb-2">{event.year}</div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted">{event.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}