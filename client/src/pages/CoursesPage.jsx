import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Courses from "../components/Courses";
import Comparison from "../components/Comparison";
import FAQ from "../components/FAQ";

export default function CoursesPage() {
  return (
    <>
      <SEO 
        title="Programs | ITQHUB Elite Software Training" 
        description="Explore our industry-led programs in Full-Stack, AI, Cyber Security, and Cloud. 100% placement support and 1-on-1 mentorship."
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Courses />
        <Comparison />
        <FAQ />
      </motion.div>
    </>
  );
}
