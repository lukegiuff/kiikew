'use client';

import { motion } from 'framer-motion';
import { Icon } from './ui/icon';
import { FeatureContent } from '@/lib/content';

interface FeatureCardProps {
  feature: FeatureContent;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300"
    >
      <motion.div
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
      >
        <Icon 
          name={feature.icon} 
          size={32} 
          className="text-white" 
        />
      </motion.div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {feature.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {feature.description}
      </p>
      
      {/* Subtle gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-600/5 pointer-events-none"
      />
    </motion.div>
  );
}
