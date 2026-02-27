import { Layers, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Layers className="text-white w-5 h-5" />
              </div>
              <span className="font-sans font-bold text-lg tracking-tight text-zinc-900">BrandName</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              A brief description of your business and its commitment to quality and customer satisfaction.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-zinc-500 hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-black transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-sm text-zinc-500 hover:text-black transition-colors">Contact</Link></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-zinc-500 hover:text-black transition-colors">Web Development</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-black transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-black transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-black transition-colors">Digital Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Newsletter</h4>
            <p className="text-sm text-zinc-500 mb-4">Subscribe to get the latest news and updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-black/5"
              />
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">
            © 2026 BrandName Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-400 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-zinc-400 hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-zinc-400 hover:text-black transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
