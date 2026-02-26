export default function ProgramsPage() {
  const programs = [
    {
      rank: 'INITIATE',
      level: 'I',
      description: 'The foundation. Entry into the order. Learn the rituals. Build discipline. Establish the base.',
      focus: ['Foundation strength training', 'Discipline protocols', 'Morning rituals', 'Brotherhood introduction'],
    },
    {
      rank: 'WARRIOR',
      level: 'II',
      description:
        'Strength forged. Mind sharpened. Body transformed. Advance through progressive challenges and mental conditioning.',
      focus: ['Advanced strength protocols', 'Mental conditioning', 'Wealth mindset training', 'Leadership development'],
    },
    {
      rank: 'TITAN',
      level: 'III',
      description:
        'Elite performance. Mastery of self. Dominance achieved. Reserved for those who have proven their commitment.',
      focus: ['Elite performance training', 'Advanced meditation', 'Strategic wealth building', 'Mentorship role'],
    },
    {
      rank: 'INNER CIRCLE',
      level: 'IV',
      description:
        'The apex. The highest rank. Reserved for those who transcend limits and embody the RICHUAL philosophy completely.',
      focus: ['Exclusive access', 'Private coaching', 'Strategic partnerships', 'Legacy building'],
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 bg-black">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/smoke-embers-texture.dim_2048x2048.png)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-8 text-gold uppercase">Programs</h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Four ranks. One path. Ascend through discipline and dedication.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={program.rank}
                className="group relative border-2 border-gold/30 bg-black/60 backdrop-blur-sm hover:border-gold transition-all"
              >
                <div className="absolute -top-6 left-8 bg-black px-4 py-2 border-2 border-gold">
                  <span className="text-sm font-bold tracking-wider text-gold">RANK {program.level}</span>
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-4 text-gold uppercase">
                        {program.rank}
                      </h2>
                      <p className="text-lg text-foreground/80 leading-relaxed">{program.description}</p>
                    </div>
                    <div className="text-8xl md:text-9xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors">
                      {index + 1}
                    </div>
                  </div>
                  <div className="border-t border-gold/20 pt-6">
                    <h3 className="text-xl font-bold tracking-wider mb-4 text-saffron uppercase">Focus Areas</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {program.focus.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-gold mt-1">▸</span>
                          <span className="text-foreground/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-6 text-gold uppercase">
            Ready to Begin?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Application-based entry. Limited seats. Elite membership.
          </p>
          <a
            href="/apply"
            className="inline-block px-10 py-4 bg-gold text-black font-bold text-lg tracking-wider hover:bg-gold/90 transition-all hover:scale-105"
          >
            APPLY FOR MEMBERSHIP
          </a>
        </div>
      </section>
    </div>
  );
}
