import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-blue-100" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500">
          Chethan.dev
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}