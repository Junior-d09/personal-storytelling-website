"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "builder",
    title: "The Builder",
    subtitle: "Origins",
    text: "I started as a curious developer, learning how systems work and building small projects step by step.",
    image: "/images/me-1.jpg",
  },
  {
    id: "execution",
    title: "The Execution",
    subtitle: "Real Work",
    text: "I moved from learning to execution. Real systems. Real users. Real impact through code and consistency.",
    image: "/images/me-screen.jpg",
  },
  {
    id: "results",
    title: "The Results",
    subtitle: "Business Impact",
    text: "E-commerce became my playground. Shopify systems, funnels, automation, and real revenue generation.",
    image: "/images/me-work.jpg",
  },
  {
    id: "proof",
    title: "The Proof",
    subtitle: "Numbers",
    text: "Chariow: 1M FCFA in 48 hours. Multiple stores. Consistent revenue. Execution over theory.",
    image: "/images/me-business.jpg",
  },
];

function Step({ step, index }: any) {
  const reverse = index % 2 !== 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-16 md:py-24 px-4"
    >
      <div
        className={`container mx-auto grid md:grid-cols-2 gap-10 items-center ${
          reverse ? "md:[&>div:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-[280px] md:h-[450px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary uppercase tracking-[0.2em] text-xs">
            {step.subtitle}
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-5">
            {step.title}
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {step.text}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function ProofSection() {
  return (
    <section className="relative py-24 md:py-32">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* HEADER */}
      <div className="relative z-10 text-center mb-16 md:mb-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Proof of <span className="text-primary">Execution</span>
        </h1>

        <p className="text-muted-foreground mt-4">
          A cinematic journey from curiosity to real-world impact.
        </p>
      </div>

      {/* STEPS */}
      <div className="relative z-10">
        {steps.map((step, index) => (
          <Step key={step.id} step={step} index={index} />
        ))}
      </div>

      {/* QUOTE */}
      <div className="relative z-10 px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-14 max-w-4xl mx-auto text-center"
        >
          <p className="text-xl md:text-3xl font-bold leading-relaxed">
            “I don’t chase opportunities.
            <span className="text-primary">
              {" "}I build systems that create them.
            </span>
            ”
          </p>
        </motion.div>
      </div>
    </section>
  );
}