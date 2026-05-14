"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "The Builder",
    subtitle: "Where it all started",
    text: `I started as a curious developer, trying to understand how systems work.

From basic websites to real applications, I learned by building.`,
    image: "/images/me-1.jpg",
  },
  {
    title: "The Execution",
    subtitle: "Turning code into results",
    text: `I moved from learning to execution.

Real projects. Real users. Real problems solved through code.`,
    image: "/images/me-work.jpg",
  },
  {
    title: "The Results",
    subtitle: "Business impact",
    text: `I entered e-commerce and digital systems seriously.

Shopify, automation, funnels, products — everything became execution-driven.`,
    image: "/images/me-business.jpg",
  },
  {
    title: "The Proof",
    subtitle: "Real numbers",
    text: `Chariow: 1M FCFA in 48 hours  
Multiple stores generating consistent revenue  
Thousands of euros/month through systems & execution`,
    image: "/images/me-work.jpg",
  },
];

function Step({ step, index }: { step: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  return (
    <section ref={ref} className="h-screen flex items-center sticky top-0">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="text-primary uppercase tracking-widest text-xs">
            {step.subtitle}
          </span>

          <h2 className="text-4xl md:text-6xl font-bold">
            {step.title}
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
            {step.text}
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(var(--glow),0.15)]">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-10 bg-primary/10 blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <div className="relative">
      {/* HEADER (Apple style intro) */}
      <div className="text-center py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Proof of <span className="text-primary">Execution</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mt-6 max-w-2xl mx-auto"
        >
          Not theory. Not ideas. Real systems built through discipline and execution.
        </motion.p>
      </div>

      {/* STEPS */}
      <div>
        {steps.map((step, index) => (
          <Step key={index} step={step} index={index} />
        ))}
      </div>

      {/* FINAL STATEMENT */}
      <div className="py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass rounded-3xl p-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            I don’t just build websites.
          </h3>
          <p className="text-muted-foreground text-lg">
            I build systems that generate value, income, and opportunities.
          </p>
        </motion.div>
      </div>
    </div>
  );
}