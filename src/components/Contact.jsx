import { MapPin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              Let's Talk About<br />Your Next Project
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
              Ready to explore what's possible? Whether you're planning a renewable energy
              system, a new facility, or a major infrastructure upgrade in South Carolina,
              North Carolina, Georgia, or Florida — our team is ready to help you navigate
              every step with expertise and confidence.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Address</div>
                  <address className="text-gray-400 text-sm leading-relaxed not-italic">
                    11 E Wall Street<br />
                    Mount Pleasant, SC 29464
                  </address>
                </div>
              </div>

              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <a href="mailto:info@branham-group.com" className="text-gray-400 text-sm hover:text-gold transition-colors">
                    info@branham-group.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              {[
                { label: 'in', href: 'https://www.linkedin.com/company/branham-group-inc/', title: 'LinkedIn' },
                { label: 'f', href: 'https://www.facebook.com/people/Branham-Group-Inc/100077987935652/?mibextid=LQQJ4d', title: 'Facebook' },
                { label: 'ig', href: 'https://www.instagram.com/branham.group/', title: 'Instagram' },
              ].map(({ label, href, title }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  title={title}
                  className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all duration-200 text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white/5 border border-white/10 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Mail size={28} className="text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. A member of our team will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="(843) 555-0100"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your project — scope, timeline, location, and any specific requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white py-4 font-semibold uppercase tracking-wider text-sm hover:bg-gold-dark transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
