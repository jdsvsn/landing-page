import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4">About Us</h2>
            <h3 className="text-4xl font-sans font-bold text-zinc-900 mb-6 leading-tight">
              A dedicated team focused on delivering excellence.
            </h3>
            <p className="text-lg text-zinc-600 mb-8">
              Write a compelling story about your company's origins, values, and vision. 
              Explain what sets you apart from the competition and why customers should trust you.
            </p>
            <div className="space-y-4">
              {[
                "Core value or key benefit one",
                "Core value or key benefit two",
                "Core value or key benefit three",
                "Core value or key benefit four"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  </div>
                  <span className="text-zinc-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="//dog.jpg" 
                alt="Our Team" 
                className="w-full h-full "
            
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 hidden md:block">
              <p className="text-4xl font-bold text-zinc-900 mb-1">150+</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Projects Delivered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
