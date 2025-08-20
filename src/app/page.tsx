'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { FeatureCard } from '@/components/feature-card';
import { Icon } from '@/components/ui/icon';
// import { getHeroContent, getFeatures, getSiteSettings } from '@/lib/content';
import { useEffect, useState } from 'react';
import type { HeroContent, FeatureContent, SiteSettings } from '@/lib/content';

export default function Home() {
  const [heroData, setHeroData] = useState<HeroContent | null>(null);
  const [features, setFeatures] = useState<FeatureContent[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContent() {
      try {
        // Since these functions use fs, we need to call them through an API route
        // For now, we'll use static content and set up API routes later
        setHeroData({
          title: "Welcome to the Future",
          subtitle: "Experience seamless interactions with beautiful animations and modern design. Built with Next.js, Framer Motion, and Tailwind CSS.",
          ctaText: "Get Started",
          ctaLink: "#features"
        });
        
        setFeatures([
          {
            title: "Lightning Fast",
            description: "Built with Next.js and optimized for performance, delivering blazing fast load times and smooth interactions.",
            icon: "zap",
            order: 1
          },
          {
            title: "Beautiful Animations",
            description: "Powered by Framer Motion, every interaction feels smooth and delightful with carefully crafted animations.",
            icon: "sparkles",
            order: 2
          },
          {
            title: "Content Management",
            description: "Easy content management with Decap CMS. Update your content without touching code.",
            icon: "edit-3",
            order: 3
          }
        ]);
        
        setSiteSettings({
          title: "Kiikew - Modern Web Solutions",
          description: "A beautiful, modern website built with Next.js, Tailwind CSS, and powered by cutting-edge technologies"
        });
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContent();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Icon name="loader" size={32} className="text-blue-500" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 20, -20],
              x: [null, 10, -10, 10],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
        className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Icon name="hexagon" size={24} className="text-blue-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {siteSettings?.title?.split(' - ')[0] || 'Kiikew'}
              </span>
            </motion.div>
            
            <motion.a
              href="/admin"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Icon name="settings" size={16} />
              <span>Admin</span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection delay={0.2}>
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {heroData?.title}
            </motion.h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {heroData?.subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.a
              href={heroData?.ctaLink || '#features'}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-lg">{heroData?.ctaText}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Icon name="arrow-right" size={20} />
              </motion.div>
            </motion.a>
          </AnimatedSection>

          {/* Floating icons animation */}
          <div className="relative mt-20">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-1/4 top-10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="heart" size={24} className="text-white" />
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -3, 3, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute right-1/4 top-5"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Icon name="star" size={20} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything you need to build modern, fast, and beautiful web applications
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Experience the power of modern web development with our stack
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/admin"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="edit" size={20} className="mr-2" />
                  Manage Content
                </motion.a>
                <motion.a
                  href="https://github.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  <Icon name="github" size={20} className="mr-2" />
                  View Source
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="hexagon" size={20} className="text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">
                Built with Next.js, Tailwind CSS, Framer Motion & Decap CMS
              </span>
            </div>
            <div className="flex space-x-6">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Icon name="github" size={20} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Icon name="twitter" size={20} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Icon name="linkedin" size={20} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer" />
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
