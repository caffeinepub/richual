import { useState } from 'react';
import { useSubmitApplication } from '../hooks/useSubmitApplication';
import { validateApplication } from '../lib/validation/applyApplication';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    fitnessLevel: '',
    incomeGoal: '',
    motivation: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { submitApplication, isSubmitting, error: submitError } = useSubmitApplication();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    const validation = validateApplication(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Submit
    const success = await submitApplication({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      bio: `Age: ${formData.age} | Fitness Level: ${formData.fitnessLevel} | Income Goal: ${formData.incomeGoal}`,
      motivation: formData.motivation,
      experience: formData.fitnessLevel,
    });

    if (success) {
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        fitnessLevel: '',
        incomeGoal: '',
        motivation: '',
      });
      setErrors({});
    }
  };

  if (submitted) {
    return (
      <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-6 text-gold uppercase">
            Application Received
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Your application has been submitted successfully. Our team will review it carefully and contact you soon.
          </p>
          <p className="text-foreground/70 mb-8">
            Limited seats available. We accept only the committed.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 border-2 border-gold text-gold font-bold tracking-wider hover:bg-gold hover:text-black transition-all"
          >
            SUBMIT ANOTHER APPLICATION
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-16 bg-black">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/temple-stone-texture.dim_2048x2048.png)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-6 text-gold uppercase">
            Apply for Membership
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            This is your first step. Answer honestly. Show commitment. Limited seats available.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit} className="border border-gold/30 bg-black/60 backdrop-blur-sm p-8 md:p-12">
            {submitError && (
              <div className="mb-6 p-4 border border-red-500/50 bg-red-500/10 text-red-400">
                <p className="font-semibold">Submission Failed</p>
                <p className="text-sm mt-1">{submitError}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold tracking-wider mb-2 text-gold uppercase">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/80 border border-gold/30 text-foreground focus:border-gold focus:outline-none transition-colors"
                  disabled={isSubmitting}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-bold tracking-wider mb-2 text-gold uppercase">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/80 border border-gold/30 text-foreground focus:border-gold focus:outline-none transition-colors"
                  disabled={isSubmitting}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-bold tracking-wider mb-2 text-gold uppercase">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/80 border border-gold/30 text-foreground focus:border-gold focus:outline-none transition-colors"
                disabled={isSubmitting}
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="age" className="block text-sm font-bold tracking-wider mb-2 text-gold uppercase">
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/80 border border-gold/30 text-foreground focus:border-gold focus:outline-none transition-colors"
                disabled={isSubmitting}
              />
              {errors.age && <p className="mt-1 text-sm text-red-400">{errors.age}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="fitnessLevel" className="block text-sm font-bold tracking-wider mb-2 text-gold uppercase">
                Current Fitness Level *
              </label>
              <select
                id="fitnessLevel"
                name="fitnessLevel"
                value={formData.fitnessLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/80 border border-gold/30 text-foreground focus:border-gold focus:outline-none transition-colors"
                disabled={isSubmitting}
              >
                <option value="">Select your fitness level</option>
                <option value="beginner">Beginner - New to structured training</option>
                <option value="intermediate">Intermediate - 1-3 years of training</option>
                <option value="advanced">Advanced - 3+ years of consistent training</option>
                <option value="elite">Elite - Competitive or professional level</option>
              </select>
              {errors.fitnessLevel && <p className="mt-1 text-sm text-red-400">{errors.fitnessLevel}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="incomeGoal" className="block text-sm font-bold tracking-wider mb-2 text-gold uppercase">
                Income Goal *
              </label>
              <input
                type="text"
                id="incomeGoal"
                name="incomeGoal"
                value={formData.incomeGoal}
                onChange={handleChange}
                placeholder="e.g., $100K/year, $1M net worth, Financial freedom"
                className="w-full px-4 py-3 bg-black/80 border border-gold/30 text-foreground focus:border-gold focus:outline-none transition-colors"
                disabled={isSubmitting}
              />
              {errors.incomeGoal && <p className="mt-1 text-sm text-red-400">{errors.incomeGoal}</p>}
            </div>

            <div className="mb-8">
              <label htmlFor="motivation" className="block text-sm font-bold tracking-wider mb-2 text-gold uppercase">
                Why do you want to join RICHUAL? *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your commitment to transformation..."
                className="w-full px-4 py-3 bg-black/80 border border-gold/30 text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                disabled={isSubmitting}
              />
              {errors.motivation && <p className="mt-1 text-sm text-red-400">{errors.motivation}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gold text-black font-bold text-lg tracking-wider hover:bg-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  SUBMITTING...
                </>
              ) : (
                'SUBMIT APPLICATION'
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
