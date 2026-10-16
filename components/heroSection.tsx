export default function HeroSection() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">
          Full-Stack & <span className="text-cyan-400">AI Developer</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-slate-400 text-lg sm:text-xl mb-8">
          Crafting high-performance web applications using MERN stack, Next.js, and TypeScript.
        </p>
        
        {/* Call to Action Button */}
        <button className="px-8 py-3.5 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
          Get in Touch
        </button>

      </div>
    </section>
  );
}