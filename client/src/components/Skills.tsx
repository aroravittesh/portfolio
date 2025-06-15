// import { motion } from "framer-motion";
// import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
// import { SKILLS } from "@/lib/constants";

// export default function Skills() {
//   const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

//   return (
//     <section id="skills" className="py-20 relative" ref={ref}>
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
//             <span className="gradient-text">Skills</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             A passionate developer skilled in full-stack development, modern frameworks, and scalable web architecture.
//           </p>
//         </motion.div>

//         {/* Grid of skill cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//           {SKILLS.map((category, categoryIndex) => (
//             <motion.div
//               key={category.category}
//               initial={{ x: -50, opacity: 0 }}
//               animate={isIntersecting ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
//               transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
//               className="glass-dark rounded-2xl p-6 h-full flex flex-col"
//             >
//               <h3 className="flex items-center font-orbitron text-xl font-bold mb-4 text-cosmic-cyan">
//                 <i className={`${category.icon} mr-3`}></i>
//                 {category.category}
//               </h3>

//               <div className="grid grid-cols-1 gap-3">
//                 {category.skills.map((skill, index) => (
//                   <motion.div
//                     key={skill}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                     transition={{ duration: 0.6, delay: 0.1 * (categoryIndex * 5 + index) }}
//                     className="bg-cosmic-purple/30 rounded-lg px-4 py-2 text-sm font-medium border border-cosmic-cyan/20 hover:border-cosmic-cyan/40 transition-colors duration-300"
//                   >
//                     {skill}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer skilled in full-stack development, modern frameworks, and scalable web architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SKILLS.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ x: -50, opacity: 0 }}
              animate={isIntersecting ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
              className="glass-dark rounded-2xl p-6 h-full flex flex-col"
            >
              <h3 className="flex items-center font-orbitron text-xl font-bold mb-4 text-cosmic-cyan">
                <i className={`${category.icon} mr-3`}></i>
                {category.category}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 * (categoryIndex * 5 + index),
                    }}
                    className="flex items-center gap-3 bg-cosmic-purple/30 rounded-lg px-4 py-2 text-sm font-medium border border-cosmic-cyan/20 hover:border-cosmic-cyan/40 transition-colors duration-300"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
