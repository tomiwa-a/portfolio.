import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Scaling Node.js Applications to Millions of Users',
    excerpt: 'Lessons learned from building high-performance backend systems at scale',
    date: '2024-09-15',
    readTime: '5 min read',
  },
  {
    title: 'Microservices Architecture: When and How to Implement',
    excerpt: 'A practical guide to deciding if microservices are right for your project',
    date: '2024-08-22',
    readTime: '7 min read',
  },
  {
    title: 'Database Optimization Techniques for Backend Developers',
    excerpt: 'Essential strategies for improving database performance and efficiency',
    date: '2024-07-10',
    readTime: '6 min read',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Latest Blog Posts</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Thoughts on software engineering, system design, and technology trends
          </p>
          <button className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center mx-auto">
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()} • {post.readTime}
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