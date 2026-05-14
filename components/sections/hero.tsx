"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

/* ---------------- PARTICLES FIX ---------------- */
function Particles() {
  const [particles, setParticles] = useState<{ left: number; top: number }[]>(
    []
  );

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------- COUNTDOWN FIX ---------------- */
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const getNextBirthday = () => {
      const now = new Date();
      const year =
        now.getMonth() > 2 || (now.getMonth() === 2 && now.getDate() > 9)
          ? now.getFullYear() + 1
          : now.getFullYear();

      return new Date(year, 2, 9); // 09 March
    };

    const birthday = getNextBirthday();

    const update = () => {
      const diff = birthday.getTime() - new Date().getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-6">
      {timeUnits.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1 }}
          className="glass rounded-xl p-3 md:p-4 min-w-[65px] text-center"
        >
          <span className="block text-lg md:text-3xl font-bold text-primary">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] md:text-xs text-muted-foreground uppercase">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />

      {/* glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-primary/10 blur-[100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-60 md:w-80 h-60 md:h-80 rounded-full bg-accent/10 blur-[80px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <Particles />

      <div className="relative z-10 container mx-auto text-center">
        {/* badge */}
        <span className="inline-block px-4 py-2 glass rounded-full text-xs md:text-sm tracking-widest uppercase text-muted-foreground mb-6">
          Full-Stack Developer & Digital Creator
        </span>

        {/* name */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4">
          <span className="block">Junior Christ-Pio</span>
          <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
            DOFONSOU
          </span>
        </h1>

        {/* tagline */}
        <p className="text-sm md:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
          Building dreams through code, vision and creativity.
        </p>

        {/* countdown */}
        <div className="mb-10">
          <p className="text-xs uppercase text-muted-foreground mb-3">
            Next Birthday (09 March)
          </p>
          <CountdownTimer />
        </div>

        {/* CTA */}
        <a
          href="#about"
          className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-black rounded-full font-medium hover:scale-105 transition"
        >
          Explore My Journey
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-60">
        <div className="w-5 h-8 border rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}