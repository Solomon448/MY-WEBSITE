import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ValueSection } from './components/ValueSection';
import { PricingSection } from './components/PricingSection';
import { ProcessSection } from './components/ProcessSection';
import { ToolsMarquee } from './components/ToolsMarquee';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { AboutModal } from './components/AboutModal';
import { CustomCursor } from './components/CustomCursor';
import { WhatsAppChatbot } from './components/WhatsAppChatbot';

import { Project, Service } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState<boolean>(false);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string>('Shopify Website Design');

  const handleScrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedBookingService(serviceName);
    }
    const el = document.getElementById('booking') || document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090b] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-[#034A46] selection:text-white">
      {/* Custom Interactive Follower Cursor */}
      <CustomCursor />

      {/* Floating WhatsApp AI Chatbot Assistant */}
      <WhatsAppChatbot onOpenBookingWithService={(svc) => handleScrollToBooking(svc)} />

      {/* Sticky Header Navigation */}
      <Navigation onOpenContact={() => handleScrollToBooking()} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1 — Hero Section */}
        <HeroSection
          onStartProject={() => handleScrollToBooking()}
          onViewWork={handleScrollToWork}
        />

        {/* Section 2 — Trust / Quick Stats */}
        <TrustStats />

        {/* Section 3 — About Section */}
        <AboutSection onOpenAboutModal={() => setAboutModalOpen(true)} />

        {/* Section 4 — Services */}
        <ServicesSection onSelectService={(s) => setSelectedService(s)} />

        {/* Section 5 — Featured Projects */}
        <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />

        {/* Section 6 — Results / Value Section */}
        <ValueSection />

        {/* Section 7 — Transparent Pricing Plans (with 3D Cursor Movement) */}
        <PricingSection onSelectPlanBooking={(serviceKey) => handleScrollToBooking(serviceKey)} />

        {/* Section 8 — Design Process */}
        <ProcessSection />

        {/* Section 9 — Tools & Expertise Marquee */}
        <ToolsMarquee />

        {/* Section 10 — Testimonials */}
        <TestimonialsSection />

        {/* Section 11 — Direct Service Booking Engine */}
        <ContactSection preselectedService={preselectedBookingService} />
      </main>

      {/* Section 12 — Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={() => handleScrollToBooking()}
      />

      {/* Interactive Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartProject={() => handleScrollToBooking()}
      />

      {/* Interactive Bio Detail Modal */}
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onStartProject={() => handleScrollToBooking()}
      />
    </div>
  );
}
