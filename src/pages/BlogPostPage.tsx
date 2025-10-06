import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Copy, Twitter, Facebook, Linkedin, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // Syntax highlighting theme
import { blogPosts } from '../data/blogData';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));
  const [showCopiedNotification, setShowCopiedNotification] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopiedNotification(true);
      setTimeout(() => setShowCopiedNotification(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareToTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this article: ${post?.title}`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-off-canvas?url=${url}`, '_blank');
  };

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
      <div className="container mx-auto px-8 lg:px-16 py-12 pt-32">
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
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-muted mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(post.date).toLocaleDateString()} • {post.readTime}
          </div>
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-2 text-muted hover:text-primary transition-colors"
              title="Copy link"
            >
              <Copy className="w-4 h-4" />
              <span className="text-sm">Copy Link</span>
            </button>
            <button
              onClick={shareToTwitter}
              className="flex items-center space-x-2 text-muted hover:text-primary transition-colors"
              title="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
              <span className="text-sm">Twitter</span>
            </button>
            <button
              onClick={shareToFacebook}
              className="flex items-center space-x-2 text-muted hover:text-primary transition-colors"
              title="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
              <span className="text-sm">Facebook</span>
            </button>
            <button
              onClick={shareToLinkedIn}
              className="flex items-center space-x-2 text-muted hover:text-primary transition-colors"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </button>
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

        {/* Copied notification */}
        {showCopiedNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg z-50"
          >
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-foreground">Link copied to clipboard!</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}