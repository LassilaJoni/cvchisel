"use client";
import { motion } from "framer-motion";
import { Decoration } from "./ui/decoration";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => (
  <section id="hero" className="relative">
    <Decoration.Grid />
    <Decoration.Image />

    <div className="mx-auto max-w-7xl px-6 lg:flex lg:h-screen lg:items-center lg:px-12">
      <motion.div
        className="mx-auto mt-32 max-w-3xl shrink-0 lg:mx-0 lg:mt-0 lg:max-w-xl lg:pt-8"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="items-center gap-x-4 sm:flex"></div>

        <div className="mt-10 space-y-2">
          {/*<h6 className="text-base font-bold tracking-wide">Finally,</h6>*/}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Professional CV Creator: Streamline Your Career Journey
          </h1>
        </div>

        <p className="prose prose-base prose-zinc mt-6 text-lg leading-8 dark:prose-invert">
          Empower Your Job Search with Our Comprehensive and User-Friendly CV
          Builder
        </p>

        <div className="mt-10 flex items-center gap-x-8">
          <Button asChild size="lg">
            <Link href="/auth/login">Build Your CV</Link>
          </Button>
        </div>
      </motion.div>

      <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-20">
        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              width={3600}
              height={2078}
              src="/fhat-ari.png"
              alt="Reactive Resume - Screenshot - Builder Screen"
              className="w-[30rem] rounded-lg bg-background/5 shadow-2xl ring-1 ring-foreground/10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
