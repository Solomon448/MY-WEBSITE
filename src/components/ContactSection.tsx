import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, Mail, Sparkles, AlertCircle, PhoneCall, ArrowRight, Shield, User, Globe, MessageSquare } from 'lucide-react';

interface DirectBookingSectionProps {
  preselectedService?: string;
}

const AVAILABLE_SERVICES = [
  {
    id: 'shopify',
    name: 'Shopify Website Design',
    price: 'From $1,800',
    turnaround: '14 Days',
    tag: 'MOST POPULAR',
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce Web App',
    price: 'From $2,200',
    turnaround: '18 Days',
  },
  {
    id: 'redesign',
    name: 'Website Redesign & CRO',
    price: 'From $1,200',
    turnaround: '10 Days',
  },
  {
    id: 'whatsapp-bot',
    name: 'WhatsApp AI Chatbot Integration',
    price: 'From $950',
    turnaround: '5 Days',
    tag: 'NEW & HIGH CONVERSION',
  },
  {
    id: 'retainer',
    name: 'Monthly Maintenance & Support',
    price: 'From $450/mo',
    turnaround: 'Ongoing',
  },
];

// Helper to generate next 7 available dates
const getUpcomingDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // Exclude Sundays
    if (d.getDay() !== 0) {
      dates.push({
        fullDate: d.toISOString().split('T')[0],
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        monthDay: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      });
    }
    if (dates.length >= 6) break;
  }
  return dates;
};

const TIME_SLOTS = [
  '10:00 AM GMT',
  '02:00 PM GMT',
  '05:00 PM GMT',
  '08:00 PM GMT',
];

export const ContactSection: React.FC<DirectBookingSectionProps> = ({ preselectedService }) => {
  const upcomingDates = getUpcomingDates();

  const [selectedService, setSelectedService] = useState(
    preselectedService || 'Shopify Website Design'
  );
  const [selectedDate, setSelectedDate] = useState(upcomingDates[0]?.fullDate || '');
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [projectGoal, setProjectGoal] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Valid email is required';
    }
    if (!whatsapp.trim()) errs.whatsapp = 'WhatsApp / phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `ELIJDEV-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingId(generatedId);
      setIsSubmitting(false);
      setBookingConfirmed(true);
    }, 1000);
  };

  const selectedDateObj = upcomingDates.find((d) => d.fullDate === selectedDate);
  const dateFormatted = selectedDateObj ? `${selectedDateObj.dayName}, ${selectedDateObj.monthDay}` : selectedDate;

  const whatsappMessage = encodeURIComponent(
    `Hello Solomon! I have booked a session on your website.\n\n` +
    `📌 Booking Ref: ${bookingId}\n` +
    `🛠 Service: ${selectedService}\n` +
    `📅 Date: ${dateFormatted} at ${selectedTime}\n` +
    `👤 Name: ${fullName}\n` +
    `✉️ Email: ${email}\n` +
    `📱 WhatsApp: ${whatsapp}\n` +
    `💼 Brand: ${businessName || 'N/A'}\n\n` +
    `Looking forward to building something great together!`
  );

  const directWhatsAppLink = `https://wa.me/17828592148?text=${whatsappMessage}`;

  return (
    <section id="booking" className="py-24 bg-[#07090b] relative overflow-hidden text-white border-b border-white/10">
      {/* Anchor for contact compatibility */}
      <div id="contact" className="absolute -top-24 left-0"></div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#034A46]/25 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101416] border border-white/10 text-xs font-extrabold tracking-widest text-[#0eb0a4] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            DIRECT ONLINE BOOKING
          </div>

          {/* Heading size 45px */}
          <h2 className="section-heading text-[30px] sm:text-[45px] text-white">
            Book Your Service Directly On The Website.
          </h2>

          {/* Description Montserrat 14px */}
          <p className="section-desc font-montserrat text-[14px]">
            No back-and-forth emails. Select your desired service, pick a date and time slot that fits your schedule, and lock in your direct consultation or project launch session with Solomon Elijah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Summary & Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0e1214] border border-white/10 space-y-6 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                <Shield className="w-6 h-6 text-[#0eb0a4]" />
                Why Book Directly?
              </h3>

              <div className="space-y-4 font-montserrat text-[14px] text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#034A46]/50 border border-[#0eb0a4] text-[#0eb0a4] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Priority Calendar Reservation</strong>
                    Locks your spot directly on Solomon’s core project calendar with zero delays.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#034A46]/50 border border-[#0eb0a4] text-[#0eb0a4] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Instant WhatsApp Confirmation</strong>
                    Receive instant booking reference and direct WhatsApp line for instant communication.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#034A46]/50 border border-[#0eb0a4] text-[#0eb0a4] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">100% Fixed Quotes & Confidentiality</strong>
                    All discussions are protected by non-disclosure and fixed milestone guarantees.
                  </div>
                </div>
              </div>

              {/* Direct Email / WhatsApp Box */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <p className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                  DIRECT ENQUIRIES & WHATSAPP
                </p>
                <a
                  href="mailto:solomonelijah332@gmail.com"
                  className="flex items-center gap-2.5 font-mono text-sm font-bold text-[#0eb0a4] hover:underline"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>solomonelijah332@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/17828592148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-mono text-sm font-bold text-[#25D366] hover:underline"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>+1 (782) 859-2148 (WhatsApp Direct)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Direct Booking Engine Container */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0e1214] border border-white/10 p-6 sm:p-10 shadow-2xl relative">
              
              {bookingConfirmed ? (
                /* Booking Success Ticket View */
                <div className="py-8 space-y-6 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#034A46]/50 border-2 border-[#0eb0a4] text-[#0eb0a4] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(14,176,164,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold text-[#0eb0a4] uppercase tracking-widest">
                      BOOKING RESERVED SUCCESSFULLY
                    </span>
                    <h3 className="font-display text-3xl font-extrabold text-white mt-1">
                      Ref #{bookingId}
                    </h3>
                  </div>

                  {/* Summary Ticket Card */}
                  <div className="p-6 rounded-2xl bg-[#07090b] border border-white/10 text-left space-y-3 font-montserrat text-[14px]">
                    <div className="flex justify-between pb-2 border-b border-white/10">
                      <span className="text-slate-400">Service:</span>
                      <span className="font-bold text-white">{selectedService}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-white/10">
                      <span className="text-slate-400">Date & Time:</span>
                      <span className="font-bold text-[#0eb0a4]">{dateFormatted} at {selectedTime}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-white/10">
                      <span className="text-slate-400">Client Name:</span>
                      <span className="font-bold text-white">{fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">WhatsApp:</span>
                      <span className="font-bold text-white">{whatsapp}</span>
                    </div>
                  </div>

                  <p className="font-montserrat text-[14px] text-slate-300">
                    Your appointment has been logged! Click below to send your ticket directly to Solomon on WhatsApp for instant confirmation.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <a
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>CONFIRM VIA WHATSAPP NOW</span>
                    </a>

                    <button
                      onClick={() => {
                        setBookingConfirmed(false);
                        setFullName('');
                        setEmail('');
                        setWhatsapp('');
                        setBusinessName('');
                        setProjectGoal('');
                      }}
                      className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#141b1d] border border-white/15 text-slate-300 hover:text-white text-xs font-mono font-bold uppercase transition-all cursor-pointer"
                    >
                      BOOK ANOTHER SESSION
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Multi-step Booking Form */
                <form onSubmit={handleBookNow} className="space-y-8">
                  
                  {/* Step 1: Select Service Option */}
                  <div className="space-y-3">
                    <label className="font-mono text-xs font-extrabold text-[#0eb0a4] uppercase tracking-wider block">
                      STEP 1: CHOOSE SERVICE OPTION
                    </label>

                    <div className="grid grid-cols-1 gap-2.5">
                      {AVAILABLE_SERVICES.map((s) => (
                        <div
                          key={s.id}
                          onClick={() => setSelectedService(s.name)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            selectedService === s.name
                              ? 'bg-[#034A46]/30 border-[#0eb0a4] text-white shadow-md'
                              : 'bg-[#07090b] border-white/10 hover:border-white/30 text-slate-300'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-display font-bold text-sm text-white">
                                {s.name}
                              </span>
                              {s.tag && (
                                <span className="px-2 py-0.5 rounded bg-[#0eb0a4]/20 border border-[#0eb0a4]/40 text-[9px] font-mono font-bold text-[#0eb0a4] uppercase">
                                  {s.tag}
                                </span>
                              )}
                            </div>
                            <p className="font-montserrat text-[12px] text-slate-400 mt-0.5">
                              Est. Turnaround: {s.turnaround}
                            </p>
                          </div>

                          <div className="text-right">
                            <span className="font-mono text-xs font-bold text-[#0eb0a4]">
                              {s.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Choose Preferred Date & Time Slot */}
                  <div className="space-y-3">
                    <label className="font-mono text-xs font-extrabold text-[#0eb0a4] uppercase tracking-wider block">
                      STEP 2: SELECT PREFERRED DATE & TIME SLOT
                    </label>

                    {/* Dates Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {upcomingDates.map((d) => (
                        <button
                          type="button"
                          key={d.fullDate}
                          onClick={() => setSelectedDate(d.fullDate)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedDate === d.fullDate
                              ? 'bg-[#034A46] border-[#0eb0a4] text-white'
                              : 'bg-[#07090b] border-white/10 text-slate-400 hover:border-white/30'
                          }`}
                        >
                          <span className="font-mono text-[10px] font-bold block uppercase">
                            {d.dayName}
                          </span>
                          <span className="font-display font-extrabold text-xs text-white">
                            {d.monthDay}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Time Slots */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                      {TIME_SLOTS.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 px-3 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            selectedTime === t
                              ? 'bg-[#0eb0a4] text-black border-[#0eb0a4]'
                              : 'bg-[#07090b] border-white/10 text-slate-300 hover:border-white/30'
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          <span>{t}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Client Information */}
                  <div className="space-y-4">
                    <label className="font-mono text-xs font-extrabold text-[#0eb0a4] uppercase tracking-wider block">
                      STEP 3: YOUR DETAILS
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 rounded-xl bg-[#07090b] border ${
                            errors.fullName ? 'border-red-500' : 'border-white/15'
                          } text-white font-montserrat text-[14px] focus:outline-none focus:border-[#0eb0a4] transition-colors`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-400 mt-1 font-montserrat">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          BUSINESS EMAIL *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#07090b] border ${
                            errors.email ? 'border-red-500' : 'border-white/15'
                          } text-white font-montserrat text-[14px] focus:outline-none focus:border-[#0eb0a4] transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1 font-montserrat">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* WhatsApp / Phone */}
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          WHATSAPP / PHONE NUMBER *
                        </label>
                        <input
                          type="text"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+1 234 567 8900"
                          className={`w-full px-4 py-3 rounded-xl bg-[#07090b] border ${
                            errors.whatsapp ? 'border-red-500' : 'border-white/15'
                          } text-white font-montserrat text-[14px] focus:outline-none focus:border-[#0eb0a4] transition-colors`}
                        />
                        {errors.whatsapp && (
                          <p className="text-xs text-red-400 mt-1 font-montserrat">{errors.whatsapp}</p>
                        )}
                      </div>

                      {/* Business Name */}
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          BUSINESS / BRAND NAME
                        </label>
                        <input
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="Brand Co."
                          className="w-full px-4 py-3 rounded-xl bg-[#07090b] border border-white/15 text-white font-montserrat text-[14px] focus:outline-none focus:border-[#0eb0a4] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Project Goals / Notes */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        PROJECT OBJECTIVES / NOTES (OPTIONAL)
                      </label>
                      <textarea
                        rows={3}
                        value={projectGoal}
                        onChange={(e) => setProjectGoal(e.target.value)}
                        placeholder="Share any key goals, store inspiration, or specific feature requests..."
                        className="w-full px-4 py-3 rounded-xl bg-[#07090b] border border-white/15 text-white font-montserrat text-[14px] focus:outline-none focus:border-[#0eb0a4] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#034A46] text-white font-extrabold text-xs tracking-wider uppercase border border-[#0eb0a4] shadow-xl hover:bg-[#056a64] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">RESERVING YOUR SLOT...</span>
                    ) : (
                      <>
                        <span>CONFIRM & BOOK SERVICE DIRECTLY</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
