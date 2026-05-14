"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, HeartCrack, Rocket, Briefcase } from "lucide-react";

const story = [
  {
    icon: Briefcase,
    title: "Origins",
    text: `I come from a modest family of four children, between Benin and Nigeria.
I grew up with curiosity for how systems and machines work, always trying to understand technology around me.`,
  },
  {
    icon: HeartCrack,
    title: "Turning Point",
    text: `My journey was shaped by deep personal losses.
Losing my younger brother just days before an important school exam changed everything.
Later, I also lost my father. These moments didn’t break me — they redirected me.`,
  },
  {
    icon: Code2,
    title: "Builder Phase",
    text: `I started exploring programming in technical school (IMI) in 2017.
From PHP, Laravel, C#, C++, to JavaScript — I explored everything that helped me build real systems.
Eventually I focused on modern stacks: React, Next.js, Node.js.`,
  },
  {
    icon: Rocket,
    title: "Breakthrough",
    text: `I moved into real-world projects: e-commerce systems, social platforms, and digital products.
In 2025, I entered e-commerce seriously. Using Shopify systems and strategies, I built results:
- Chariow: 1M in 48 hours
- Multiple profitable stores
- Consistent digital revenue through execution, not theory

Today I build with one goal: independence through systems, code, and execution.`,
  },
];

function StoryBlock({
  item,
  index,
  isInView,
}: {
  item: (typeof story)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="relative"
    >
      <div className="glass glass-hover rounded-3xl p-8 md:p-10 max-w-3xl mx-auto transition-all duration-500 hover:shadow-[0_0_60px_rgba(var(--glow),0.12)]">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          {item.title}
        </h3>

        {/* Text */}
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base md:text-lg">
          {item.text}
        </p>

        {/* Glow line */}
        <motion.div
          className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
}

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      {/* Glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px]"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-xs tracking-widest uppercase text-muted-foreground mb-6">
            The Story Behind The Code
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Builder <span className="text-primary">Journey</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Not just a developer path — a system built from experience, discipline, and execution.
          </p>
        </motion.div>

        {/* Story blocks */}
        <div className="space-y-10">
          {story.map((item, index) => (
            <StoryBlock
              key={item.title}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl px-8 py-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground italic text-lg">
              “I don’t just write code. I build systems that change my reality.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}