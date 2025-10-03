import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const card = (
    <Card className="h-full bg-card border-border hover:border-primary transition-colors cursor-pointer">
      <CardHeader>
        <CardTitle className="text-foreground hover:text-primary transition-colors">
          {post.title}
        </CardTitle>
        <p className="text-muted">{post.excerpt}</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(post.date).toLocaleDateString()} • {post.readTime}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {post.id ? <Link to={`/blog/${post.id}`}>{card}</Link> : card}
    </motion.div>
  );
}