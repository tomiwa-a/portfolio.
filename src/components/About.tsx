import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Code, title: 'Frontend', desc: 'React, TypeScript, Next.js' },
    { icon: Database, title: 'Backend', desc: 'Node.js, Python, PostgreSQL' },
    { icon: Server, title: 'DevOps', desc: 'AWS, Docker, Kubernetes' },
  ];

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">About Me</h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Passionate senior backend engineer with 8+ years of experience building scalable,
            high-performance systems. I love solving complex problems and creating efficient solutions
            that make a real impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border border-border text-center"
            >
              <skill.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-muted">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}