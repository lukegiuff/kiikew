import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface FeatureContent {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface SiteSettings {
  title: string;
  description: string;
  logo?: string;
  favicon?: string;
}

export function getHeroContent(): HeroContent | null {
  try {
    const heroDir = path.join(contentDirectory, 'hero');
    if (!fs.existsSync(heroDir)) return null;
    
    const files = fs.readdirSync(heroDir);
    const heroFile = files.find(file => file.endsWith('.md'));
    
    if (!heroFile) return null;
    
    const filePath = path.join(heroDir, heroFile);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return data as HeroContent;
  } catch (error) {
    console.error('Error reading hero content:', error);
    return null;
  }
}

export function getFeatures(): FeatureContent[] {
  try {
    const featuresDir = path.join(contentDirectory, 'features');
    if (!fs.existsSync(featuresDir)) return [];
    
    const files = fs.readdirSync(featuresDir);
    const features = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(featuresDir, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        return data as FeatureContent;
      })
      .sort((a, b) => a.order - b.order);
    
    return features;
  } catch (error) {
    console.error('Error reading features:', error);
    return [];
  }
}

export function getSiteSettings(): SiteSettings | null {
  try {
    const settingsFile = path.join(contentDirectory, 'settings', 'general.md');
    if (!fs.existsSync(settingsFile)) return null;
    
    const fileContents = fs.readFileSync(settingsFile, 'utf8');
    const { data } = matter(fileContents);
    
    return data as SiteSettings;
  } catch (error) {
    console.error('Error reading site settings:', error);
    return null;
  }
}
