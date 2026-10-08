import { Link, useLocation } from 'wouter';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/lessons', label: 'Lessons' },
  { path: '/blog', label: 'Blog' },
  { path: '/discounts-and-refs', label: 'Discounts & Refs' },
  { path: '/glossary', label: 'Glossary' },
  { path: '/faq', label: 'FAQ' },
  { path: '/modes/dn-bot', label: 'DN Bot' },
  { path: '/stats', label: 'TreadFi Stats' },
];

const botModes = [
  { path: '/modes/grid', label: 'GRID' },
  { path: '/modes/mid', label: 'MID' },
  { path: '/modes/rgrid', label: 'RGRID' },
  { path: '/modes/rsi', label: 'RSI' },
  { path: '/modes/blend', label: 'BLEND' },
  { path: '/modes/polymarket', label: 'Polymarket' },
];

const agentItems = [
  { path: '/agents/market-making-custom-agent', label: 'Market Making with an Agent' },
  { path: '/agents/getting-started', label: 'How to Get Started' },
  { path: '/agents/build-your-first-custom-agent', label: 'Build a Custom Agent' },
];

const exchangeTutorialItems = [
  { path: '/exchange-tutorials/arcus-treadfi-robinhood', label: 'Arcus × TreadFi × Robinhood' },
  { path: '/exchange-tutorials/aftermath-treadfi-sui', label: 'Aftermath × TreadFi Guide' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [agentsDropdownOpen, setAgentsDropdownOpen] = useState(false);
  const [exchangeTutorialsDropdownOpen, setExchangeTutorialsDropdownOpen] = useState(false);
  const [mobileModesOpen, setMobileModesOpen] = useState(false);
  const [mobileAgentsOpen, setMobileAgentsOpen] = useState(false);
  const [mobileExchangeTutorialsOpen, setMobileExchangeTutorialsOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const agentsDropdownRef = useRef<HTMLDivElement>(null);
  const exchangeTutorialsDropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location === path;
  const isModesActive = botModes.some((m) => location === m.path);
  const isAgentsActive = agentItems.some((a) => location === a.path) || location === '/agents';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (agentsDropdownRef.current && !agentsDropdownRef.current.contains(e.target as Node)) {
        setAgentsDropdownOpen(false);
      }
      if (exchangeTutorialsDropdownRef.current && !exchangeTutorialsDropdownRef.current.contains(e.target as Node)) {
        setExchangeTutorialsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group" data-testid="link-home-logo">
            <div className="w-8 h-8 gradient-bg-cyan-emerald rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">
              tread101<span className="gradient-text-cyan-emerald">.xyz</span>
            </span>
          </Link>

          <div className="hidden min-[1440px]:flex items-center gap-5">
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

            {/* Agents Dropdown */}
            <div className="relative" ref={agentsDropdownRef}>
              <button
                onClick={() => setAgentsDropdownOpen(!agentsDropdownOpen)}
                data-testid="button-agents-dropdown"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  isAgentsActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Agents
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${agentsDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {agentsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-56 bg-card border border-card-border rounded-xl shadow-xl shadow-black/30 py-1.5 z-50">
                  <Link
                    to="/agents"
                    onClick={() => setAgentsDropdownOpen(false)}
                    data-testid="link-agents-index"
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                      isActive('/agents')
                        ? 'text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                    }`}
                  >
                    All Agents Articles
                  </Link>
                  {agentItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setAgentsDropdownOpen(false)}
                      data-testid={`link-agent-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                        isActive(item.path)
                          ? 'text-primary bg-primary/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Exchange Tutorials Dropdown */}
            <div className="relative" ref={exchangeTutorialsDropdownRef}>
              <button
                onClick={() => setExchangeTutorialsDropdownOpen(!exchangeTutorialsDropdownOpen)}
                data-testid="button-exchange-tutorials-dropdown"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  location.startsWith('/exchange-tutorials')
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Exchange Tutorials
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${exchangeTutorialsDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {exchangeTutorialsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-64 bg-card border border-card-border rounded-xl shadow-xl shadow-black/30 py-1.5 z-50">
                  <Link
                    to="/exchange-tutorials"
                    onClick={() => setExchangeTutorialsDropdownOpen(false)}
                    data-testid="link-exchange-tutorials-index"
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                      isActive('/exchange-tutorials')
                        ? 'text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                    }`}
                  >
                    All Exchange Tutorials
                  </Link>
                  {exchangeTutorialItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setExchangeTutorialsDropdownOpen(false)}
                      data-testid="link-exchange-tutorial-article"
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                        isActive(item.path)
                          ? 'text-primary bg-primary/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* MM Bot Modes Dropdown */}
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
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="min-[1440px]:hidden text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="min-[1440px]:hidden bg-background border-t border-border/50 max-h-[calc(100dvh-4rem)] overflow-y-auto">
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

            {/* Mobile Agents Accordion */}
            <div>
              <button
                onClick={() => setMobileAgentsOpen(!mobileAgentsOpen)}
                className={`flex items-center gap-1 w-full text-sm font-medium transition-colors duration-200 py-2 ${
                  isAgentsActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Agents
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileAgentsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileAgentsOpen && (
                <div className="pl-4 space-y-1 pb-1">
                  <Link
                    to="/agents"
                    onClick={() => { setMobileMenuOpen(false); setMobileAgentsOpen(false); }}
                    className={`block text-sm py-1.5 transition-colors duration-150 ${
                      isActive('/agents') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All Agents Articles
                  </Link>
                  {agentItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => { setMobileMenuOpen(false); setMobileAgentsOpen(false); }}
                      className={`block text-sm py-1.5 transition-colors duration-150 ${
                        isActive(item.path) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Exchange Tutorials Accordion */}
            <div>
              <button
                onClick={() => setMobileExchangeTutorialsOpen(!mobileExchangeTutorialsOpen)}
                className={`flex items-center gap-1 w-full text-sm font-medium transition-colors duration-200 py-2 ${
                  location.startsWith('/exchange-tutorials')
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Exchange Tutorials
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileExchangeTutorialsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileExchangeTutorialsOpen && (
                <div className="pl-4 space-y-1 pb-1">
                  <Link
                    to="/exchange-tutorials"
                    onClick={() => { setMobileMenuOpen(false); setMobileExchangeTutorialsOpen(false); }}
                    className={`block text-sm py-1.5 transition-colors duration-150 ${
                      isActive('/exchange-tutorials') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All Exchange Tutorials
                  </Link>
                  {exchangeTutorialItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => { setMobileMenuOpen(false); setMobileExchangeTutorialsOpen(false); }}
                      className={`block text-sm py-1.5 transition-colors duration-150 ${
                        isActive(item.path) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile MM Bot Modes Accordion */}
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
