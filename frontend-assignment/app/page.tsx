'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './components/MobileNav';
import Header from './components/Header';
import BrandGuidelines from './components/BrandGuidelines';
import Framework from './components/Framework';
import Typography from './components/Typography';
import ColorSystem from './components/ColorSystem';
import Iconography from './components/Iconography';
import Motion from './components/Motion';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dropbox-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-dropbox-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/dropbox-logo.svg"
                alt="Dropbox Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-dropbox-gray hover:text-dropbox-blue transition-colors">
                Home
              </Link>
              <Link href="/design-system" className="text-dropbox-gray hover:text-dropbox-blue transition-colors">
                Design System
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-dropbox-blue/10 to-transparent"
        />
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-dropbox-black mb-6"
          >
            Design that moves
            <br />
            <span className="text-dropbox-blue">work forward</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-dropbox-gray max-w-2xl mx-auto mb-12"
          >
            Our design system helps us work together to build a better Dropbox
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/design-system"
              className="inline-block bg-dropbox-blue text-dropbox-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dropbox-dark transition-colors"
            >
              Explore Design System
            </Link>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-dropbox-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dropbox-blue/10 rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-dropbox-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-dropbox-blue/10 rounded-full flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="text-dropbox-blue"
                  />
                </div>
                <h3 className="text-xl font-bold text-dropbox-black mb-4">{feature.title}</h3>
                <p className="text-dropbox-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Header />
      <BrandGuidelines />
      <Framework />
      <Typography />
      <ColorSystem />
      <Iconography />
      <Motion />
      <Footer />
    </main>
  );
}

const features = [
  {
    title: 'Consistent Design',
    description: 'A unified design language that helps us build better products together.',
    icon: '/assets/icons/consistency.svg',
  },
  {
    title: 'Efficient Workflow',
    description: 'Streamlined processes and reusable components to speed up development.',
    icon: '/assets/icons/workflow.svg',
  },
  {
    title: 'Brand Identity',
    description: 'Strong visual identity that maintains our brand across all platforms.',
    icon: '/assets/icons/brand.svg',
  },
];
