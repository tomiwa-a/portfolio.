import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Scalable backend system handling millions of transactions daily',
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    github: 'https://github.com/username/project1',
    live: 'https://project1.com',
  },
  {
    title: 'Real-time Chat App',
    description: 'WebSocket-based chat application with end-to-end encryption',
    tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
    github: 'https://github.com/username/project2',
    live: 'https://project2.com',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Real-time analytics platform for business intelligence',
    tech: ['Python', 'Django', 'React', 'D3.js'],
    github: 'https://github.com/username/project3',
    live: 'https://project3.com',
  },
  {
    title: 'IoT Monitoring System',
    description: 'Distributed system for monitoring IoT devices at scale',
    tech: ['Go', 'Kafka', 'InfluxDB', 'Docker'],
    github: 'https://github.com/username/project4',
    live: 'https://project4.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Projects</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills in backend development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <GitBranch className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}