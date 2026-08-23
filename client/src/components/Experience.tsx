import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Experience = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-6 md:px-16 bg-cosmic-dark text-white"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron tracking-wide">
          <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-dark rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-orbitron tracking-wider gradient-text">
            Software Developer Intern
          </h3>
          <p className="text-gray-300 text-sm font-medium mt-2">
            RePut.ai — Bengaluru, Karnataka, India
          </p>
          <p className="text-gray-400 text-sm mt-1">
            June 2026 – August 2026
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-sm">
            <li>
              Engineered an enterprise carbon accounting platform for Scope 1–3
              emissions tracking with Angular dashboards featuring plant-wise
              analytics, scope breakdowns, multi-facility management, and
              sustainability reporting.
            </li>
            <li>
              Designed and maintained 100+ REST API endpoints using Node.js,
              Express.js, and PostgreSQL for multi-tenant operations, JWT/MFA
              authentication, role-based access control, and AWS S3/SES
              integrations.
            </li>
            <li>
              Delivered ESG compliance capabilities (BRSR, GRI, TCFD, SASB, CBAM,
              PCF) with AI-powered emission-factor enrichment via OpenAI, anomaly
              detection, hotspot analysis, and automated forecasting workflows.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
