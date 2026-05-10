import { motion } from "framer-motion";
import SEO from "../components/SEO";
import About from "../components/About";
import CTA from "../components/CTA";
import { useOutletContext } from "react-router-dom";

export default function AboutPage() {
  const { openEnquiry } = useOutletContext() || {};

  return (
    <>
      <SEO 
        title="About Us | ITQHUB" 
        description="Learn more about ITQHUB, our industry experts, and our mission to help you grow your career."
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="pt-16 min-h-screen bg-zinc-950"
      >
        <About />
        <CTA onEnquiryOpen={openEnquiry} />
      </motion.div>
    </>
  );
}
