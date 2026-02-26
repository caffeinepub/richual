import { useNavigate } from '@tanstack/react-router';
import { ChevronRight, Shield, Users, Zap } from 'lucide-react';

export default function MembershipPage() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Shield,
      title: 'Elite Access',
      description: 'Application-based entry ensures you train alongside committed, high-performing men.',
    },
    {
      icon: Zap,
      title: 'Structured System',
      description: 'Progressive rank system with clear milestones and transformational protocols.',
    },
    {
      icon: Users,
      title: 'Brotherhood',
      description: 'Join a community of ambitious men dedicated to strength, discipline, and growth.',
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
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-8 text-gold uppercase">Membership</h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
            Application-based entry. Limited seats. Premium positioning.
          </p>
          <p className="text-lg text-foreground/70">This is not for everyone. This is for the committed.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-16 text-center text-gold uppercase">
            Why RICHUAL
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="border border-gold/30 bg-black/60 backdrop-blur-sm p-8 hover:border-gold transition-all group"
                >
                  <Icon className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold tracking-wider mb-4 text-gold uppercase">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Application Process */}
          <div className="border-t border-gold/20 pt-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-12 text-center text-gold uppercase">
              Application Process
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center">
                  <span className="text-xl font-bold text-gold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-wider mb-2 text-gold uppercase">Submit Application</h3>
                  <p className="text-foreground/70">
                    Complete the application form. Tell us about your goals, experience, and why you want to join
                    RICHUAL.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center">
                  <span className="text-xl font-bold text-gold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-wider mb-2 text-gold uppercase">Review Process</h3>
                  <p className="text-foreground/70">
                    Our team reviews each application carefully. We look for commitment, ambition, and alignment with
                    our values.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center">
                  <span className="text-xl font-bold text-gold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-wider mb-2 text-gold uppercase">Begin Initiation</h3>
                  <p className="text-foreground/70">
                    Approved applicants receive access to the Initiate rank and begin their transformation journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Positioning */}
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
            Limited Availability
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            RICHUAL maintains strict membership limits to preserve the quality of training, community, and individual
            attention. We do not accept everyone. We accept the committed.
          </p>
          <div className="border-t border-b border-gold/20 py-8 mb-12">
            <p className="text-2xl font-bold text-saffron">
              "Discipline is Dharma. Build the Body. Command the Mind."
            </p>
          </div>
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
