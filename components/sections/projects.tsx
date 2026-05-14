"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, Globe, ShoppingBag, MessageCircle } from "lucide-react";

const projects = [
  {
    title: "Social Connect",
    description: "A modern social platform bringing people together through shared experiences and meaningful connections.",
    tags: ["Next.js", "MongoDB", "Real-time"],
    icon: MessageCircle,
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGlow: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]",
  },
  {
    title: "E-Commerce Hub",
    description: "Full-featured online marketplace with seamless checkout, inventory management, and analytics dashboard.",
    tags: ["React", "Node.js", "Stripe"],
    icon: ShoppingBag,
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderGlow: "group-hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]",
  },
  {
    title: "Portfolio Studio",
    description: "Creative portfolio builder helping developers and designers showcase their work beautifully.",
    tags: ["TypeScript", "Tailwind", "Animation"],
    icon: Layers,
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGlow: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]",
  },
  {
    title: "Digital Agency Site",
    description: "Premium agency website with stunning visuals, smooth animations, and conversion-optimized design.",
    tags: ["Next.js", "Framer Motion", "CMS"],
    icon: Globe,
    gradient: "from-orange-500/20 to-amber-500/20",
    borderGlow: "group-hover:shadow-[0_0_50px_rgba(249,115,22,0.3)]",
  },
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative ${project.borderGlow} transition-shadow duration-500`}
    >
      <div className="glass rounded-3xl overflow-hidden h-full transition-all duration-500 group-hover:border-primary/30">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative p-8">
          {/* Icon */}
          <motion.div
            className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon className="w-7 h-7 text-primary" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.button>
          </div>
        </div>

        {/* Bottom gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
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
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="text-primary">projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for building modern digital experiences
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* View more hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
