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
    image: "/images/me-coding.jpg",
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

function Step({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const isReverse = index % 2 !== 0;

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div
        className={`container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center ${
          isReverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: isReverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass rounded-3xl overflow-hidden border border-white/10">
            <img
              src={step.image}
              alt={step.title}
              loading="lazy"
              className="w-full h-[320px] md:h-[500px] object-cover"
            />
          </div>

          {/* Glow */}
          <div className="absolute -inset-6 bg-primary/10 blur-3xl -z-10" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: isReverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-primary uppercase tracking-[0.25em] text-xs">
            {step.subtitle}
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-tight">
            {step.title}
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            {step.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Header */}
      <div className="relative z-10 text-center mb-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Proof of <span className="text-primary">Execution</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg"
        >
          A cinematic journey from curiosity to real-world impact.
        </motion.p>
      </div> 

      {/* Steps */}
      <div className="relative z-10">
        {steps.map((step, index) => (
          <Step key={step.id} step={step} index={index} />
        ))}
      </div>

      {/* Final quote */}
      <div className="relative z-10 px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-10 md:p-14 max-w-4xl mx-auto text-center"
        >
          <p className="text-2xl md:text-4xl font-bold leading-relaxed">
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