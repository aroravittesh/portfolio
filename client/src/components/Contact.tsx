import { motion } from "framer-motion";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { PERSONAL_INFO } from "@/lib/constants";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Code, Laptop } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });
  
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiRequest("POST", "/api/contact", formData);
      const result = await response.json();
      
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Build Something Amazing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate on your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isIntersecting ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-cosmic-cyan">Get In Touch</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-cosmic-cyan/20 rounded-full flex items-center justify-center">
                    <Mail className="text-cosmic-cyan w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">{PERSONAL_INFO.email}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-cosmic-teal/20 rounded-full flex items-center justify-center">
                    <Phone className="text-cosmic-teal w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">{PERSONAL_INFO.phone}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-cosmic-coral/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-cosmic-coral w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">{PERSONAL_INFO.location}</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <p className="text-gray-300 mb-4">Follow me on social platforms:</p>
                <div className="flex space-x-4">
                  {[
                    { href: PERSONAL_INFO.linkedIn, icon: Linkedin, color: "cosmic-cyan" },
                    { href: PERSONAL_INFO.github, icon: Github, color: "gray-300" },
                    { href: PERSONAL_INFO.leetcode, icon: Code, color: "cosmic-coral" },
                    { href: "#", icon: Laptop, color: "cosmic-teal" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 bg-${social.color}/20 rounded-full flex items-center justify-center hover:bg-${social.color}/40 transition-all duration-300`}
                    >
                      <social.icon className={`text-${social.color} w-5 h-5`} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Creative workspace with modern technology setup" 
              className="rounded-2xl w-full animate-float object-cover h-64"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isIntersecting ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-dark rounded-2xl p-8"
          >
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-cosmic-coral">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-cosmic-purple/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cosmic-cyan transition-colors duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-cosmic-purple/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cosmic-cyan transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-cosmic-purple/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cosmic-cyan transition-colors duration-300"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-cosmic-purple/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cosmic-cyan transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cosmic-coral to-cosmic-cyan px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-cosmic-coral/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
