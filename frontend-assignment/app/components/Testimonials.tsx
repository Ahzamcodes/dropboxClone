'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by millions
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about Dropbox
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role} at{' '}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
              <blockquote className="text-xl text-gray-700 italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials: Testimonial[] = [
  {
    quote: "Dropbox has transformed how our team collaborates. It's simple, reliable, and secure.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/testimonial-1.jpg",
  },
  {
    quote: "The best file sharing solution we've used. It just works, every time.",
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateX",
    image: "/testimonial-2.jpg",
  },
  {
    quote: "Dropbox has become an essential part of our daily workflow.",
    author: "Emily Rodriguez",
    role: "Creative Director",
    company: "DesignHub",
    image: "/testimonial-3.jpg",
  },
]; 