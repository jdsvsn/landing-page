import { motion } from "motion/react";
import { ArrowRight, Sparkles, Shield, Zap, Layers } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-600 mb-8"
          >
            <Sparkles className="w-3 h-3 text-emerald-500" />
            <span>Hello</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-zinc-900 mb-6"
          >
            Elevate your brand with <br />
            <span className="text-zinc-400 italic">premium solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-zinc-600 mb-10"
          >
            Provide a brief overview of your business mission and the value you bring to your customers. 
            This template is designed to be flexible and professional for any industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all hover:gap-3"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto bg-white text-black border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-colors"
            >
              View Services
            </Link>
          </motion.div>
        </div>

        {/* Stats/Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-100 pt-12"
        >
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <Zap className="text-emerald-600 w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-zinc-900">Ultra Fast</p>
              <p className="text-xs text-zinc-500">Optimized for performance</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Shield className="text-indigo-600 w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-zinc-900">Secure by Design</p>
              <p className="text-xs text-zinc-500">Enterprise-grade protection</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
              <Layers className="text-amber-600 w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-zinc-900">Scalable Architecture</p>
              <p className="text-xs text-zinc-500">Grows with your business</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
