"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "E-commerce Revenue", value: "1M FCFA", sub: "48 hours (Chariow)" },
  { label: "Monthly Income Peak", value: "13.5K€", sub: "Shopify systems" },
  { label: "Weekly Performance", value: "2M FCFA+", sub: "Execution based" },
  { label: "Projects Built", value: "25+", sub: "Web & SaaS systems" },
];

export function ProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Results <span className="text-primary">that speak</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Real execution. Real systems. Real outcomes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="glass rounded-3xl p-8 hover:shadow-[0_0_50px_rgba(var(--glow),0.12)] transition-all"
            >
              <h3 className="text-sm text-muted-foreground uppercase tracking-widest">
                {item.label}
              </h3>

              <div className="text-3xl md:text-4xl font-bold mt-3 text-primary">
                {item.value}
              </div>

              <p className="text-muted-foreground mt-2">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional image block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl overflow-hidden">
            <img
              src="/images/me-work.jpg"
              alt="working"
              className="w-full h-[00px] object-cover opacity-90"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}