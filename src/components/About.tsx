import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Database, Server, Cloud, TestTube, BarChart } from 'lucide-react';

export default function About() {
  const [hovered, setHovered] = useState<boolean[]>(new Array(6).fill(false));
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Frameworks',
      items: ['C#', 'ASP.NET', 'Node.js (TypeScript)', 'Golang', 'Python']
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Azure SQL']
    },
    {
      icon: Server,
      title: 'Backend & Infrastructure',
      items: ['REST API Design', 'Microservices', 'Event Sourcing', 'Async Processing', 'Domain Driven Development']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD Pipelines', 'Azure', 'AWS']
    },
    {
      icon: TestTube,
      title: 'Testing & Quality',
      items: ['Unit Testing', 'Integration Testing', 'Test-Driven Development (TDD)']
    },
    {
      icon: BarChart,
      title: 'Observability & Performance',
      items: ['Logging', 'Audit Trails', 'Monitoring', 'Query Optimization']
    }
  ];

  return (
    <section id="about" className="py-12 bg-transparent">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-foreground mb-8"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <p className="text-lg text-foreground leading-relaxed mb-6 font-light">
                I'm Tomiwa Amole, a backend engineer from Lagos, Nigeria, who doesn't just build APIs - I build systems that scale.
                With experience in financial technology and distributed systems, I approach every project with the understanding
                that performance and reliability aren't features, they're requirements.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6 font-light">
                My journey started with curiosity about how things work under the hood. I don't use abstractions blindly;
                I understand what they cost and when to build my own. Whether it's optimizing database queries for millisecond
                improvements or designing event-driven architectures that handle millions of requests, I love the challenge
                of creating systems that are both powerful and elegant.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-8 font-light italic">
                Beyond code, I'm passionate about continuous learning, sharing knowledge, and building technology that makes a difference.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                // delay: 0.6 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] // bounce ease
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              onMouseEnter={() => setHovered(prev => prev.map((h, i) => i === index ? true : h))}
              onMouseLeave={() => setHovered(prev => prev.map((h, i) => i === index ? false : h))}
              className="bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl"
              />
              <motion.div
                animate={{ rotate: hovered[index] ? (index % 2 === 0 ? 360 : -360) : 0 }}
                transition={{ duration: 0.3 }}
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${hovered[index] ? 'bg-primary/20 shadow-lg shadow-primary/20' : 'bg-primary/10'}`}
              >
                <category.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}