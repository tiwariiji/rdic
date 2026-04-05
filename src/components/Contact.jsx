// components/Contact.jsx
// Contact form using EmailJS (structured like Nodemailer) + map + info cards

import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { sendEnquiry } from '../utils/emailService'

const INFO = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['Lothinagar Khimsapur,', 'Farrukhabad, Uttar Pradesh'],
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    lines: ['Chairman: 8191948793', 'Manager: 9810403287'],
    color: 'from-gold-500 to-gold-700',
    bg: 'bg-amber-50',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['rdic.edu@gmail.com'],
    color: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-50',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Sat: 8:00 AM – 4:00 PM', 'Sunday: Closed'],
    color: 'from-violet-500 to-violet-700',
    bg: 'bg-violet-50',
  },
]

const INITIAL = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm]       = useState(INITIAL)
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const [errors, setErrors]   = useState({})

  // ── Validation ──────────────────────────────────────────────
  const validate = () => {
    const e = {}
    if (!form.name.trim())                        e.name    = 'Name is required'
    if (!form.email.trim())                       e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email))   e.email   = 'Enter a valid email'
    if (!form.phone.trim())                       e.phone   = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone))   e.phone   = 'Enter a valid 10-digit mobile number'
    if (!form.message.trim())                     e.message = 'Message is required'
    return e
  }

  // ── Submit ───────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setErrors({})
    setStatus('sending')

    try {
      // sendEnquiry mirrors a Nodemailer transporter.sendMail() call
      // See utils/emailService.js for the full Nodemailer analogy comments
      await sendEnquiry(form)
      setStatus('success')
      setForm(INITIAL)
    } catch (err) {
      console.error('Email send error:', err)
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="section-title gold-underline mx-auto w-fit mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-6">
            Have questions about admissions or our programs? We're happy to help.
            Fill out the form and we'll respond within 24 hours.
          </p>
        </div>

        {/* Info cards */}
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {INFO.map(({ icon: Icon, title, lines, color, bg }) => (
            <div key={title} className={`card p-6 ${bg} border border-transparent`}>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="font-bold text-navy-900 text-sm mb-2">{title}</p>
              {lines.map((l) => (
                <p key={l} className="text-gray-500 text-sm leading-snug">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* ── Form ──────────────────────────────────── */}
          <div className="reveal lg:col-span-3 bg-white rounded-3xl shadow-xl shadow-navy-900/10 p-8 border border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">
              Send Us a Message
            </h3>

            {/* Success banner */}
            {status === 'success' && (
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-5 py-4 mb-6">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Message Sent Successfully!</p>
                  <p className="text-xs mt-0.5">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Error banner */}
            {status === 'error' && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 mb-6">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Failed to send message.</p>
                  <p className="text-xs mt-0.5">Please try calling us directly or email rdic.edu@gmail.com</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-gold-400 ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-gold-400'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-gold-400 ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-gold-400'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-gold-400 ${
                    errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-gold-400'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div className="mb-7">
                <label className="block text-sm font-semibold text-navy-900 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your child's class, admission query, or any questions..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-gold-400 resize-none ${
                    errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-gold-400'
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── Map embed ──────────────────────────────── */}
          <div className="reveal lg:col-span-2 flex flex-col gap-5">
            <div className="rounded-3xl overflow-hidden shadow-xl flex-1 min-h-[300px] border border-gray-100">
              <iframe
                title="RDIC Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228782.36893788266!2d79.7285!3d27.3974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f7a1d7a2e4fa7%3A0x1234567890abcdef!2sFarrukhabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick contact card */}
            <div className="bg-gradient-to-br from-navy-950 to-navy-800 rounded-3xl p-6 text-white">
              <p className="font-serif text-lg font-bold mb-4">Quick Contact</p>
              <div className="space-y-3">
                {[
                  { label: 'Chairman', val: '8191948793' },
                  { label: 'Manager',  val: '9810403287' },
                  { label: 'Email',    val: 'rdic.edu@gmail.com' },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-400">{label}</span>
                    <span className="text-gold-400 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
