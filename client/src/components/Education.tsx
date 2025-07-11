// import { motion } from "framer-motion";
// import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// const Education = () => {
//   const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

//   return (
//     <section
//       id="education"
//       ref={ref}
//       className="py-20 px-6 md:px-16 bg-cosmic-dark text-white"
//     >
//       {/* Section Heading */}
//       <motion.div
//         initial={{ y: 40, opacity: 0 }}
//         animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold font-orbitron tracking-wide">
//           <span className="gradient-text">Education</span>
//         </h2>
//       </motion.div>

//       {/* Education Cards */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="max-w-4xl mx-auto space-y-6"
//       >
//         {/* Degree Card */}
//         <div className="p-8 bg-cosmic-purple/80 hover:bg-cosmic-purple/90 border border-cosmic-cyan/40 shadow-xl rounded-2xl transition-all duration-500">
//           <h3 className="text-2xl font-bold font-orbitron uppercase tracking-wider gradient-text">
//             B.Tech in Computer Science Engineering
//           </h3>
//           <p className="text-gray-300 text-sm font-medium mt-2">
//             Bennett University — Expected June 2026
//           </p>
//           <p className="text-gray-300 text-sm mt-1">
//             CGPA: 8.42
//           </p>
//         </div>

//         {/* DSA Achievement Card */}
//         <div className="p-6 bg-cosmic-purple/80 hover:bg-cosmic-purple/90 border border-cosmic-cyan/40 shadow-xl rounded-2xl transition-all duration-500 text-center">
//           <p className="text-lg font-bold font-orbitron gradient-text">
//             Solved 370+ questions on LeetCode, GFG, and TUF+
//           </p>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Education;
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Education = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-6 md:px-16 bg-cosmic-dark text-white"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron tracking-wide">
          <span className="gradient-text">Education</span>
        </h2>
      </motion.div>

      {/* Education Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Degree Card */}
        <div className="glass-dark rounded-2xl p-8 transition-all duration-500">
          <h3 className="text-2xl font-bold font-orbitron uppercase tracking-wider gradient-text">
            B.Tech in Computer Science Engineering
          </h3>
          <p className="text-gray-300 text-sm font-medium mt-2">
            Bennett University — Expected June 2026
          </p>
          <p className="text-gray-300 text-sm mt-1">
            CGPA: 8.42
          </p>
        </div>

        {/* DSA Achievement Card */}
        <div className="glass-dark rounded-2xl p-6 text-center transition-all duration-500">
          <p className="text-lg font-bold font-orbitron gradient-text">
            Solved 370+ questions on LeetCode, GFG, and TUF+
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
