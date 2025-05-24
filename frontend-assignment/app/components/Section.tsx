'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function Section({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: SectionProps) {
  return (
    <section className="py-20 px-4 bg-dropbox-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-dropbox-black mb-4">{title}</h2>
            <p className="text-xl text-dropbox-gray">{description}</p>
          </motion.div>

          {/* Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 