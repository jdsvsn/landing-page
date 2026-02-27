import { motion } from "motion/react";
import { Code2, Palette, BarChart3, Globe2, Cpu, Smartphone } from "lucide-react";

const services = [
  {
    title: "Service One",
    description: "Describe the primary service you offer and how it benefits your target audience.",
    icon: Code2,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Service Two",
    description: "Highlight another key offering with a focus on results and customer satisfaction.",
    icon: Palette,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Service Three",
    description: "Detail a specialized solution that addresses a specific pain point for your clients.",
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Service Four",
    description: "Showcase your expertise in a particular area of your business or industry.",
    icon: Cpu,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Service Five",
    description: "Explain a complementary service that adds value to your main offerings.",
    icon: Smartphone,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Service Six",
    description: "Mention any additional support or consulting services you provide.",
    icon: Globe2,
    color: "bg-indigo-50 text-indigo-600"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4">Our Services</h2>
          <h3 className="text-4xl font-sans font-bold text-zinc-900 mb-4">Comprehensive Digital Solutions</h3>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            We offer a wide range of services to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h4>
              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
