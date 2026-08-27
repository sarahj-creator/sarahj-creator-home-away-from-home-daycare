import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Loader2,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Heart,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { heroImages } from '@/config/site';
import { siteConfig } from '@/config/site';
import { enquiryTypes, contactMethods } from '@/config/content';
import { supabase, type EnquiryInsert } from '@/lib/supabase';

type FormState = {
  parent_name: string;
  email: string;
  phone: string;
  preferred_contact_method: string;
  child_name: string;
  child_age: string;
  preferred_start_date: string;
  enquiry_type: string[];
  message: string;
  consent: boolean;
};

const initialForm: FormState = {
  parent_name: '',
  email: '',
  phone: '',
  preferred_contact_method: 'email',
  child_name: '',
  child_age: '',
  preferred_start_date: '',
  enquiry_type: [],
  message: '',
  consent: false,
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const steps = ['About You', 'About Your Child', 'What Are You Interested In?', 'Your Message'];

export default function Enquire() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');

  const updateField = (field: keyof FormState, value: string | boolean | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const toggleEnquiryType = (value: string) => {
    setForm((prev) => ({
      ...prev,
      enquiry_type: prev.enquiry_type.includes(value)
        ? prev.enquiry_type.filter((t) => t !== value)
        : [...prev.enquiry_type, value],
    }));
    setErrors((prev) => {
      if (!prev.enquiry_type) return prev;
      const next = { ...prev };
      delete next.enquiry_type;
      return next;
    });
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 0) {
      if (!form.parent_name.trim()) {
        newErrors.parent_name = 'Please enter your name.';
      }
      if (!form.email.trim()) {
        newErrors.email = 'Please enter your email address.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!form.preferred_contact_method) {
        newErrors.preferred_contact_method = 'Please select a preferred contact method.';
      }
    }

    if (currentStep === 2) {
      if (form.enquiry_type.length === 0) {
        newErrors.enquiry_type = 'Please select at least one option.';
      }
    }

    if (currentStep === 3) {
      if (!form.consent) {
        newErrors.consent = 'Please agree to be contacted to submit your enquiry.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setStatus('loading');
    const insert: EnquiryInsert = {
      parent_name: form.parent_name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      preferred_contact_method: form.preferred_contact_method,
      child_name: form.child_name.trim() || null,
      child_age: form.child_age.trim() || null,
      preferred_start_date: form.preferred_start_date || null,
      enquiry_type: form.enquiry_type.join(','),
      message: form.message.trim() || null,
    };

    const { error } = await supabase.from('enquiries').insert(insert);

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  const waNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');

  if (status === 'success') {
    return (
      <>
        <PageHero
          eyebrow="Enquire"
          title="Come and see what feels like home."
          subtitle="Choosing childcare is a big decision. We'd love to meet you, learn about your family, and show you around."
          image={heroImages.enquireHero}
          imageAlt="Children engaging in play and learning activities"
        />
        <section className="py-24 lg:py-32">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-xl text-center">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-sage-100">
                  <Check size={40} className="text-sage-600" strokeWidth={2} />
                </div>
                <h2 className="text-3xl font-serif font-medium text-charcoal-800 sm:text-4xl">
                  Thank you — we've received your enquiry.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-charcoal-700/70">
                  We'll be in touch as soon as possible. In the meantime, feel
                  free to reach out on WhatsApp if you have any urgent
                  questions.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button to="/" variant="outline" size="lg">
                    Back to Home
                  </Button>
                  {waNumber && (
                    <Button
                      href={`https://wa.me/${waNumber}`}
                      size="lg"
                      variant="secondary"
                    >
                      <MessageCircle size={18} />
                      Message on WhatsApp
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Enquire / Book a Visit"
        title="Come and see what feels like home."
        subtitle="Choosing childcare is a big decision. We'd love to meet you, learn about your family, and show you around Home Away from Home."
        image={heroImages.enquireHero}
        imageAlt="Children engaging in play and learning activities"
      />

      <section className="py-24 lg:py-32">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            {/* Contact info sidebar */}
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <h2 className="text-2xl font-serif font-medium text-charcoal-800">
                  Get in Touch
                </h2>
                <p className="mt-3 text-base leading-relaxed text-charcoal-700/70">
                  Prefer to reach out directly? We'd love to hear from you.
                </p>

                <ul className="mt-8 space-y-5">
                  <li>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-600 transition-colors group-hover:bg-sage-600 group-hover:text-cream-50">
                        <Phone size={20} strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold uppercase tracking-wider text-charcoal-700/50">
                          Phone
                        </span>
                        <span className="text-base text-charcoal-800">
                          {siteConfig.contact.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-clay-100 text-clay-600 transition-colors group-hover:bg-clay-500 group-hover:text-cream-50">
                        <Mail size={20} strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold uppercase tracking-wider text-charcoal-700/50">
                          Email
                        </span>
                        <span className="text-base text-charcoal-800">
                          {siteConfig.contact.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sunshine-100 text-sunshine-600">
                      <MapPin size={20} strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-wider text-charcoal-700/50">
                        Location
                      </span>
                      <span className="text-base text-charcoal-800">
                        {siteConfig.location.address}
                        <br />
                        {siteConfig.location.region}, {siteConfig.location.country}
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-600">
                      <Clock size={20} strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-wider text-charcoal-700/50">
                        Hours
                      </span>
                      <ul className="mt-1 space-y-0.5">
                        {siteConfig.hours.map((h) => (
                          <li key={h.day} className="flex justify-between gap-4 text-base text-charcoal-800">
                            <span>{h.day}</span>
                            <span className="text-charcoal-700/60">{h.time}</span>
                          </li>
                        ))}
                      </ul>
                    </span>
                  </li>
                </ul>

                {/* Map */}
                <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-cream-200">
                  <iframe
                    title="Map of Home Away from Home Daycare location"
                    src={siteConfig.location.mapEmbedUrl}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>

            {/* Multi-step form */}
            <Reveal delay={100}>
              <div className="rounded-3xl bg-white/80 p-6 ring-1 ring-cream-200 sm:p-10">
                {/* Step indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {steps.map((label, i) => (
                      <div key={label} className="flex flex-1 items-center">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                            i <= step
                              ? 'bg-sage-600 text-cream-50'
                              : 'bg-cream-200 text-charcoal-700/50'
                          }`}
                        >
                          {i < step ? <Check size={16} /> : i + 1}
                        </div>
                        {i < steps.length - 1 && (
                          <div
                            className={`mx-1 h-0.5 flex-1 transition-colors sm:mx-2 ${
                              i < step ? 'bg-sage-600' : 'bg-cream-200'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-medium text-sage-600">
                    Step {step + 1} of {steps.length}: {steps[step]}
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* STEP 1 — About You */}
                  {step === 0 && (
                    <div className="space-y-5">
                      <h3 className="text-xl font-serif font-medium text-charcoal-800">
                        About You
                      </h3>
                      <Field
                        label="Parent / Guardian Name"
                        required
                        error={errors.parent_name}
                      >
                        <input
                          type="text"
                          value={form.parent_name}
                          onChange={(e) => updateField('parent_name', e.target.value)}
                          className={inputClass(errors.parent_name)}
                          placeholder="Your full name"
                          aria-invalid={!!errors.parent_name}
                        />
                      </Field>
                      <Field
                        label="Email Address"
                        required
                        error={errors.email}
                      >
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className={inputClass(errors.email)}
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                        />
                      </Field>
                      <Field label="Phone Number">
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className={inputClass()}
                          placeholder="+1 246 ..."
                        />
                      </Field>
                      <Field
                        label="Preferred Contact Method"
                        required
                        error={errors.preferred_contact_method}
                      >
                        <div className="flex flex-wrap gap-2.5">
                          {contactMethods.map((method) => (
                            <button
                              key={method.value}
                              type="button"
                              onClick={() => updateField('preferred_contact_method', method.value)}
                              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                                form.preferred_contact_method === method.value
                                  ? 'bg-sage-600 text-cream-50'
                                  : 'bg-cream-100 text-charcoal-700 hover:bg-sage-50'
                              }`}
                            >
                              {method.label}
                            </button>
                          ))}
                        </div>
                      </Field>
                    </div>
                  )}

                  {/* STEP 2 — About Your Child */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <h3 className="text-xl font-serif font-medium text-charcoal-800">
                        About Your Child
                      </h3>
                      <Field label="Child's First Name">
                        <input
                          type="text"
                          value={form.child_name}
                          onChange={(e) => updateField('child_name', e.target.value)}
                          className={inputClass()}
                          placeholder="Your child's first name"
                        />
                      </Field>
                      <Field label="Child's Age">
                        <input
                          type="text"
                          value={form.child_age}
                          onChange={(e) => updateField('child_age', e.target.value)}
                          className={inputClass()}
                          placeholder="e.g. 2 years, 8 months"
                        />
                      </Field>
                      <Field label="Preferred Start Date">
                        <input
                          type="date"
                          value={form.preferred_start_date}
                          onChange={(e) => updateField('preferred_start_date', e.target.value)}
                          className={inputClass()}
                        />
                      </Field>
                    </div>
                  )}

                  {/* STEP 3 — What Are You Interested In? */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <h3 className="text-xl font-serif font-medium text-charcoal-800">
                        What Are You Interested In?
                      </h3>
                      <p className="text-sm text-charcoal-700/60">
                        Select all that apply.
                      </p>
                      <div className="space-y-3">
                        {enquiryTypes.map((type) => (
                          <label
                            key={type.value}
                            className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                              form.enquiry_type.includes(type.value)
                                ? 'border-sage-600 bg-sage-50'
                                : 'border-cream-200 bg-white hover:border-sage-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={form.enquiry_type.includes(type.value)}
                              onChange={() => toggleEnquiryType(type.value)}
                              className="h-5 w-5 rounded accent-sage-600"
                            />
                            <span className="text-base font-medium text-charcoal-800">
                              {type.label}
                            </span>
                          </label>
                        ))}
                      </div>
                      {errors.enquiry_type && (
                        <p className="text-sm text-clay-600" role="alert">
                          {errors.enquiry_type}
                        </p>
                      )}
                    </div>
                  )}

                  {/* STEP 4 — Your Message */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <h3 className="text-xl font-serif font-medium text-charcoal-800">
                        Your Message
                      </h3>
                      <Field label="Tell us anything you'd like us to know.">
                        <textarea
                          value={form.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          rows={5}
                          className={inputClass()}
                          placeholder="Share any questions, specific needs, or anything else you'd like us to know."
                        />
                      </Field>
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => updateField('consent', e.target.checked)}
                          className="mt-1 h-5 w-5 rounded accent-sage-600"
                          aria-invalid={!!errors.consent}
                        />
                        <span className="text-sm text-charcoal-700/80">
                          I agree to be contacted regarding my enquiry.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-sm text-clay-600" role="alert">
                          {errors.consent}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Error state */}
                  {status === 'error' && (
                    <div className="mt-6 rounded-xl bg-clay-100 p-4 text-sm text-clay-700" role="alert">
                      Something went wrong sending your enquiry. Please try
                      again, or contact us directly by phone or WhatsApp.
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="mt-8 flex items-center justify-between gap-4">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-2 text-sm font-medium text-charcoal-700 transition-colors hover:text-sage-600"
                      >
                        <ArrowLeft size={18} />
                        Back
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-2 rounded-full bg-sage-600 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-sage-700"
                      >
                        Continue
                        <ArrowRight size={18} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="flex items-center gap-2 rounded-full bg-sage-600 px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-sage-700 disabled:opacity-60"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Heart size={18} />
                            Send Enquiry
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-charcoal-800">
        {label}
        {required && <span className="text-clay-500"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-clay-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(error?: string): string {
  return `w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-charcoal-800 placeholder:text-charcoal-700/40 transition-colors focus:outline-none focus:ring-0 ${
    error
      ? 'border-clay-400 focus:border-clay-500'
      : 'border-cream-200 focus:border-sage-500'
  }`;
}
