import { useState, useEffect, useCallback } from 'react';
import {
  Fish,
  MapPin,
  Wifi,
  WifiOff,
  BookOpen,
  Trophy,
  Moon,
  Sun,
  Shield,
  Compass,
  ArrowRight,
  ChevronDown,
  Mail,
  ExternalLink,
  Sparkles,
  Star,
  Waves,
  Clock,
  Smartphone,
  Menu,
  X,
} from 'lucide-react';

function useFadeIn(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  const setRef = useCallback((el: HTMLDivElement | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, threshold]);

  return { isVisible, setRef };
}

const features = [
  {
    icon: Compass,
    title: 'KI-Fangindex',
    eyebrow: 'Fangplanung',
    desc: 'Unser Algorithmus berechnet aus 5 Faktoren — Wetter, Tageszeit, Mondphase, Solunar & Wasserstand — wann und wo du am besten fängst.',
    gradient: 'from-biss-primary/20 to-biss-water/20',
    iconColor: 'text-biss-water',
  },
  {
    icon: WifiOff,
    title: 'Offline-Modus',
    eyebrow: 'Am Wasser',
    desc: 'Karte, Spots, Fangindex und Fangbuch funktionieren komplett ohne Internet. Deine Fänge werden automatisch synchronisiert.',
    gradient: 'from-biss-accent/20 to-biss-primary/20',
    iconColor: 'text-biss-accent',
  },
  {
    icon: BookOpen,
    title: 'Fang-Tagebuch',
    eyebrow: 'Dokumentation',
    desc: 'Dokumentiere jeden Fang mit Foto, Spot, Fischart und Bedingungen. Dein persönliches Angeltagebuch — immer dabei.',
    gradient: 'from-biss-primary/20 to-biss-water/20',
    iconColor: 'text-biss-primary',
  },
  {
    icon: MapPin,
    title: '200+ Gewässer',
    eyebrow: 'Revierwissen',
    desc: 'Echte Gewässerdaten aus OpenStreetMap für Norddeutschland. Mit Live-Pegelständen vom PEGELONLINE.',
    gradient: 'from-biss-water/20 to-biss-primary/20',
    iconColor: 'text-biss-water',
  },
  {
    icon: Shield,
    title: 'Schonzeiten & Regeln',
    eyebrow: 'Regelsicherheit',
    desc: 'Schonzeiten, Mindestmaße und lokale Regeln für 7+ Fischarten — direkt in der App. Nie wieder unsicher am Wasser.',
    gradient: 'from-biss-accent/20 to-biss-primary/20',
    iconColor: 'text-biss-accent',
  },
  {
    icon: Trophy,
    title: 'Gamification',
    eyebrow: 'Motivation',
    desc: '18 Achievements in 4 Kategorien, Streak-System und Leaderboard. Angeln wird zum Abenteuer.',
    gradient: 'from-biss-accent/20 to-biss-water/20',
    iconColor: 'text-biss-accent',
  },
];

const uspPoints = [
  { icon: Star, text: 'Alle Kern-Features kostenlos — kein Paywall-Verrat' },
  { icon: Moon, text: 'Auto-Nachtmodus ab Sonnenuntergang' },
  { icon: Waves, text: 'Live-Pegelstände der Bundeswasserstraßen' },
  { icon: Clock, text: 'Beißzeit-Radar: Wann beißt es am besten?' },
  { icon: Sun, text: 'Solunar-Perioden & Golden Hours' },
  { icon: Fish, text: 'Privacy-First: Spots teilen ohne verbrennen' },
];

const heroHighlights = [
  {
    icon: WifiOff,
    title: 'Offline am Ufer',
    text: 'Karte, Fangindex und Regeln bleiben dabei, auch wenn der Empfang weg ist.',
  },
  {
    icon: Shield,
    title: 'Sicher unterwegs',
    text: 'Schonzeiten, Mindestmaße und lokale Regeln direkt in der App.',
  },
  {
    icon: Clock,
    title: 'Besseres Timing',
    text: 'Wetter, Tageszeit und Pegel verständlich auf den Punkt gebracht.',
  },
];

const appNotes = [
  {
    icon: Compass,
    title: 'Für echte Reviere gemacht',
    text: 'Keine generische US-Angel-App, sondern passend für Gewässer im Norden.',
  },
  {
    icon: BookOpen,
    title: 'Mehr merken, besser fangen',
    text: 'Dein Fangbuch zeigt dir mit der Zeit, was an welchem Wasser funktioniert.',
  },
  {
    icon: Waves,
    title: 'Nah am Wasser gedacht',
    text: 'Robust, klar und nützlich statt übertrieben technisch und steril.',
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { isVisible: heroVisible, setRef: heroRef } = useFadeIn();
  const { isVisible: featuresVisible, setRef: featuresRef } = useFadeIn();
  const { isVisible: uspVisible, setRef: uspRef } = useFadeIn();
  const { isVisible: previewVisible, setRef: previewRef } = useFadeIn();
  const { isVisible: ctaVisible, setRef: ctaRef } = useFadeIn();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-biss-dark text-biss-mist overflow-x-hidden font-sans">
      {/* ═══ HEADER ═══ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-biss-dark/96 backdrop-blur-md border-b border-biss-border/70 shadow-lg shadow-black/20'
            : 'bg-biss-dark/55 border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-biss-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img src="/Biss%20app%20logo%20.png" alt="BISS Logo" className="relative w-10 h-10 rounded-xl object-contain shadow-md" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-[0.04em] text-stone-100">BISS</span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.22em] text-stone-400">
                Die Angel-App für Norddeutschland
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-stone-300 hover:text-biss-sand transition-colors">
              Features
            </a>
            <a href="#vorteile" className="text-sm text-stone-300 hover:text-biss-sand transition-colors">
              Vorteile
            </a>
            <a href="#app" className="text-sm text-stone-300 hover:text-biss-sand transition-colors">
              Die App
            </a>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 bg-biss-accent hover:bg-[#ffbe59] text-biss-dark px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-black/10"
            >
              Frühzugang
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-biss-surface/90 border border-biss-border/80 text-stone-100"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-biss-dark/98 backdrop-blur-md border-b border-biss-border transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col p-6 gap-2">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 rounded-xl hover:bg-biss-surface text-lg text-stone-100">
              Features
            </a>
            <a href="#vorteile" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 rounded-xl hover:bg-biss-surface text-lg text-stone-100">
              Vorteile
            </a>
            <a href="#app" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 rounded-xl hover:bg-biss-surface text-lg text-stone-100">
              Die App
            </a>
            <div className="mt-4 pt-4 border-t border-biss-border">
              <a
                href="#waitlist"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-biss-accent text-biss-dark px-6 py-4 rounded-xl text-base font-semibold"
              >
                Frühzugang sichern
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* ═══ HERO ═══ */}
        <section
          ref={heroRef}
          className={`min-h-screen flex items-center px-6 pt-32 pb-16 relative transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Background effects */}
          <div className="absolute top-1/4 left-[8%] w-[360px] h-[360px] bg-biss-water/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-[18%] right-[8%] w-[300px] h-[300px] bg-biss-accent/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-[12%] left-[35%] w-[280px] h-[280px] bg-biss-forest/10 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="text-left">
              <div className="mb-8 inline-flex items-center gap-3 text-sm text-stone-200 border border-biss-sand/20 rounded-full px-5 py-2.5 bg-biss-wood/15">
                <Sparkles className="w-4 h-4 text-biss-accent" />
                <span>Für Seen, Flüsse und Vereinsgewässer in Norddeutschland</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.02] mb-6 text-stone-50">
                Die Angel-App,
                <br />
                die am Wasser
                <br />
                <span className="gradient-text">wirklich hilft</span>
              </h1>

              <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl leading-relaxed">
                BISS bringt Fangzeiten, Gewässer, Regeln und dein Fangbuch in eine App,
                die sich nicht wie ein Tech-Dashboard anfühlt, sondern wie ein Werkzeug
                für echte Angeltage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href="#waitlist"
                  className="group inline-flex items-center justify-center gap-3 bg-biss-accent hover:bg-[#ffbe59] text-biss-dark px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-black/15"
                >
                  Auf die Warteliste
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 text-stone-300 hover:text-biss-sand transition-colors text-base border border-biss-border/80 px-5 py-3 rounded-xl bg-biss-surface/35"
                >
                  Funktionen ansehen
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>

              {/* App Store Badges Placeholder */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-4xl">
                {heroHighlights.map((item) => (
                  <div key={item.title} className="weathered-card rounded-2xl p-4">
                    <div className="w-11 h-11 rounded-xl bg-biss-dark/50 border border-biss-border/80 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-biss-accent" />
                    </div>
                    <p className="text-sm font-semibold text-stone-100 mb-2">{item.title}</p>
                    <p className="text-sm text-stone-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="outdoor-panel rounded-[2rem] p-5 md:p-6">
              <div className="weathered-card rounded-[1.5rem] p-5 mb-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.26em] text-biss-sand/80">
                      Revier-Fokus
                    </span>
                    <h3 className="text-2xl font-bold text-stone-50 mt-2">Norddeutschland im Blick</h3>
                  </div>
                  <img src="/Biss%20app%20logo%20.png" alt="BISS Logo" className="w-16 h-16 object-contain rounded-2xl" />
                </div>
                <p className="text-sm text-stone-300 mt-4 leading-relaxed">
                  Pegel, Beißzeiten, Regeln und Fangbuch in einer Oberfläche, die du auch
                  mit nassen Fingern noch verstehst.
                </p>
              </div>

              <div className="space-y-3">
                <div className="field-chip rounded-2xl p-4 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-biss-water mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-stone-100">Gewässer & Spots</p>
                    <p className="text-sm text-stone-300">Relevante Gewässerdaten statt endloser Menüs und Tech-Sprache.</p>
                  </div>
                </div>
                <div className="field-chip rounded-2xl p-4 flex items-start gap-3">
                  <Waves className="w-5 h-5 text-biss-water mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-stone-100">Pegel & Bedingungen</p>
                    <p className="text-sm text-stone-300">Wasserstände und Beißzeiten schnell lesbar, direkt für den Einsatz draußen.</p>
                  </div>
                </div>
                <div className="field-chip rounded-2xl p-4 flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-biss-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-stone-100">Robust auf dem Handy</p>
                    <p className="text-sm text-stone-300">Klare Oberflächen, sinnvolle Infos und kein überdesignter Startup-Look.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                <div className="field-chip rounded-2xl p-3">
                  <p className="text-xl font-bold text-biss-accent">200+</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Gewässer</p>
                </div>
                <div className="field-chip rounded-2xl p-3">
                  <p className="text-xl font-bold text-biss-water">Offline</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">am Ufer</p>
                </div>
                <div className="field-chip rounded-2xl p-3">
                  <p className="text-xl font-bold text-biss-sand">Kostenlos</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">starten</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500 animate-bounce">
            <div className="w-6 h-10 border-2 border-biss-border rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-biss-sand rounded-full" />
            </div>
          </div>
        </section>

        {/* ═══ FEATURES ═══ */}
        <section
          id="features"
          ref={featuresRef}
          className={`py-24 md:py-28 px-6 section-band transition-all duration-1000 delay-200 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.92fr_1.08fr] gap-8 xl:gap-10 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs uppercase tracking-[0.3em] text-biss-sand mb-4 block">
                Features
              </span>
              <h2 className="text-3xl md:text-[3.35rem] font-bold leading-[0.96] mb-6 text-stone-50 max-w-[12ch]">
                Am Wasser zählen Klarheit und Verlässlichkeit
              </h2>
              <p className="text-stone-300 text-[1.05rem] leading-relaxed max-w-lg">
                BISS ist keine hochglänzende Tech-Spielerei. Die App ist dafür gemacht,
                dass du draußen schneller zu guten Entscheidungen kommst — mit Daten,
                die dir wirklich etwas bringen.
              </p>
              <div className="mt-8 field-chip rounded-2xl p-5 max-w-md">
                <p className="text-sm font-semibold text-stone-100 mb-2">Was du davon hast</p>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Weniger Suchen, weniger Rätselraten, mehr Zeit am Wasser und mehr Übersicht,
                  wenn es darauf ankommt.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 auto-rows-fr">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group relative weathered-card rounded-[1.75rem] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <span className="text-[11px] uppercase tracking-[0.24em] text-biss-sand/70 block mb-4">
                    {feature.eyebrow}
                  </span>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${feature.gradient} border border-biss-border/60 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-[1.75rem] leading-[1.05] font-semibold mb-3 text-stone-50">{feature.title}</h3>
                  <p className="text-stone-300 text-[0.95rem] leading-relaxed max-w-[30ch]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ USP / VORTEILE ═══ */}
        <section
          id="vorteile"
          ref={uspRef}
          className={`py-24 md:py-28 px-6 transition-all duration-1000 delay-200 ${
            uspVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.92fr_1.08fr] gap-8 xl:gap-10 items-start">
            <div className="outdoor-panel rounded-[2rem] p-7 md:p-8">
              <span className="text-xs uppercase tracking-[0.3em] text-biss-sand mb-4 block">
                Warum BISS?
              </span>
              <h2 className="text-3xl md:text-[3.1rem] leading-[0.97] font-bold mb-6 text-stone-50 max-w-[11ch]">
                Entwickelt für Angler,
                nicht für Pitchdecks
              </h2>
              <p className="text-stone-300 text-[1.02rem] leading-relaxed max-w-[33ch]">
                Wo andere Produkte wie Startup-Folien aussehen, soll BISS sich wie ein
                verlässlicher Begleiter am Wasser anfühlen: robust, hilfreich und fair.
              </p>

              <div className="mt-8 rounded-2xl bg-biss-wood/18 border border-biss-sand/15 p-4 md:p-5">
                <div className="inline-flex items-center gap-3 text-sm leading-relaxed text-biss-sand">
                  <Shield className="w-4 h-4" />
                  <span>Faire Paywall: Kernfeatures bleiben immer kostenlos</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
              {uspPoints.map((usp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 md:p-6 rounded-2xl weathered-card transition-colors h-full min-h-[136px]"
                >
                  <div className="w-11 h-11 rounded-xl bg-biss-dark/55 border border-biss-border/80 flex items-center justify-center shrink-0">
                    <usp.icon className="w-5 h-5 text-biss-accent" />
                  </div>
                  <p className="text-stone-300 text-[0.95rem] leading-relaxed pt-1 max-w-[24ch]">{usp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ APP PREVIEW ═══ */}
        <section
          id="app"
          ref={previewRef}
          className={`py-24 md:py-28 px-6 section-band transition-all duration-1000 delay-200 ${
            previewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
            {/* Phone Mockup */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-b from-biss-accent/12 to-biss-water/10 blur-3xl rounded-full scale-150" />

              {/* Phone Frame */}
              <div className="relative bg-biss-surface rounded-[3rem] border-2 border-biss-border p-3 shadow-2xl shadow-black/25">
                <div className="bg-biss-dark rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-8 pt-4 pb-2">
                    <span className="text-xs text-stone-400">9:41</span>
                    <div className="w-20 h-5 bg-black rounded-full" />
                    <div className="flex gap-1">
                      <Wifi className="w-3 h-3 text-stone-400" />
                    </div>
                  </div>

                  {/* Map Preview Area */}
                  <div className="relative h-[55%] bg-gradient-to-b from-[#21363b] to-[#142126] overflow-hidden">
                    {/* Stylized map elements */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-[20%] left-[15%] w-[70%] h-[30%] bg-biss-accent/20 rounded-full blur-md" />
                      <div className="absolute top-[40%] left-[30%] w-[40%] h-[20%] bg-biss-water/15 rounded-full blur-sm" />
                      <div className="absolute top-[15%] right-[20%] w-[25%] h-[15%] bg-biss-accent/15 rounded-full blur-sm" />
                    </div>

                    {/* Score markers */}
                    <div className="absolute top-[25%] left-[20%] w-10 h-10 rounded-full bg-biss-accent flex items-center justify-center text-xs font-bold shadow-lg shadow-biss-accent/30 animate-float">
                      78
                    </div>
                    <div className="absolute top-[35%] right-[25%] w-10 h-10 rounded-full bg-biss-primary flex items-center justify-center text-xs font-bold shadow-lg shadow-biss-primary/30 animate-float-delayed">
                      54
                    </div>
                    <div className="absolute top-[55%] left-[45%] w-10 h-10 rounded-full bg-biss-water flex items-center justify-center text-xs font-bold shadow-lg shadow-biss-water/30 animate-float">
                      82
                    </div>

                    {/* Top Bar */}
                    <div className="absolute top-2 left-3 right-3 flex items-center justify-between">
                      <div className="glass-card rounded-xl px-3 py-2 flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-biss-accent" />
                        <span className="text-[10px] text-white/80">Hannover</span>
                      </div>
                      <div className="glass-card rounded-xl px-3 py-2">
                        <span className="text-[10px] text-biss-sand font-semibold">Beißzeit: Gut</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Sheet Preview */}
                  <div className="bg-biss-surface rounded-t-3xl -mt-4 relative z-10 p-5">
                    <div className="w-10 h-1 bg-biss-border rounded-full mx-auto mb-4" />
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-sm font-semibold text-stone-50">Maschsee</h4>
                        <p className="text-[10px] text-stone-400">See &middot; 2.3 km</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-biss-forest to-biss-accent flex items-center justify-center text-biss-dark">
                        <span className="text-sm font-bold">78</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {['Karpfen', 'Hecht', 'Zander'].map((fish) => (
                        <span
                          key={fish}
                          className="text-[9px] px-2 py-1 rounded-full bg-biss-card border border-biss-border text-stone-300"
                        >
                          {fish}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tab Bar */}
                  <div className="bg-biss-surface border-t border-biss-border px-4 py-2 flex justify-around">
                    {[
                      { icon: Shield, label: 'Schein' },
                      { icon: BookOpen, label: 'Fänge' },
                      { icon: MapPin, label: 'Karte', active: true },
                      { icon: Fish, label: 'Kaufen' },
                      { icon: Trophy, label: 'Profil' },
                    ].map((tab) => (
                      <div key={tab.label} className="flex flex-col items-center gap-0.5">
                        <tab.icon
                          className={`w-4 h-4 ${tab.active ? 'text-biss-accent' : 'text-stone-500'}`}
                        />
                        <span
                          className={`text-[8px] ${tab.active ? 'text-biss-accent font-medium' : 'text-stone-500'}`}
                        >
                          {tab.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-biss-sand mb-4 block">
                Die App
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-stone-50">
                Modern, aber nah an der Zielgruppe
              </h2>
              <p className="text-stone-300 text-lg max-w-2xl leading-relaxed mb-8">
                Die neue Richtung nimmt die Technik nicht weg — sie übersetzt sie in eine Sprache
                und Oberfläche, die für Angler natürlicher wirkt: praxistauglich, verständlich und robust.
              </p>

              <div className="grid gap-4">
                {appNotes.map((note) => (
                  <div key={note.title} className="weathered-card rounded-2xl p-5 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-biss-dark/55 border border-biss-border/80 flex items-center justify-center shrink-0">
                      <note.icon className="w-5 h-5 text-biss-water" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-100 mb-2">{note.title}</h3>
                      <p className="text-sm text-stone-300 leading-relaxed">{note.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 field-chip rounded-2xl p-5 max-w-xl">
                <p className="text-sm font-semibold text-stone-100 mb-2">Gestaltungsprinzip für BISS</p>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Weniger Hochglanz, mehr Charakter. Weniger Startup-Vibes, mehr Vertrauen,
                  Orientierung und Nähe zur Angelszene.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WAITLIST CTA ═══ */}
        <section
          id="waitlist"
          ref={ctaRef}
          className={`py-24 md:py-28 px-6 relative transition-all duration-1000 delay-200 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-biss-accent/5 to-transparent" />

          <div className="max-w-4xl mx-auto relative z-10 outdoor-panel rounded-[2rem] p-8 md:p-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start mb-8">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 text-sm text-biss-sand border border-biss-sand/20 rounded-full px-4 py-2 bg-biss-wood/15">
                  <Sparkles className="w-4 h-4" />
                  <span>Early Access</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-stone-50">
                  Sei einer der Ersten,
                  die BISS am Wasser testen
                </h2>
                <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
                  Trag dich ein und wir geben dir Bescheid, sobald der erste Test startet.
                  Kostenlos, unverbindlich und deutlich näher an dem, was Angler wirklich brauchen.
                </p>
              </div>

              <div className="weathered-card rounded-2xl p-5">
                <p className="text-sm font-semibold text-stone-100 mb-3">Was dich erwartet</p>
                <div className="space-y-3 text-sm text-stone-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-biss-accent" />
                    <span>Früher Zugang zur App</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-biss-water" />
                    <span>Einfluss auf Features und Prioritäten</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-biss-forest" />
                    <span>Kein Spam, nur relevante Updates</span>
                  </div>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-biss-forest/15 border border-biss-sand/20 text-biss-mist">
                <p className="text-lg font-semibold mb-1">Du bist auf der Liste!</p>
                <p className="text-sm text-stone-300">
                  Wir melden uns, sobald BISS bereit ist.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.de"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-biss-surface border border-biss-border text-stone-100 placeholder-stone-500 focus:outline-none focus:border-biss-accent/50 focus:ring-2 focus:ring-biss-accent/10 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-biss-accent hover:bg-[#ffbe59] text-biss-dark px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg shadow-black/10 shrink-0"
                >
                  Eintragen
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-biss-border/50 py-12 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left - BISS Logo */}
            <div className="flex items-start gap-3 max-w-sm">
              <img src="/Biss%20app%20logo%20.png" alt="BISS Logo" className="w-10 h-10 rounded-lg object-contain" />
              <div>
                <span className="font-bold text-stone-100 block">BISS</span>
                <span className="text-stone-400 text-sm block">Die Angel-App für Norddeutschland</span>
                <span className="text-stone-500 text-sm block mt-2">
                  Entwickelt für Angler, die klare Infos, echte Revierdaten und ein zuverlässiges Werkzeug wollen.
                </span>
              </div>
            </div>

            {/* Center - Made by */}
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <span>Ein Produkt von</span>
              <a
                href="https://adaptify-labs.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-stone-300 hover:text-stone-100 transition-colors font-medium"
              >
                Adaptify Labs
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Right - Links */}
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <a href="#" className="hover:text-white transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="mailto:info@adaptify-labs.de" className="hover:text-white transition-colors">
                Kontakt
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-biss-border/30 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-stone-600">
            <span>&copy; {new Date().getFullYear()} BISS by Adaptify Labs. Alle Rechte vorbehalten.</span>
            <span>Gebaut für Angler zwischen See, Kanal und Vereinsgewässer.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
