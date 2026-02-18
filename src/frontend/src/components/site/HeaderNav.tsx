import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PROGRAMS', path: '/programs' },
    { label: 'MEMBERSHIP', path: '/membership' },
    { label: 'RITUAL PHILOSOPHY', path: '/ritual-philosophy' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-black/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/generated/richual-emblem.dim_512x512.png"
              alt="RICHUAL"
              className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
            />
            <span className="text-2xl font-bold tracking-wider text-gold">RICHUAL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-semibold tracking-wider text-foreground/80 hover:text-gold transition-colors"
                activeProps={{ className: 'text-gold' }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => navigate({ to: '/apply' })}
              className="px-6 py-2.5 bg-gold text-black font-bold text-sm tracking-wider hover:bg-gold/90 transition-all hover:scale-105"
            >
              APPLY NOW
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-gold/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-wider text-foreground/80 hover:text-gold transition-colors py-2"
                  activeProps={{ className: 'text-gold' }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate({ to: '/apply' });
                }}
                className="px-6 py-3 bg-gold text-black font-bold text-sm tracking-wider hover:bg-gold/90 transition-all mt-2"
              >
                APPLY NOW
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
