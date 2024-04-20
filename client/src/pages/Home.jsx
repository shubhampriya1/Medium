import { Hero } from "@/components/Hero";
import Navbar from "@/components/navbar";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div>
      <Navbar />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Welcome to <br /> <span className="text-rose-500">Lamp</span>Stack
        </motion.h1>
      </LampContainer>

      <Hero />
    </div>
  );
}

export default HomePage;
