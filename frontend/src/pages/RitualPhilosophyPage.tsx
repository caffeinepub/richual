import { Sun, Dumbbell, Brain, TrendingUp, Users } from 'lucide-react';

export default function RitualPhilosophyPage() {
  const rituals = [
    {
      icon: Sun,
      title: 'Morning Discipline',
      description:
        'Begin each day with intention. Wake before dawn. Cold exposure. Meditation. Set your mind before the world demands your attention.',
      practices: ['5 AM wake time', 'Cold shower protocol', '20-minute meditation', 'Daily intention setting'],
    },
    {
      icon: Dumbbell,
      title: 'Physical Training',
      description:
        'The body is a temple of power. Train with purpose. Progressive overload. Compound movements. Build strength that translates to life.',
      practices: ['Structured strength training', 'Progressive protocols', 'Recovery optimization', 'Performance tracking'],
    },
    {
      icon: Brain,
      title: 'Meditation',
      description:
        'Command the mind. Daily practice builds mental clarity, emotional control, and spiritual strength. This is non-negotiable.',
      practices: ['Daily meditation', 'Breathwork protocols', 'Visualization practice', 'Mental conditioning'],
    },
    {
      icon: TrendingUp,
      title: 'Wealth Focus',
      description:
        'Wealth is not evil. Wealth is power. Develop the mindset, skills, and discipline to build financial freedom and abundance.',
      practices: ['Wealth mindset training', 'Strategic goal setting', 'Income optimization', 'Investment education'],
    },
    {
      icon: Users,
      title: 'Brotherhood',
      description:
        'Rise together. Support each other. Challenge each other. The brotherhood is sacred. We are not customers. We are brothers.',
      practices: ['Weekly brotherhood meetings', 'Accountability partnerships', 'Shared challenges', 'Mutual support'],
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 bg-black">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/temple-stone-texture.dim_2048x2048.png)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-8 text-gold uppercase">
            Ritual Philosophy
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Daily rituals. Sacred structure. Transformational system.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-16 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            RICHUAL is built on the principle that transformation comes through consistent, disciplined daily practice.
            These are not suggestions. These are rituals. Sacred commitments to your growth.
          </p>
          <div className="border-t border-b border-gold/20 py-6">
            <p className="text-2xl font-bold text-saffron">Every ritual is a declaration of intent.</p>
          </div>
        </div>
      </section>

      {/* Rituals */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {rituals.map((ritual, index) => {
              const Icon = ritual.icon;
              return (
                <div
                  key={ritual.title}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div className="border border-gold/30 bg-black/60 backdrop-blur-sm p-8 md:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <Icon className="w-10 h-10 text-gold" />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-gold uppercase">
                          {ritual.title}
                        </h2>
                      </div>
                      <p className="text-lg text-foreground/80 leading-relaxed mb-6">{ritual.description}</p>
                      <div className="border-t border-gold/20 pt-6">
                        <h3 className="text-sm font-bold tracking-wider mb-4 text-saffron uppercase">
                          Core Practices
                        </h3>
                        <ul className="space-y-2">
                          {ritual.practices.map((practice) => (
                            <li key={practice} className="flex items-start gap-3">
                              <span className="text-gold mt-1">▸</span>
                              <span className="text-foreground/70">{practice}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 border-2 border-gold flex items-center justify-center bg-black/80">
                      <span className="text-6xl font-bold text-gold/30">{index + 1}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sacred System */}
      <section className="relative py-20 bg-black">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(/assets/generated/smoke-embers-texture.dim_2048x2048.png)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-8 text-gold uppercase">
            A Sacred System
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            These rituals are not isolated practices. They form a complete system. Each element supports the others.
            Together, they create transformation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="border border-gold/30 bg-black/40 p-6">
              <p className="text-xl font-bold text-saffron mb-2">शक्ति</p>
              <p className="text-sm text-foreground/70">Power through discipline</p>
            </div>
            <div className="border border-gold/30 bg-black/40 p-6">
              <p className="text-xl font-bold text-saffron mb-2">तपस्या</p>
              <p className="text-sm text-foreground/70">Growth through practice</p>
            </div>
            <div className="border border-gold/30 bg-black/40 p-6">
              <p className="text-xl font-bold text-saffron mb-2">विकास</p>
              <p className="text-sm text-foreground/70">Transformation through commitment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
