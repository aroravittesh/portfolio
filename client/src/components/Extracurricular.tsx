// import { motion } from "framer-motion";
// import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// const Extracurricular = () => {
//   const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

//   return (
//     <section
//       id="extracurricular"
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
//           <span className="gradient-text">Extracurricular</span>
//         </h2>
//       </motion.div>

//       {/* Activity Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="max-w-4xl mx-auto"
//       >
//         <div className="p-8 bg-cosmic-purple/80 hover:bg-cosmic-purple/90 border border-cosmic-cyan/40 shadow-xl rounded-2xl transition-all duration-500">
//           <h3 className="text-2xl font-bold font-orbitron tracking-wider gradient-text">
//             FullStack BU – Core Member
//           </h3>
//           <p className="text-gray-300 text-sm font-medium mt-2">
//             Bennett University, Greater Noida, UP, India
//           </p>
//           <p className="text-gray-400 text-sm mt-1">
//             February 2023 – August 2023
//           </p>
//           <ul className="list-disc list-inside mt-4 space-y-1 text-gray-300 text-sm">
//             <li>
//               Core team member in FullStack BU club at Bennett University.
//             </li>
//             <li>
//               Managed and participated in organizing team for yearly tech fest
//               of Bennett University called i-Cosmic.
//             </li>
//           </ul>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Extracurricular;
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Extracurricular = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="extracurricular"
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
          <span className="gradient-text">Extracurricular</span>
        </h2>
      </motion.div>

      {/* Activity Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-dark rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-orbitron tracking-wider gradient-text">
            FullStack BU – Core Member
          </h3>
          <p className="text-gray-300 text-sm font-medium mt-2">
            Bennett University, Greater Noida, UP, India
          </p>
          <p className="text-gray-400 text-sm mt-1">
            February 2023 – August 2023
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-gray-300 text-sm">
            <li>
              Core team member in FullStack BU club at Bennett University.
            </li>
            <li>
              Managed and participated in organizing team for yearly tech fest
              of Bennett University called i-Cosmic.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Extracurricular;
