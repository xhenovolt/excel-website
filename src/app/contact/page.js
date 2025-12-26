'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react';
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

  return (
    <>
      <Navigation />

      {/* Hero Section - Minimal and Direct */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 px-4 md:px-8 bg-white dark:bg-neutral-900"
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-500 mb-6 tracking-wide uppercase"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-neutral-900 dark:text-white mb-6"
          >
            {contact?.hero?.title || 'Contact Us'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            {contact?.hero?.subtitle || ''}
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content - Trust First */}
      <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            {/* Response Expectation Banner */}
            {contact?.directContact?.responseExpectation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg"
              >
                <p className="text-blue-900 dark:text-blue-100 text-base md:text-lg font-light">
                  <span className="font-semibold">Response Expectation:</span> {contact.directContact.responseExpectation}
                </p>
              </motion.div>
            )}

            {/* Direct Contact Information - Visible First */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-white mb-2">
                  Contact Information
                </h2>
                <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500"></div>
              </div>

              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Phone */}
                {contact?.directContact?.phone && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-6 md:p-8 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                          {contact.directContact.phone.label}
                        </h3>
                        <a
                          href={`tel:${contact.directContact.phone.primary}`}
                          className="text-primary-600 dark:text-primary-400 font-semibold hover:underline text-base block mb-2"
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
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Email */}
                {contact?.directContact?.email && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 md:p-8 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                          {contact.directContact.email.label}
                        </h3>
                        <a
                          href={`mailto:${contact.directContact.email.address}`}
                          className="text-primary-600 dark:text-primary-400 font-semibold hover:underline break-all"
                        >
                          {contact.directContact.email.address}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* WhatsApp */}
                {contact?.directContact?.whatsapp && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-6 md:p-8 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl flex-shrink-0 mt-1">💬</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                          {contact.directContact.whatsapp.label}
                        </h3>
                        <a
                          href={`https://wa.me/${contact.directContact.whatsapp.number.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 font-semibold hover:underline flex items-center gap-1"
                        >
                          {contact.directContact.whatsapp.number}
                          <ChevronRight size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </section>

            {/* Location & Hours */}
            <div className="grid gap-8 md:gap-12 md:grid-cols-2">
              {/* Location */}
              {contact?.location && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-light text-neutral-900 dark:text-white mb-4">
                        {contact.location.title}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                            {contact.location.address}
                          </p>
                          <p className="text-neutral-600 dark:text-neutral-400">
                            {contact.location.region}
                          </p>
                        </div>
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {contact.location.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}

              {/* Hours */}
              {contact?.hours && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-neutral-900 dark:text-white mb-4">
                        {contact.hours.title}
                      </h3>
                      <div className="space-y-2">
                        {contact.hours.weekdays && (
                          <div className="flex justify-between items-center pb-3 border-b border-neutral-200 dark:border-neutral-700">
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                              {contact.hours.weekdays.day}
                            </span>
                            <span className="font-semibold text-neutral-900 dark:text-white">
                              {contact.hours.weekdays.time}
                            </span>
                          </div>
                        )}
                        {contact.hours.saturday && (
                          <div className="flex justify-between items-center pb-3 border-b border-neutral-200 dark:border-neutral-700">
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                              {contact.hours.saturday.day}
                            </span>
                            <span className="font-semibold text-neutral-900 dark:text-white">
                              {contact.hours.saturday.time}
                            </span>
                          </div>
                        )}
                        {contact.hours.sunday && (
                          <div className="flex justify-between items-center">
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                              {contact.hours.sunday.day}
                            </span>
                            <span className="font-semibold text-neutral-900 dark:text-white">
                              {contact.hours.sunday.time}
                            </span>
                          </div>
                        )}
                      </div>
                      {contact.hours.note && (
                        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-4">
                          {contact.hours.note}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.section>
              )}
            </div>

            {/* Departments Section */}
            {contact?.departments && (
              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-white mb-2">
                    {contact.departments.title}
                  </h2>
                  <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500 mb-4"></div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {contact.departments.introduction}
                  </p>
                </div>

                <div className="grid gap-6 md:gap-8">
                  {contact.departments.sections?.map((dept, index) => (
                    <motion.div
                      key={dept.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="p-6 md:p-8 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                        {dept.title}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 leading-relaxed">
                        {dept.description}
                      </p>
                      <div className="space-y-2 flex flex-col">
                        {dept.phone && (
                          <a
                            href={`tel:${dept.phone}`}
                            className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-2 text-sm"
                          >
                            <Phone size={16} />
                            {dept.phone}
                          </a>
                        )}
                        {dept.email && (
                          <a
                            href={`mailto:${dept.email}`}
                            className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-2 text-sm"
                          >
                            <Mail size={16} />
                            {dept.email}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Contact Form - Secondary */}
            {contact?.form && (
              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-white mb-2">
                    {contact.form.title}
                  </h2>
                  <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500 mb-4"></div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {contact.form.description}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-2xl"
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {contact.form.fields?.map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                          {field.label}
                          {field.required && <span className="text-red-600 ml-1">*</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleInputChange}
                            required={field.required}
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 transition-colors"
                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleInputChange}
                            required={field.required}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-500 transition-colors"
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
                        className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 rounded-lg p-4 text-sm border border-emerald-200 dark:border-emerald-800"
                      >
                        ✓ Thank you! Your message has been sent. We will respond during school hours.
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 rounded-lg p-4 text-sm border border-red-200 dark:border-red-800"
                      >
                        ✗ An error occurred. Please try again or call us directly.
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              </section>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingActionButton />
    </>
  );
}
