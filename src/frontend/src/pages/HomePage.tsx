import { useNavigate } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const ranks = [
    {
      title: 'INITIATE',
      description: 'The first step. Foundation built through discipline and dedication.',
    },
    {
      title: 'WARRIOR',
      description: 'Strength forged. Mind sharpened. Body transformed.',
    },
    {
      title: 'TITAN',
      description: 'Elite performance. Mastery of self. Dominance achieved.',
    },
    {
      title: 'INNER CIRCLE',
      description: 'The apex. Reserved for those who transcend limits.',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/generated/hero-gym-silhouette.dim_2400x1350.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        {/* Smoke Texture Overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: 'url(/assets/generated/smoke-embers-texture.dim_2048x2048.png)',
            backgroundSize: 'cover',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 text-gold uppercase">
            Enter the Order.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 tracking-wide">
            Discipline is Dharma.
          </p>
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Strength. Discipline. Wealth. Brotherhood.
          </p>
          <button
            onClick={() => navigate({ to: '/apply' })}
            className="group px-10 py-4 bg-gold text-black font-bold text-lg tracking-wider hover:bg-gold/90 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            APPLY FOR MEMBERSHIP
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Concept Section */}
      <section className="relative py-24 bg-black">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/temple-stone-texture.dim_2048x2048.png)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-8 text-gold uppercase">
            Not a Gym. An Initiation.
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            RICHUAL is a high-performance initiation for men who want strength, clarity, dominance, and purpose.
            This is not casual. This is not commercial. This is elite. Controlled. Dominant.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-3xl md:text-4xl font-bold text-saffron">
            <span>शक्ति</span>
            <span className="text-gold">•</span>
            <span>तपस्या</span>
            <span className="text-gold">•</span>
            <span>विकास</span>
          </div>
          <p className="text-sm text-foreground/60 mt-4 tracking-wider">
            SHAKTI • TAPASYA • VIKAS
          </p>
        </div>
      </section>

      {/* Ranks Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-16 text-center text-gold uppercase">
            The Path
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ranks.map((rank, index) => (
              <div
                key={rank.title}
                className="group relative border border-gold/30 bg-black/60 backdrop-blur-sm p-8 hover:border-gold transition-all hover:scale-105"
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold tracking-wider mb-4 text-gold uppercase">
                  {rank.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{rank.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discipline Code Section */}
      <section className="relative py-24 bg-black">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(/assets/generated/smoke-embers-texture.dim_2048x2048.png)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-12 text-gold uppercase">
            The Code
          </h2>
          <div className="space-y-6 text-xl md:text-2xl font-semibold text-foreground/90">
            <p className="border-l-4 border-gold pl-6 text-left">Discipline is Dharma.</p>
            <p className="border-l-4 border-saffron pl-6 text-left">Build the Body. Command the Mind.</p>
            <p className="border-l-4 border-gold pl-6 text-left">RICHUAL is not a gym. It is initiation.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-t from-black to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-8 text-gold uppercase">
            Begin Your Transformation.
          </h2>
          <button
            onClick={() => navigate({ to: '/apply' })}
            className="group px-10 py-4 bg-gold text-black font-bold text-lg tracking-wider hover:bg-gold/90 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            APPLY NOW
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
