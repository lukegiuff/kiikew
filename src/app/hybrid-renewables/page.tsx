'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { Icon } from '@/components/ui/icon';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  models?: string[];
  addons?: string[];
  specs?: { [key: string]: string };
  features: string[];
  category: 'microgrids' | 'solar';
}

export default function HybridRenewables() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products: Product[] = [
    {
      id: 'spark-cube',
      name: 'Spark Cube',
      description: 'Mobile Hybrid MicroGrid designed for portable, reliable power in remote locations. Combines solar, battery storage, and optional generator backup for maximum flexibility.',
      models: ['20kWh', '30kWh', '60kWh'],
      addons: ['13kW Generator', 'LED Light Tower', 'Trailer Mount'],
      specs: {
        'Power Output': 'Up to 60kWh',
        'Solar Input': 'Up to 8kW',
        'Battery Type': 'LiFePO4',
        'Inverter': 'Pure Sine Wave',
        'Weight': '1,200-2,400 lbs',
        'Dimensions': '4\' x 6\' x 4.5\''
      },
      features: [
        'Completely mobile and self-contained',
        'Intelligent power management system',
        'Weather-resistant design',
        'Remote monitoring capabilities',
        'Scalable battery capacity',
        'Quick deployment (under 30 minutes)'
      ],
      category: 'microgrids'
    },
    {
      id: 'terra-microgrid',
      name: 'TERRA MicroGrid',
      description: 'High-capacity 150kW microgrid solution for large-scale operations. Perfect for construction sites, mining operations, and industrial applications requiring substantial power.',
      models: ['150kW'],
      addons: ['40kW Generator', 'TERRA Trailer'],
      specs: {
        'Power Output': '150kW continuous',
        'Battery Capacity': '300-600kWh',
        'Solar Input': 'Up to 200kW',
        'Generator Backup': '40kW diesel',
        'Operating Temp': '-40°C to +60°C',
        'Installation': 'Permanent or semi-permanent'
      },
      features: [
        'Industrial-grade components',
        'Advanced energy management system',
        'Hybrid solar-generator operation',
        'Real-time performance monitoring',
        'Modular expansion capability',
        'Professional installation and support'
      ],
      category: 'microgrids'
    },
    {
      id: 'solar-tarp',
      name: 'Solar Tarp',
      description: 'Flexible 940W solar solution that can be deployed anywhere. Lightweight, durable, and perfect for temporary installations or challenging terrain.',
      specs: {
        'Power Output': '940W',
        'Panel Type': 'Flexible monocrystalline',
        'Weight': '45 lbs',
        'Dimensions': '12\' x 8\' (deployed)',
        'Efficiency': '22%+',
        'Durability': 'IP67 rated'
      },
      features: [
        'Ultra-lightweight and portable',
        'Flexible design conforms to surfaces',
        'Quick setup and takedown',
        'Extreme weather resistant',
        'No tools required for deployment',
        'Integrated mounting grommets'
      ],
      category: 'solar'
    },
    {
      id: 'bifacial-panel',
      name: '400W Bifacial Panel',
      description: 'High-efficiency 400W bifacial solar panel that captures sunlight from both sides, increasing energy production by up to 30% compared to traditional panels.',
      specs: {
        'Power Output': '400W front + up to 120W rear',
        'Panel Type': 'Bifacial monocrystalline',
        'Efficiency': '21.2% front / 85% rear',
        'Dimensions': '78.7" x 35.4" x 1.4"',
        'Weight': '48.5 lbs',
        'Warranty': '25 years'
      },
      features: [
        'Dual-sided energy capture',
        'Superior low-light performance',
        'Enhanced durability with double glass',
        'Reduced temperature coefficient',
        'Anti-reflective coating',
        'PID resistant technology'
      ],
      category: 'solar'
    },
    {
      id: 'folding-panel',
      name: '500W Folding Panel',
      description: 'Portable 500W folding solar panel system designed for easy transport and rapid deployment. Perfect for mobile applications and temporary power needs.',
      specs: {
        'Power Output': '500W',
        'Panel Configuration': '4 x 125W panels',
        'Folded Dimensions': '39" x 27" x 3"',
        'Deployed Dimensions': '78" x 54"',
        'Weight': '35 lbs',
        'Setup Time': 'Under 5 minutes'
      },
      features: [
        'Compact folding design',
        'Integrated carrying handles',
        'Built-in charge controller',
        'Multiple output options',
        'Rugged aluminum frame',
        'Adjustable kickstand legs'
      ],
      category: 'solar'
    },
    {
      id: 'power-rack',
      name: 'Power Rack',
      description: 'Modular solar mounting system designed for rapid deployment and maximum flexibility. Supports various panel configurations and ground conditions.',
      specs: {
        'Panel Capacity': '4-12 panels',
        'Tilt Adjustment': '15° to 60°',
        'Material': 'Anodized aluminum',
        'Foundation': 'Ground screws or ballast',
        'Wind Rating': '120 mph',
        'Assembly Time': '2-4 hours'
      },
      features: [
        'Tool-free panel mounting',
        'Adjustable tilt angle',
        'Modular expansion design',
        'Corrosion-resistant materials',
        'No concrete foundation required',
        'Professional installation available'
      ],
      category: 'solar'
    }
  ];

  const microgridProducts = products.filter(p => p.category === 'microgrids');
  const solarProducts = products.filter(p => p.category === 'solar');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Aurora Background Effect - Subtle */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-green-900/5 to-purple-900/5"></div>
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#1F92CC]/10 to-[#2AB089]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
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
            <Link href="/" className="flex items-center group">
              <motion.div whileHover={{ scale: 1.05 }}>
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
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: 'Hybrid Renewables', href: '/hybrid-renewables' },
                { name: 'About', href: '/#about' },
                { name: 'Values', href: '/#values' }
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
                  { name: 'About', href: '/#about' },
                  { name: 'Values', href: '/#values' }
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
      <section className="relative z-10 pt-32 pb-20 sm:pb-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection delay={0.2}>
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Icon name="Zap" size={16} className="text-[#2AB089]" />
                <span className="text-sm text-white/90">Hybrid Power Solutions</span>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-white drop-shadow-2xl">Hybrid</span>
                <span className="block bg-gradient-to-r from-[#1F92CC] to-[#2AB089] bg-clip-text text-transparent drop-shadow-lg">
                  Renewables
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                Advanced hybrid renewable energy systems combining solar, battery storage, and backup generation 
                for reliable, clean power anywhere.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MicroGrids Section */}
      <section id="microgrids" className="relative z-10 py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                MicroGrid Systems
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Complete hybrid power solutions for industrial, construction, and remote applications
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {microgridProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="w-full h-64 rounded-xl mb-6 overflow-hidden border border-white/10">
                    <Image
                      src={`/images/product_images/${product.id === 'spark-cube' ? 'SparkCube.jpg' : 'Terra.jpg'}`}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Models */}
                  {product.models && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#2AB089] mb-3">Available Models</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.models.map((model) => (
                          <span key={model} className="px-3 py-1 bg-[#1F92CC]/20 text-[#1F92CC] rounded-lg text-sm font-medium">
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add-ons */}
                  {product.addons && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#2AB089] mb-3">Available Add-ons</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.addons.map((addon) => (
                          <span key={addon} className="px-3 py-1 bg-[#2AB089]/20 text-[#2AB089] rounded-lg text-sm font-medium">
                            {addon}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#2AB089] rounded-full"></div>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#1F92CC] to-[#2AB089] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    {selectedProduct === product.id ? 'Hide Details' : 'View Specifications'}
                  </motion.button>

                  {/* Expandable Specs */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: selectedProduct === product.id ? "auto" : 0,
                      opacity: selectedProduct === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {selectedProduct === product.id && product.specs && (
                      <div className="mt-6 p-4 bg-black/30 rounded-xl border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-4">Technical Specifications</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
                              <span className="text-white/70 text-sm">{key}</span>
                              <span className="text-white font-medium text-sm">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section id="solar" className="relative z-10 py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Solar Solutions
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                High-efficiency solar panels and mounting systems for every application
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {solarProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-full h-56 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl mb-6 flex items-center justify-center border border-white/10 group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                    <Icon name="Sun" size={40} className="text-white/40" />
                    <span className="ml-3 text-white/40 text-base">{product.name}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-white/80 mb-6 text-sm sm:text-base leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Specs */}
                  {product.specs && (
                    <div className="mb-6">
                      <div className="space-y-3">
                        {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center text-sm">
                            <span className="text-white/60">{key}</span>
                            <span className="text-white font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#2AB089] rounded-full"></div>
                          <span className="text-white/70 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#1F92CC] to-[#2AB089] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    {selectedProduct === product.id ? 'Hide Details' : 'View Details'}
                  </motion.button>

                  {/* Expandable Details */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: selectedProduct === product.id ? "auto" : 0,
                      opacity: selectedProduct === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {selectedProduct === product.id && (
                      <div className="mt-4 p-3 bg-black/30 rounded-lg border border-white/10">
                        {product.specs && (
                          <div className="mb-3">
                            <h5 className="text-sm font-semibold text-white mb-2">Full Specifications</h5>
                            <div className="space-y-1">
                              {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center text-xs py-1">
                                  <span className="text-white/60">{key}</span>
                                  <span className="text-white">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2">All Features</h5>
                          <ul className="space-y-1">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-[#2AB089] rounded-full"></div>
                                <span className="text-white/70 text-xs">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-[#1F92CC]/20 to-[#2AB089]/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Go Hybrid?
                </h3>
                <p className="text-xl text-white/80 mb-8">
                  Get a custom quote for your hybrid renewable energy system today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#1F92CC] to-[#2AB089] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon name="Phone" size={20} className="mr-2" />
                    Get Custom Quote
                  </motion.a>
                  <motion.a
                    href="#products"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <Icon name="Download" size={20} className="mr-2" />
                    Download Specs
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
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#microgrids" className="hover:text-white transition-colors">MicroGrid Systems</a></li>
                <li><a href="#solar" className="hover:text-white transition-colors">Solar Solutions</a></li>
                <li><Link href="/" className="hover:text-white transition-colors">All Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>Get a Quote</li>
                <li>Technical Support</li>
                <li>Installation Services</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Kiikew. All rights reserved. Female & Indigenous-Owned (Métis).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
