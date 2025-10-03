import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // Syntax highlighting theme
import { blogPosts } from '../data/blogData';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-with-pattern text-foreground font-body flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:text-primary/80 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-with-pattern text-foreground font-body">
      <div className="container mx-auto px-12 lg:px-20 py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-muted mb-8">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(post.date).toLocaleDateString()} • {post.readTime}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <p className="text-muted text-lg leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="text-foreground leading-loose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                code({ className, children, ...props }) {
                  const isInline = !className?.includes('language-');
                  return isInline ? (
                    <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props}>
                      {children}
                    </code>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                pre({ children }) {
                  return (
                    <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto my-4">
                      {children}
                    </pre>
                  );
                },
                img({ src, alt }) {
                  return (
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-auto rounded-lg my-6 shadow-lg"
                    />
                  );
                },
                table({ children }) {
                  return (
                    <div className="overflow-x-auto my-4">
                      <table className="min-w-full border-collapse border border-border">
                        {children}
                      </table>
                    </div>
                  );
                },
                th({ children }) {
                  return (
                    <th className="border border-border px-4 py-2 bg-muted font-semibold text-left">
                      {children}
                    </th>
                  );
                },
                td({ children }) {
                  return (
                    <td className="border border-border px-4 py-2">
                      {children}
                    </td>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </div>
  );
}