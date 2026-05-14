"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
  { name: "TypeScript", level: 88, color: "from-blue-400 to-blue-600" },
  { name: "TailwindCSS", level: 92, color: "from-teal-400 to-cyan-500" },
  { name: "MongoDB", level: 85, color: "from-green-400 to-emerald-600" },
  { name: "Node.js", level: 87, color: "from-lime-400 to-green-500" },
  { name: "Motion Design", level: 82, color: "from-pink-400 to-rose-500" },
  { name: "API Integration", level: 90, color: "from-orange-400 to-amber-500" },
  { name: "UI Engineering", level: 93, color: "from-indigo-400 to-purple-500" },
];

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: (typeof skills)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="glass glass-hover rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--glow),0.15)]">
        {/* Skill name */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">{skill.name}</h3>
          <span className="text-sm font-medium text-muted-foreground">
            {skill.level}%
          </span>
        </div>

        {/* Progress bar background */}
        <div className="relative h-2 bg-secondary/50 rounded-full overflow-hidden">
          {/* Progress bar fill */}
          <motion.div
            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          />
          
          {/* Glow effect on progress */}
          <motion.div
            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-50`}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Decorative dots */}
        <div className="flex gap-1 mt-4 justify-end">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i < Math.floor(skill.level / 20)
                  ? "bg-primary"
                  : "bg-secondary"
              }`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + i * 0.05 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-xs tracking-widest uppercase text-muted-foreground mb-6">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & <span className="text-primary">expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
