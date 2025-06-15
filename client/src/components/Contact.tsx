import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { PERSONAL_INFO } from "@/lib/constants";
import { Mail, Phone, MapPin, Linkedin, Github, Code, Laptop } from "lucide-react";

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
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

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isIntersecting ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 w-full lg:w-1/2"
          >
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-cosmic-cyan">Get In Touch</h3>

              <div className="space-y-6">
                {/* Email */}
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

                {/* Phone */}
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

                {/* Location */}
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

              {/* Social Links */}
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
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 bg-${social.color}/20 rounded-full flex items-center justify-center hover:bg-${social.color}/40 transition-all duration-300`}
                    >
                      <social.icon className={`text-${social.color} w-5 h-5`} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
