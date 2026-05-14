"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Blocks, Layers, Globe, ShoppingCart, Rocket } from "lucide-react";

const timelineItems = [
  {
    icon: Code,
    title: "Discovering Programming",
    description: "The spark that ignited everything. First lines of code opened a universe of possibilities.",
    year: "The Beginning",
  },
  {
    icon: Blocks,
    title: "Building First Projects",
    description: "Transforming ideas into reality. Every project was a lesson, every bug a teacher.",
    year: "Foundation",
  },
  {
    icon: Layers,
    title: "Learning React & Next.js",
    description: "Diving deep into modern frameworks. Building interactive, performant web experiences.",
    year: "Evolution",
  },
  {
    icon: Globe,
    title: "Creating Social Platforms",
    description: "Building connections through code. Social experiences that bring people together.",
    year: "Connection",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Digital Business",
    description: "Merging technology with commerce. Creating digital solutions that drive real value.",
    year: "Growth",
  },
  {
    icon: Rocket,
    title: "Building Ambitious Future",
    description: "The journey continues. Every day brings new challenges and greater ambitions.",
    year: "Present",
  },
];

function TimelineItem({
  item,
  index,
  isInView,
}: {
  item: (typeof timelineItems)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-center gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}
      >
        <div
          className={`glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--glow),0.1)] ${
            isLeft ? "md:ml-auto" : "md:mr-auto"
          } max-w-md`}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
            {item.year}
          </span>
          <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className="relative z-10 flex-shrink-0"
      >
        <div className="w-14 h-14 rounded-full bg-secondary border-4 border-background flex items-center justify-center shadow-lg">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
        />
      </motion.div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <motion.div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-xs tracking-widest uppercase text-muted-foreground mb-6">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            The <span className="text-primary">path</span> I&apos;ve walked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-px" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
