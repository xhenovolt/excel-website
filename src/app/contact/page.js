'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/contact');
        if (!response.ok) throw new Error('Failed to fetch');
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error('Error fetching contact data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      // In production, this would send to your backend
      // For now, we'll simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Loading...</p>
        </div>
      </div>
    );
  }

  const contact = data?.contact || data;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-24 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {contact?.hero?.title || 'Get In Touch'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            {contact?.hero?.subtitle || ''}
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="bg-white dark:bg-neutral-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {/* Contact Information Grid */}
            <motion.div variants={item} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Phone */}
              {contact?.directContact?.phone && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 border border-primary-200 dark:border-primary-700/50 hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                    {contact.directContact.phone.label}
                  </h3>
                  <a
                    href={`tel:${contact.directContact.phone.primary}`}
                    className="text-primary-600 dark:text-primary-400 font-semibold hover:underline block mb-2"
                  >
                    {contact.directContact.phone.primary}
                  </a>
                  {contact.directContact.phone.secondary && (
                    <div className="space-y-1">
                      {contact.directContact.phone.secondary.map((num, idx) => (
                        <a
                          key={idx}
                          href={`tel:${num}`}
                          className="text-neutral-600 dark:text-neutral-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 block"
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Email */}
              {contact?.directContact?.email && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 border border-primary-200 dark:border-primary-700/50 hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="w-8 h-8 text-primary-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                    {contact.directContact.email.label}
                  </h3>
                  <a
                    href={`mailto:${contact.directContact.email.address}`}
                    className="text-primary-600 dark:text-emerald-400 font-semibold hover:underline"
                  >
                    {contact.directContact.email.address}
                  </a>
                </motion.div>
              )}

              {/* WhatsApp */}
              {contact?.directContact?.whatsapp && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-accent-50 to-accent-100/50 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl p-6 border border-accent-200 dark:border-accent-700/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 text-accent-600 dark:text-accent-400 mb-4 group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                    {contact.directContact.whatsapp.label}
                  </h3>
                  <a
                    href={`https://wa.me/${contact.directContact.whatsapp.number.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 dark:text-accent-400 font-semibold hover:underline"
                  >
                    {contact.directContact.whatsapp.number}
                  </a>
                </motion.div>
              )}
            </motion.div>

            {/* Location & Hours */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Location */}
              {contact?.location && (
                <motion.div
                  variants={item}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                        {contact.location.title}
                      </h3>
                      <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                        {contact.location.address}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                        {contact.location.region}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-3">
                        {contact.location.description}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2 italic">
                        {contact.location.directions}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Hours */}
              {contact?.hours && (
                <motion.div
                  variants={item}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                    <div className="w-full">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                        {contact.hours.title}
                      </h3>
                      <div className="space-y-2">
                        {contact.hours.weekdays && (
                          <div className="flex justify-between items-center py-2 border-b border-neutral-200 dark:border-neutral-700">
                            <span className="text-neutral-700 dark:text-neutral-300">
                              {contact.hours.weekdays.day}
                            </span>
                            <span className="font-semibold text-neutral-900 dark:text-white">
                              {contact.hours.weekdays.time}
                            </span>
                          </div>
                        )}
                        {contact.hours.saturday && (
                          <div className="flex justify-between items-center py-2 border-b border-neutral-200 dark:border-neutral-700">
                            <span className="text-neutral-700 dark:text-neutral-300">
                              {contact.hours.saturday.day}
                            </span>
                            <span className="font-semibold text-neutral-900 dark:text-white">
                              {contact.hours.saturday.time}
                            </span>
                          </div>
                        )}
                        {contact.hours.sunday && (
                          <div className="flex justify-between items-center py-2">
                            <span className="text-neutral-700 dark:text-neutral-300">
                              {contact.hours.sunday.day}
                            </span>
                            <span className="font-semibold text-neutral-900 dark:text-white">
                              {contact.hours.sunday.time}
                            </span>
                          </div>
                        )}
                      </div>
                      {contact.hours.note && (
                        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-3 italic">
                          {contact.hours.note}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Contact Form */}
            {contact?.form && (
              <motion.div
                variants={item}
                className="max-w-2xl mx-auto w-full"
              >
                <div className="bg-gradient-to-br from-neutral-50 to-slate-100 dark:from-neutral-800 dark:to-neutral-800/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {contact.form.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {contact.form.description}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {contact.form.fields?.map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                          {field.label}
                          {field.required && <span className="text-red-600">*</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            required={field.required}
                            rows="5"
                            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500"
                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            required={field.required}
                            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500"
                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                          />
                        )}
                      </div>
                    ))}

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-emerald-300 rounded-lg p-3 text-sm"
                      >
                        ✓ Thank you! Your message has been sent successfully.
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg p-3 text-sm"
                      >
                        ✗ An error occurred. Please try again later.
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-600 hover:from-primary-700 hover:to-primary-700 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {contact.form.submit || 'Send Message'}
                        </>
                      )}
                    </motion.button>

                    {contact.form.note && (
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 text-center">
                        {contact.form.note}
                      </p>
                    )}
                  </form>
                </div>
              </motion.div>
            )}

            {/* FAQ Section */}
            {contact?.faq && (
              <motion.div variants={item} className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                    {contact.faq.title}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-600"></div>
                </div>

                <div className="space-y-4">
                  {contact.faq.questions?.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700"
                    >
                      <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </>
  );
}
