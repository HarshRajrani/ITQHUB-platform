import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ── macOS Window Dots ────────────────────────────── */
function WindowDots() {
  return (
    <div className="absolute top-3 left-3 z-20 flex gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
    </div>
  );
}

/* ── LIVE Pulse Badge ─────────────────────────────── */
function LiveBadge() {
  return (
    <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-live/20 px-2.5 py-1 backdrop-blur-md">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-live-light">LIVE</span>
    </div>
  );
}

/* ── Skeleton Card (shimmer while loading) ────────── */
function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-surface-raised overflow-hidden animate-pulse">
      <div className="relative aspect-[16/10] bg-white/[0.03]" />
      <div className="p-5">
        <div className="flex gap-2 mb-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-6 w-20 rounded-full bg-white/[0.04]" />
          ))}
        </div>
        <div className="h-5 w-4/5 rounded bg-white/[0.04] mb-5" />
        <div className="h-9 w-32 rounded-lg bg-white/[0.04]" />
      </div>
    </div>
  );
}

/* ── Fallback Course Data ─────────────────────────── */
const FALLBACK_COURSES = [
  {
    _id: "1",
    title: "Full-Stack Web Development",
    duration: "6 Months",
    tags: ["MERN Stack", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=380&fit=crop",
    isLive: true,
    description: "Build production-grade applications from day one. Master the modern MERN stack with real client projects.",
    tech: ["React", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    _id: "2",
    title: "Android Development",
    duration: "5 Months",
    tags: ["Kotlin", "Jetpack Compose"],
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=380&fit=crop",
    isLive: true,
    description: "Create beautiful, performant Android apps using modern Kotlin and Jetpack Compose.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
  },
  {
    _id: "3",
    title: "Cyber Security",
    duration: "6 Months",
    tags: ["Ethical Hacking", "Pentesting"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=380&fit=crop",
    isLive: false,
    description: "Think like an attacker, defend like a pro. Industry-recognized certifications included.",
    tech: ["Ethical Hacking", "Pentesting", "SIEM"],
  },
  {
    _id: "4",
    title: "AI & Machine Learning",
    duration: "6 Months",
    tags: ["Python", "TensorFlow", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=380&fit=crop",
    isLive: true,
    description: "From neural networks to production ML pipelines. Build AI systems that solve real problems.",
    tech: ["Python", "TensorFlow", "NLP", "CV"],
  },
  {
    _id: "5",
    title: "Cloud & DevOps",
    duration: "4 Months",
    tags: ["AWS", "Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=380&fit=crop",
    isLive: false,
    description: "Master cloud infrastructure, containerization, and automated deployment pipelines.",
    tech: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    _id: "6",
    title: "Data Science",
    duration: "5 Months",
    tags: ["Python", "SQL", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop",
    isLive: false,
    description: "Turn raw data into actionable insights. Learn the complete data science workflow.",
    tech: ["Python", "SQL", "Tableau", "Statistics"],
  },
];

/* ── Course Card (Sheryians-style) ────────────────── */
function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-raised transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
    >
      {/* Clickable overlay */}
      <Link
        to={`/course/${course._id}`}
        className="absolute inset-0 z-30"
        aria-label={`View ${course.title} details`}
      />

      {/* Thumbnail Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-overlay">
        <WindowDots />
        {course.isLive && <LiveBadge />}
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle bottom gradient for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface-raised to-transparent" />
      </div>

      {/* Card Body */}
      <div className="relative z-0 p-5 pt-4">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {(course.tags || course.tech || []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] font-medium tracking-wide text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold leading-tight tracking-tight text-white mb-5">
          {course.title}
        </h3>

        {/* CTA Button */}
        <div className="relative z-40">
          <Link
            to={`/course/${course._id}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-text-secondary transition-all duration-200 hover:border-white/[0.20] hover:bg-white/[0.06] hover:text-white"
          >
            Check Course
            <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Section ─────────────────────────────────── */
export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        // Merge API data with fallback images/tags if needed
        if (data.length > 0) {
          const merged = data.map((apiCourse, i) => ({
            ...FALLBACK_COURSES[i], // defaults (image, tags, isLive)
            ...apiCourse,            // override with API data
          }));
          setCourses(merged);
        } else {
          setCourses(FALLBACK_COURSES);
        }
      } catch {
        setCourses(FALLBACK_COURSES);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <section id="courses" className="noise relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-3 inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-accent font-medium">
            Programs
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-[-0.02em] text-metallic sm:text-4xl lg:text-5xl">
            Choose your path
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-[15px] text-text-secondary">
            Every program is industry-designed, mentor-led, and backed by our
            placement guarantee.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : courses.map((course, i) => (
                <CourseCard key={course._id || course.title} course={course} index={i} />
              ))}
        </div>
      </div>
    </section>
  );
}
