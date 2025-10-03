import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

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
      <div className="container mx-auto px-12 lg:px-20">
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
           <Link to="/blog" className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center mx-auto">
             View All Posts
             <ArrowRight className="w-4 h-4 ml-2" />
           </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}