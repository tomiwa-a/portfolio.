import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogData';

export default function BlogPage() {
  const groupedPosts = blogPosts.reduce((acc, post) => {
    const date = new Date(post.date);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(post);
    return acc;
  }, {} as Record<string, typeof blogPosts>);

  return (
    <div className="min-h-screen bg-with-pattern text-foreground font-body">
      <div className="container mx-auto px-12 lg:px-20 py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            All Blog Posts
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Thoughts on software engineering, system design, and technology trends
          </p>
        </motion.div>

        {Object.entries(groupedPosts)
          .sort(([a], [b]) => b.localeCompare(a)) // Sort by year-month descending
          .map(([key, posts]) => {
            const [year, month] = key.split('-');
            const monthName = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long' });
            return (
              <div key={key} className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">{monthName} {year}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post, index) => (
                    <BlogCard key={post.title} post={post} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}