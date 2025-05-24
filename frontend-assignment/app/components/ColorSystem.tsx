'use client';

import { motion } from 'framer-motion';

export default function ColorSystem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Color System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our color palette is designed to be accessible, consistent, and reflective of our brand identity.
          </p>
        </motion.div>

        <div className="space-y-16">
          {colorSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.colors.map((color, colorIndex) => (
                  <motion.div
                    key={colorIndex}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div
                      className="h-32 rounded-lg mb-2"
                      style={{ backgroundColor: color.value }}
                    />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">
                          {color.name}
                        </span>
                        <span className="text-sm text-gray-500 font-mono">
                          {color.value}
                        </span>
                      </div>
                      {color.description && (
                        <p className="text-sm text-gray-600">
                          {color.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Color Usage Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((guideline, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {guideline.title}
                </h4>
                <ul className="space-y-2">
                  {guideline.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-600 mt-1 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const colorSections = [
  {
    title: 'Primary Colors',
    colors: [
      {
        name: 'Dropbox Blue',
        value: '#0061FF',
        description: 'Our primary brand color',
      },
      {
        name: 'Blue Dark',
        value: '#0047CC',
        description: 'Used for hover states',
      },
      {
        name: 'Blue Light',
        value: '#E6F0FF',
        description: 'Used for backgrounds',
      },
    ],
  },
  {
    title: 'Neutral Colors',
    colors: [
      {
        name: 'Gray 900',
        value: '#1E1E1E',
        description: 'Primary text',
      },
      {
        name: 'Gray 600',
        value: '#6B6B6B',
        description: 'Secondary text',
      },
      {
        name: 'Gray 200',
        value: '#E5E5E5',
        description: 'Borders and dividers',
      },
      {
        name: 'Gray 100',
        value: '#F5F5F5',
        description: 'Backgrounds',
      },
      {
        name: 'White',
        value: '#FFFFFF',
        description: 'Surface colors',
      },
    ],
  },
  {
    title: 'Semantic Colors',
    colors: [
      {
        name: 'Success',
        value: '#00A82D',
        description: 'Positive states',
      },
      {
        name: 'Warning',
        value: '#FFB800',
        description: 'Caution states',
      },
      {
        name: 'Error',
        value: '#FF3B30',
        description: 'Error states',
      },
    ],
  },
];

const guidelines = [
  {
    title: 'Accessibility',
    points: [
      'Maintain a minimum contrast ratio of 4.5:1 for text',
      'Use color combinations that are accessible to color-blind users',
      'Don\'t rely solely on color to convey information',
    ],
  },
  {
    title: 'Consistency',
    points: [
      'Use primary colors for key actions and brand elements',
      'Apply neutral colors for text and backgrounds',
      'Reserve semantic colors for their specific purposes',
    ],
  },
]; 