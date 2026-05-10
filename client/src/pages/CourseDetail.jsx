import { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

/* ── Fallback static data ─────────────────────────── */
const FALLBACK_COURSES = [
  {
    _id: "1", icon: "⟨/⟩", title: "Full-Stack Web Development", duration: "6 Months",
    tech: ["React", "Node.js", "MongoDB", "TypeScript"], 
    description: "Build production-grade applications from day one. Master the modern MERN stack with real client projects.",
    curriculum: [
      { title: "Module 1: Frontend Fundamentals", topics: ["HTML5 & CSS3 Architecture", "JavaScript ES6+", "DOM Manipulation", "Responsive Design Systems"] },
      { title: "Module 2: Advanced React Ecosystem", topics: ["Component Architecture", "State Management (Redux/Zustand)", "Routing & Data Fetching", "Performance Optimization"] },
      { title: "Module 3: Backend & APIs", topics: ["Node.js & Express", "RESTful API Design", "Authentication (JWT/OAuth)", "Security Best Practices"] },
      { title: "Module 4: Database Design", topics: ["MongoDB & Mongoose", "NoSQL Data Modeling", "PostgreSQL Basics", "Caching with Redis"] }
    ]
  },
  {
    _id: "2", icon: "📱", title: "Android Development", duration: "5 Months",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    description: "Create beautiful, performant Android apps using modern Kotlin and Jetpack Compose.",
    curriculum: [
      { title: "Module 1: Kotlin Essentials", topics: ["Syntax & Types", "Object-Oriented Programming", "Coroutines & Asynchrony", "Collections & Functional Programming"] },
      { title: "Module 2: Modern UI with Compose", topics: ["Declarative UI Principles", "State & Recomposition", "Material Design 3", "Animations"] },
      { title: "Module 3: Architecture & Data", topics: ["MVVM Pattern", "Room Database", "Retrofit API Client", "Dependency Injection (Hilt)"] }
    ]
  }
];

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openEnquiry } = useOutletContext();
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/courses`);
        if (!res.ok) throw new Error("API Failed");
        const data = await res.json();
        
        const found = data.find(c => c._id === id);
        if (found) {
          const fallbackMatch = FALLBACK_COURSES.find(fc => fc._id === id) || FALLBACK_COURSES[0];
          setCourse({ ...found, curriculum: found.curriculum || fallbackMatch.curriculum });
        } else {
          throw new Error("Not Found");
        }
      } catch {
        const fallbackMatch = FALLBACK_COURSES.find(fc => fc._id === id);
        if (fallbackMatch) {
          setCourse(fallbackMatch);
        } else {
          navigate("/programs");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 px-6 pb-20 flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-accent" />
      </div>
    );
  }

  if (!course) return null;

  return (
    <>
      <SEO 
        title={`${course.title} | ITQHUB Mastery`} 
        description={course.description}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen px-6 pt-32 pb-24"
      >
        <div className="mx-auto max-w-6xl">
          <button 
            onClick={() => navigate("/programs")}
            className="group mb-8 inline-flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-white transition-colors"
          >
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Programs
          </button>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="mb-12">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-surface-raised text-3xl shadow-elevated">
                  {course.icon}
                </div>
                <h1 className="font-heading text-4xl font-bold tracking-[-0.02em] text-metallic sm:text-5xl">
                  {course.title}
                </h1>
                <p className="mt-6 text-[15px] leading-relaxed text-text-secondary md:text-lg">
                  {course.description}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-2">
                  {(course.tech || []).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-wider text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <h2 className="font-heading text-2xl font-bold text-white mb-6">Curriculum Outline</h2>
                <div className="flex flex-col gap-3">
                  {(course.curriculum || FALLBACK_COURSES[0].curriculum).map((module, idx) => (
                    <div 
                      key={idx} 
                      className={`overflow-hidden rounded-xl border transition-colors duration-300 ${activeModule === idx ? "border-accent/40 bg-accent/5" : "border-white/[0.05] bg-surface-raised hover:border-white/[0.1]"}`}
                    >
                      <button
                        onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                      >
                        <span className={`font-semibold tracking-[-0.01em] ${activeModule === idx ? "text-white" : "text-text-secondary"}`}>
                          {module.title}
                        </span>
                        <svg 
                          className={`h-5 w-5 transition-transform duration-300 ${activeModule === idx ? "rotate-180 text-accent" : "text-text-muted"}`} 
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {activeModule === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="border-t border-white/[0.05] px-6 pb-6 pt-4">
                              <ul className="space-y-3">
                                {module.topics.map((topic, i) => (
                                  <li key={i} className="flex items-start gap-3 text-[13px] text-text-secondary">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-white/[0.06] bg-surface-raised p-6 shadow-elevated">
                <div className="mb-6 flex items-end justify-between border-b border-white/[0.06] pb-6">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-text-muted mb-1">Duration</div>
                    <div className="text-xl font-bold text-white">{course.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-wider text-text-muted mb-1">Format</div>
                    <div className="text-[13px] font-medium text-white">Online Live</div>
                  </div>
                </div>

                <ul className="mb-8 space-y-4">
                  <li className="flex items-center gap-3 text-[13px] text-text-secondary">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    100% Placement Guarantee
                  </li>
                  <li className="flex items-center gap-3 text-[13px] text-text-secondary">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
                    Real-world capstone projects
                  </li>
                  <li className="flex items-center gap-3 text-[13px] text-text-secondary">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                    1-on-1 Mentorship
                  </li>
                </ul>

                <button
                  onClick={openEnquiry}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3.5 text-[14px] font-bold text-black transition-transform duration-200 active:scale-[0.98]"
                >
                  <span className="relative z-10">Enroll Now</span>
                  <svg className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <div className="absolute inset-0 bg-white/90" />
                </button>
                
                <p className="mt-4 text-center text-[11px] text-text-muted">
                  Limited seats available for the upcoming cohort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
