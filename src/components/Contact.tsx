import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send the form data to a server
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'tomiwamole@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+2347011956621' },
    { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria' },
  ];

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border hover:border-primary transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
                <CardDescription className="text-muted">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                  >
                    <info.icon className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      <div className="text-muted">
                        {info.label === 'Email' ? (
                          <a href={`mailto:${info.value}`} className="hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : info.label === 'Phone' ? (
                          <a href={`tel:${info.value}`} className="hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          info.value
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border hover:border-primary transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-foreground">Send a Message</CardTitle>
                <CardDescription className="text-muted">
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
               <CardContent className="space-y-4">
                 <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                     <Input placeholder="First Name" className="bg-background border-border focus:border-primary transition-colors" required />
                     <Input placeholder="Last Name" className="bg-background border-border focus:border-primary transition-colors" required />
                   </div>
                   <Input placeholder="Email" type="email" className="bg-background border-border focus:border-primary transition-colors" required />
                   <Input placeholder="Subject" className="bg-background border-border focus:border-primary transition-colors" required />
                   <Textarea
                     placeholder="Your message..."
                     className="bg-background border-border focus:border-primary transition-colors min-h-[120px]"
                     required
                   />
                   <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                     {isSubmitted ? 'Message Sent!' : 'Send Message'}
                   </Button>
                 </form>
                 {isSubmitted && (
                   <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="text-green-500 text-center mt-4"
                   >
                     Thank you for your message! I'll get back to you soon.
                   </motion.p>
                 )}
               </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}