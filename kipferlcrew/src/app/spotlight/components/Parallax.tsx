"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { kipferlSlides } from "../types/kipferlSlides";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";


export default function Parallax() {
  const [index, setIndex] = useState(0);
  const t = useTranslations("parallax");

  useEffect(() => {
    const id = setInterval(
      () => setIndex((p) => (p + 1) % kipferlSlides.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  const slides = t.raw("slides") as { title: string; desc: string }[];
  const info = t.raw("info") as { text: string, redbubble: string, spreadshirt: string, detail: string }[];

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid h-[80svh] grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="min-w-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={kipferlSlides[index].img}
                alt={slides[index].title}
                className="w-56 h-56 md:w-64 md:h-64 object-contain mb-4"
                loading="eager"
                decoding="async"
              />
              <h1 className="text-2xl md:text-3xl text-blue-500 font-bold">
                {slides[index].title}
              </h1>
              <p className="mt-1 text-base md:text-lg text-slate-300">
                {slides[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <aside className="min-w-0 flex flex-col items-start justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-500">
            {info[0].text}
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              target="_blank"
              href="https://kipferl.redbubble.com"
              className="rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {info[0].redbubble}
            </a>
            <a
              target="_blank"
              href="https://www.spreadshirt.at/shop/user/kipferl"
              className="rounded-xl border border-blue-600 text-blue-700 px-5 py-3 font-semibold hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {info[0].spreadshirt}
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-300">
            {info[0].detail}
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Instagram" target="_blank" href="https://www.instagram.com/kipferlcrew" className="p-2 rounded-full bg-white/70 hover:bg-white shadow">
            <img
              src="/assets/instagram.png"
              alt="Instagram"
              className="h-5 w-5"
            />
            </a>
            {/* <a aria-label="TikTok" href="https://tiktok.com/@kipferlcrew" className="p-2 rounded-full bg-white/70 hover:bg-white shadow">TT</a>
            <a aria-label="Pinterest" href="https://pinterest.com/kipferlcrew" className="p-2 rounded-full bg-white/70 hover:bg-white shadow">P</a> */}
            <a aria-label="E-Mail" href="mailto:contact@kipferlcrew.com" className="p-2 rounded-full bg-white/70 hover:bg-white shadow">
             <Mail className="h-5 w-5 text-black" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}