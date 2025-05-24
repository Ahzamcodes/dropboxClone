'use client';

import { motion } from 'framer-motion';
import Section from '../components/Section';

export default function DesignSystem() {
  return (
    <main className="min-h-screen bg-dropbox-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-dropbox-blue text-dropbox-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Design System</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            A comprehensive guide to our design principles, components, and brand guidelines
          </p>
        </motion.div>
      </section>

      {/* Color System */}
      <Section
        title="Color System"
        description="Our color palette is built on a foundation of blue, complemented by carefully selected supporting colors that maintain consistency across all our products."
        imageSrc="/assets/colors.svg"
        imageAlt="Dropbox color system"
      />

      {/* Dropbox Logo */}
      <Section
        title="Dropbox Logo"
        description="The Dropbox logo is our most recognizable asset. Use it with care and always maintain clear space around it."
        imageSrc="/assets/dropbox-logo.svg"
        imageAlt="Dropbox logo"
        reverse={true}
      />

      {/* Dropbox Illustration */}
      <Section
        title="Dropbox-style Illustration"
        description="Dropbox's brand is brought to life with playful, creative illustrations. Use illustrations that reflect our brand's friendly and approachable personality."
        imageSrc="/assets/illustration.svg"
        imageAlt="Dropbox style illustration"
      />

      {/* Typography */}
      <Section
        title="Typography"
        description="We use Sharp Grotesk and Atlas Grotesk for clean, readable design. Our type system ensures consistent hierarchy and readability across all platforms."
        imageSrc="/assets/typography.svg"
        imageAlt="Dropbox typography system"
        reverse={true}
      />

      {/* Logo Guidelines */}
      <Section
        title="Logo Guidelines"
        description="The Dropbox logo is our most recognizable asset. Learn about proper usage, spacing, and variations to maintain brand consistency."
        imageSrc="/assets/logo-guidelines.svg"
        imageAlt="Dropbox logo guidelines"
      />

      {/* Iconography */}
      <Section
        title="Iconography"
        description="Our icon system follows a consistent style that aligns with our brand. Each icon is designed to be clear, recognizable, and scalable."
        imageSrc="/assets/icons.svg"
        imageAlt="Dropbox icon system"
        reverse={true}
      />

      {/* Components */}
      <Section
        title="Components"
        description="Explore our library of reusable components, from buttons to cards, that help maintain consistency and speed up development."
        imageSrc="/assets/components.svg"
        imageAlt="Dropbox component library"
      />

      {/* Spacing & Layout */}
      <Section
        title="Spacing & Layout"
        description="Our spacing system creates harmony and balance across all interfaces. Learn about our grid system and spacing rules."
        imageSrc="/assets/spacing.svg"
        imageAlt="Dropbox spacing system"
        reverse={true}
      />
    </main>
  );
} 