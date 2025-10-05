import React from 'react';
import { Element } from 'react-scroll';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import WinterGifts from '../components/WinterGifts';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import ParticleSystem from '../components/ParticleSystem';

export default function MainPage() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black min-h-screen relative">
      {/* Enhanced Background */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay" />
      
      {/* Animated Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-black/90 animate-gradient-shift" 
           style={{ backgroundSize: '400% 400%' }} />
      
      {/* Particle System */}
      <ParticleSystem />
      
      {/* Main Content */}
      <div className="relative z-20">
        <Navbar />
        <Element name="home"><Hero /></Element>
        <Element name="event-details"><EventDetails /></Element>
        <Element name="winter-gifts"><WinterGifts /></Element>
        <Element name="sponsors"><Sponsors /></Element>
        <Footer />
      </div>
    </div>
  );
}