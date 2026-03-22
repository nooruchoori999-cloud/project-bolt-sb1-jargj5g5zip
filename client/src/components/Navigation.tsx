import { Link, useLocation } from 'wouter';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/lessons', label: 'Lessons' },
  { path: '/glossary', label: 'Glossary' },
  { path: '/faq', label: 'FAQ' },
];

const botModes = [
  { path: '/modes/grid', label: 'GRID' },
  { path: '/modes/mid', label: 'MID' },
  { path: '/modes/rgrid', label: 'RGRID' },
  { path: '/modes/rsi', label: 'RSI' },
  { path: '/modes/blend', label: 'BLEND' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileModesOpen, setMobileModesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location === path;
  const isModesActive = botModes.some((m) => location === m.path);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                data-testid="button-modes-dropdown"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  isModesActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                MM Bot Modes
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-40 bg-card border border-card-border rounded-xl shadow-xl shadow-black/30 py-1.5 z-50">
                  {botModes.map((mode) => (
                    <Link
                      key={mode.path}
                      to={mode.path}
                      onClick={() => setDropdownOpen(false)}
                      data-testid={`link-mode-${mode.label.toLowerCase()}`}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                        isActive(mode.path)
                          ? 'text-primary bg-primary/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                      }`}
                    >
                      {mode.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/get-started"
              data-testid="link-nav-get-started"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/get-started')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Get Started
            </Link>

            <a
              href="https://app.tread.fi/referral/59S1TB1X"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-launch-app"
              className="px-4 py-2 gradient-bg-cyan-emerald text-white rounded-md text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Launch TreadFi Bot
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
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                className={`block text-sm font-medium transition-colors duration-200 py-2 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div>
              <button
                onClick={() => setMobileModesOpen(!mobileModesOpen)}
                className={`flex items-center gap-1 w-full text-sm font-medium transition-colors duration-200 py-2 ${
                  isModesActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                MM Bot Modes
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileModesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileModesOpen && (
                <div className="pl-4 space-y-1 pb-1">
                  {botModes.map((mode) => (
                    <Link
                      key={mode.path}
                      to={mode.path}
                      onClick={() => { setMobileMenuOpen(false); setMobileModesOpen(false); }}
                      className={`block text-sm py-1.5 transition-colors duration-150 ${
                        isActive(mode.path)
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {mode.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/get-started"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-nav-get-started"
              className={`block text-sm font-medium transition-colors duration-200 py-2 ${
                isActive('/get-started')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Get Started
            </Link>

            <a
              href="https://app.tread.fi/referral/59S1TB1X"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2.5 gradient-bg-cyan-emerald text-white rounded-md text-sm font-semibold text-center hover:opacity-90 transition-opacity mt-2"
            >
              Launch TreadFi Bot
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
