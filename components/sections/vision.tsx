"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Discipline creates freedom.",
    emphasis: "Discipline",
  },
  {
    text: "Technology can change lives.",
    emphasis: "Technology",
  },
  {
    text: "Build before you speak.",
    emphasis: "Build",
  },
  {
    text: "The future belongs to creators.",
    emphasis: "creators",
  },
];

export function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
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
            Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Beliefs that <span className="text-primary">drive</span> me
          </h2>
        </motion.div>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.text}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="glass glass-hover rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(var(--glow),0.15)] h-full">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-2xl md:text-3xl font-bold leading-tight text-foreground">
                  {quote.text.split(quote.emphasis).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-primary">{quote.emphasis}</span>
                      )}
                    </span>
                  ))}
                </blockquote>

                {/* Decorative line */}
                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-lg md:text-xl text-muted-foreground italic">
              &quot;Every line of code is a step toward something greater. 
              Every project is a story waiting to be told.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
