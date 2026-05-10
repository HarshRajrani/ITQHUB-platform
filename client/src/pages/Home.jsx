import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import LogoCloud from "../components/LogoCloud";
import Bento from "../components/Bento";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  const { openEnquiry } = useOutletContext();

  return (
    <>
      <SEO 
        title="ITQHUB | Master the Craft | Elite Software Training in Hyderabad" 
        description="Industry-led software programs with 100% placement support. Master Full-Stack, AI, and Cyber Security with 1-on-1 mentorship."
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero onEnquiryOpen={openEnquiry} />
        <LogoCloud />
        <Bento />
        <Courses />
        <Testimonials />
        <CTA onEnquiryOpen={openEnquiry} />
      </motion.div>
    </>
  );
}
