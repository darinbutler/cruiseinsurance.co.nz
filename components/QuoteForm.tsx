'use client';

import { useState } from 'react';
import { Lock, Shield, Zap } from 'lucide-react';

interface QuoteFormProps {
  variant?: 'compact' | 'full';
}

const FORMSUBMIT_URL = 'https://shiny-bush-41cd.darinbutler.workers.dev';
const THANK_YOU_URL  = 'https://cruiseinsurance.co.nz/thank-you/';

export default function QuoteForm({ variant = 'compact' }: QuoteFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = () => setSubmitting(true);

  const cruiseTypes = [
    ['domestic',       'NZ Domestic Cruise'],
    ['south-pacific',  'South Pacific'],
    ['australia',      'Australian Cruise'],
    ['asia',           'Asian Cruise'],
    ['europe',         'European Cruise'],
    ['worldwide',      'Worldwide / International'],
    ['not-sure',       'Not Sure Yet'],
  ];

  const travellers = [
    ['solo',      'Solo Traveller'],
    ['couple',    'Couple'],
    ['family',    'Family (with children)'],
    ['seniors',   'Seniors (60+)'],
    ['group',     'Group (3+ adults)'],
  ];

  /* ─── Hidden FormSubmit.co control fields ─── */
  const hiddenFields = (
    <>
      <input type="hidden" name="_next"         value={THANK_YOU_URL} />
      <input type="hidden" name="_subject"      value="New Cruise Insurance Quote Request — CruiseInsurance.co.nz" />
      <input type="hidden" name="_autoresponse" value="Thanks for your enquiry! One of our NZ cruise insurance specialists will be in touch within 24 hours. — CruiseInsurance.co.nz" />
      <input type="text"   name="_honey"        style={{ display: 'none' }} />
    </>
  );

  /* ─── Full variant ─── */
  if (variant === 'full') {
    return (
      <section className="bg-gradient-to-r from-sky-500 to-sky-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Cruise with Confidence?
              </h2>
              <p className="text-lg text-sky-50 mb-6">
                Get 2–3 personalised quotes from NZ&apos;s top cruise insurance providers within 24 hours.
              </p>
              <ul className="space-y-3 text-sky-50">
                {['Free, no-obligation quotes', 'Compare multiple providers', '24-hour response', 'Specialist cruise advisers'].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <form action={FORMSUBMIT_URL} method="POST" onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl">
              {hiddenFields}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Full Name</label>
                  <input type="text" name="name" required placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                  <input type="email" name="email" required placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Phone</label>
                  <input type="tel" name="phone" required placeholder="09 XXX XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Cruise Destination</label>
                  <select name="cruise_destination" required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                    <option value="">Select destination...</option>
                    {cruiseTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Who&apos;s Travelling</label>
                  <select name="travellers" required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                    <option value="">Select travellers...</option>
                    {travellers.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={submitting}
                  className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-400 text-white font-semibold py-3 rounded-lg transition-colors">
                  {submitting ? 'Submitting…' : 'Get My Free Quote →'}
                </button>
                <div className="border-t pt-4 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><Lock size={13} /> 256-bit SSL</span>
                  <span className="flex items-center gap-1.5"><Shield size={13} /> No Spam</span>
                  <span className="flex items-center gap-1.5"><Zap size={13} /> 24hr Response</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  /* ─── Compact variant ─── */
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-1">Get Your Free Cruise Quote</h3>
      <p className="text-gray-400 text-sm mb-5">Compare NZ cruise insurers in 2 minutes</p>

      <form action={FORMSUBMIT_URL} method="POST" onSubmit={handleSubmit} className="space-y-3">
        {hiddenFields}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
          <input type="text" name="name" required placeholder="Your name"
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Email</label>
          <input type="email" name="email" required placeholder="your@email.com"
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Phone</label>
          <input type="tel" name="phone" required placeholder="09 XXX XXXX"
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Cruise Destination</label>
          <select name="cruise_destination" required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option value="">Select destination...</option>
            {cruiseTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Who&apos;s Travelling</label>
          <select name="travellers" required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option value="">Select travellers...</option>
            {travellers.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        <button type="submit" disabled={submitting}
          className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-400 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">
          {submitting ? 'Submitting…' : 'Get My Free Quote →'}
        </button>
        <div className="border-t border-slate-700 pt-3 flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1"><Lock size={11} /> 256-bit SSL</span>
          <span className="flex items-center gap-1"><Shield size={11} /> No Spam</span>
          <span className="flex items-center gap-1"><Zap size={11} /> Fast Response</span>
        </div>
      </form>
    </div>
  );
}
