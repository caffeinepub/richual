export default function AboutPage() {
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
            About RICHUAL
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            This is not a gym. This is a sacred system for men who refuse mediocrity.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-6 text-gold uppercase">
                The Philosophy
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                RICHUAL exists because modern men are starving for power, discipline, and brotherhood. We honor
                strength as Dharma. We treat discipline as Tapasya. We pursue wealth with clarity and purpose.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Every rep is ritual. Every morning is ceremony. Every choice is self-command. RICHUAL is where men
                shed weakness and step into power.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-2xl font-bold text-saffron mb-2">शक्ति</h3>
                <p className="text-foreground/70">Shakti – Power</p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-2xl font-bold text-saffron mb-2">तपस्या</h3>
                <p className="text-foreground/70">Tapasya – Discipline</p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-2xl font-bold text-saffron mb-2">विकास</h3>
                <p className="text-foreground/70">Vikas – Growth</p>
              </div>
            </div>
          </div>

          {/* Ritual System */}
          <div className="border-t border-gold/20 pt-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-12 text-center text-gold uppercase">
              The Ritual System
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">1</span>
                </div>
                <h3 className="text-xl font-bold tracking-wider mb-3 text-gold uppercase">Foundation</h3>
                <p className="text-foreground/70">
                  Build unshakeable discipline through structured daily rituals and physical training.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <h3 className="text-xl font-bold tracking-wider mb-3 text-gold uppercase">Transformation</h3>
                <p className="text-foreground/70">
                  Forge strength of body and mind through progressive challenges and brotherhood.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">3</span>
                </div>
                <h3 className="text-xl font-bold tracking-wider mb-3 text-gold uppercase">Mastery</h3>
                <p className="text-foreground/70">
                  Achieve elite performance and command your life, wealth, and purpose.
                </p>
              </div>
            </div>
          </div>

          {/* Discipline Code */}
          <div className="border-t border-gold/20 pt-20 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-12 text-center text-gold uppercase">
              The Discipline Code
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="border border-gold/30 bg-black/40 p-6">
                <p className="text-lg font-semibold text-foreground/90">
                  We do not train for vanity. We train for power.
                </p>
              </div>
              <div className="border border-gold/30 bg-black/40 p-6">
                <p className="text-lg font-semibold text-foreground/90">
                  We do not seek comfort. We seek transformation.
                </p>
              </div>
              <div className="border border-gold/30 bg-black/40 p-6">
                <p className="text-lg font-semibold text-foreground/90">
                  We do not follow trends. We forge our own path.
                </p>
              </div>
              <div className="border border-gold/30 bg-black/40 p-6">
                <p className="text-lg font-semibold text-foreground/90">
                  We rise together, not as customers, but as brothers sworn to growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
