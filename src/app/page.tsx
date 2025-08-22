'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { FeatureCard } from '@/components/feature-card';
import { Icon } from '@/components/ui/icon';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const quickLinks = [
    {
      title: "Hybrid Renewables",
      description: "Solar, battery storage, and backup generation for optimal efficiency",
      icon: "Zap",
      gradient: "from-blue-500 to-green-500",
      href: "/hybrid-renewables"
    },
    {
      title: "Carbon Free Hydrogen",
      description: "Zero-emission hydrogen generators for heavy industry and remote operations",
      icon: "Droplets",
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Solar & Back Up Power",
      description: "Reliable renewable power solutions with intelligent backup systems",
      icon: "Sun",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Portable Power",
      description: "Mobile power solutions for construction, events, and emergency response",
      icon: "Battery",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const coreValues = [
    {
      letter: "H",
      title: "Honour",
      description: "We honour our roots, responsibilities, and relationships, with land, culture, clients, and community."
    },
    {
      letter: "E",
      title: "Explore",
      description: "We explore new ideas, technologies, and perspectives that challenge convention and inspire progress."
    },
    {
      letter: "A",
      title: "Awaken",
      description: "We awaken potential in people, in projects, and in systems ready for change, fostering growth and innovation."
    },
    {
      letter: "L",
      title: "Lead",
      description: "We lead with integrity, humility, and courage, setting a high standard for ethical and impactful work."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Aurora Background Effect - Subtle for sections below hero */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-green-900/10 to-purple-900/10"></div>
        
        {/* Animated Aurora Streams - Reduced opacity for sections below hero */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-green-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 120, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/8 to-green-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 60, -100, 0],
            y: [0, -60, 80, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5"
      >
        {/* Gradient overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/30"></div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1F92CC]/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center group"
            >
              <motion.div 
                className="relative h-12 flex items-center justify-center transition-all duration-300"
                whileHover={{ rotate: 1 }}
              >
                <Image 
                  src="/images/Logo_White.png" 
                  alt="Kiikew - Power to Heal" 
                  width={160}
                  height={48}
                  className="h-full w-auto object-contain"
                  priority
                />
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F92CC]/10 to-[#2AB089]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: 'Hybrid Renewables', href: '/hybrid-renewables' },
                { name: 'About', href: '#about' },
                { name: 'Values', href: '#values' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-white/80 hover:text-white transition-colors group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100"
                    layoutId="navHover"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                </motion.a>
              ))}
              
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative ml-4 px-6 py-3 bg-gradient-to-r from-[#1F92CC] to-[#2AB089] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Get a Quote</span>
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#2AB089] to-[#1F92CC] opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="text-white" />
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ 
              height: isMenuOpen ? "auto" : 0, 
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : -20
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-6 px-2 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 mt-4 mb-4">
              <div className="space-y-2">
                {[
                  { name: 'Hybrid Renewables', href: '/hybrid-renewables' },
                  { name: 'About', href: '#about' },
                  { name: 'Values', href: '#values' }
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#quote"
                  className="block mx-2 mt-4 px-4 py-3 bg-gradient-to-r from-[#1F92CC] to-[#2AB089] text-white font-semibold rounded-xl text-center shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/Hero.png)',
            }}
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
          {/* Gradient overlay for additional depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/50"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection delay={0.2}>
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Icon name="Leaf" size={16} className="text-[#2AB089]" />
                <span className="text-sm text-white/90">Power to Heal</span>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-white drop-shadow-2xl">Carbon-Free Power</span>
                <span className="block bg-gradient-to-r from-[#1F92CC] to-[#2AB089] bg-clip-text text-transparent drop-shadow-lg">
                  for Every Project
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                Kiikew means "to heal" – We power the future differently-cleaner, smarter, with purpose. 
                <br className="hidden sm:block" />
                <span className="text-white font-semibold">Renewable-first. Hydrogen-ready. Hybrid-systems. Portable-power.</span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#1F92CC] to-[#2AB089] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-lg">Explore Products</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Icon name="ArrowRight" size={20} />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="#quote"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <Icon name="Calculator" size={20} />
                  <span className="text-lg">Get a Quote</span>
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section id="products" className="relative z-10 py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Our Solutions
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Innovative renewable energy solutions designed for the toughest environments
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {quickLinks.map((link, index) => (
              <AnimatedSection key={link.title} delay={index * 0.1}>
                <motion.a
                  href={link.href || '#'}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 block"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon 
                      name={link.icon} 
                      size={32} 
                      className="text-white" 
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {link.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {link.description}
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 pointer-events-none"
                  />
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                  About Kiikew
                </h2>
                <div className="space-y-6 text-white/80 text-base sm:text-lg leading-relaxed">
                  <p>
                    <strong className="text-[#2AB089]">Kiikew means "to heal"</strong> – That's our purpose – Power to Heal. 
                    We power the future differently-cleaner, smarter, with purpose.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#1F92CC] rounded-full"></div>
                      <span>Renewable-first.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2AB089] rounded-full"></div>
                      <span>Hydrogen-ready.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#1F92CC] rounded-full"></div>
                      <span>Hybrid-systems.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2AB089] rounded-full"></div>
                      <span>Portable-power.</span>
                    </li>
                  </ul>
                  <p>
                    We specialize in hybrid renewable power, hydrogen-powered generators, and hybrid lighting towers, 
                    helping businesses transition from diesel-powered infrastructure to cleaner, smarter alternatives.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#1F92CC]/20 to-[#2AB089]/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Power the world differently, live freely, and leave behind a world far greater than we found it.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1F92CC] to-[#2AB089] rounded-lg flex items-center justify-center">
                      <Icon name="Target" size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Female & Indigenous-Owned (Métis)</p>
                      <p className="text-white font-semibold">Supporting diversity in renewable energy</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="relative z-10 py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Our Values: HEAL
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                HEAL is more than a word. It's our guiding framework that sits at the heart of everything we do.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.letter} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#1F92CC] to-[#2AB089] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300"
                  >
                    <span className="text-3xl font-bold text-white">{value.letter}</span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="relative z-10 py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-[#1F92CC]/20 to-[#2AB089]/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Power Your Future?
              </h3>
              <p className="text-xl text-white/80 mb-8">
                Join the clean energy transition with solutions designed for North America's toughest environments
              </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#1F92CC] to-[#2AB089] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Get Your Quote
                </motion.a>
                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <Icon name="Info" size={20} className="mr-2" />
                  Learn More
                </motion.a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="mb-6">
                <Image 
                  src="/images/Logo_White.png" 
                  alt="Kiikew - Power to Heal" 
                  width={120}
                  height={36}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className="text-white/70 mb-4">
                Power to Heal - Delivering the future of clean, reliable energy solutions.
              </p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Icon name="Linkedin" size={20} className="text-white/60 hover:text-white cursor-pointer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Icon name="Mail" size={20} className="text-white/60 hover:text-white cursor-pointer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Icon name="Phone" size={20} className="text-white/60 hover:text-white cursor-pointer" />
                </motion.div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Hybrid Renewables</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carbon Free Hydrogen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Solar & Backup Power</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portable Power</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Mining & Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Construction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Off-Grid Communities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Response</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Kiikew. All rights reserved. Female & Indigenous-Owned (Métis).
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}