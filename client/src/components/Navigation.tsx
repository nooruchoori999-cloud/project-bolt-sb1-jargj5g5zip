import { Link, useLocation } from 'wouter';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/lessons', label: 'Lessons' },
  { path: '/glossary', label: 'Glossary' },
  { path: '/faq', label: 'FAQ' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group" data-testid="link-home-logo">
            <div className="w-8 h-8 gradient-bg-cyan-emerald rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">
              tread<span className="gradient-text-cyan-emerald">.fi</span>{' '}
              <span className="text-muted-foreground font-medium text-sm">Learn</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://app.tread.fi"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-launch-app"
              className="px-4 py-2 gradient-bg-cyan-emerald text-white rounded-md text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Launch App
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/50">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                className={`block text-sm font-medium transition-colors duration-200 py-1 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://app.tread.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2.5 gradient-bg-cyan-emerald text-white rounded-md text-sm font-semibold text-center hover:opacity-90 transition-opacity mt-2"
            >
              Launch App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
