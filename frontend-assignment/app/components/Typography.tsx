'use client';

import { motion } from 'framer-motion';

export default function Typography() {
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
            Typography
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our type system is designed to be clear, readable, and consistent across all platforms.
          </p>
        </motion.div>

        <div className="space-y-16">
          {typographySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {section.title}
              </h3>
              <div className="space-y-8">
                {section.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <div className={example.className}>{example.text}</div>
                      <div className="text-sm text-gray-500">
                        {example.specs}
                      </div>
                    </div>
                    <div className="h-px bg-gray-200" />
                  </div>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Type Scale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Desktop
              </h4>
              <ul className="space-y-4">
                {typeScale.desktop.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="text-gray-900 font-mono">{item.size}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Mobile
              </h4>
              <ul className="space-y-4">
                {typeScale.mobile.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="text-gray-900 font-mono">{item.size}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const typographySections = [
  {
    title: 'Headings',
    examples: [
      {
        text: 'The quick brown fox jumps over the lazy dog',
        className: 'text-5xl font-bold',
        specs: '48px / 56px • Bold',
      },
      {
        text: 'The quick brown fox jumps over the lazy dog',
        className: 'text-4xl font-bold',
        specs: '36px / 44px • Bold',
      },
      {
        text: 'The quick brown fox jumps over the lazy dog',
        className: 'text-3xl font-bold',
        specs: '30px / 38px • Bold',
      },
      {
        text: 'The quick brown fox jumps over the lazy dog',
        className: 'text-2xl font-bold',
        specs: '24px / 32px • Bold',
      },
    ],
  },
  {
    title: 'Body Text',
    examples: [
      {
        text: 'The quick brown fox jumps over the lazy dog',
        className: 'text-xl',
        specs: '20px / 28px • Regular',
      },
      {
        text: 'The quick brown fox jumps over the lazy dog',
        className: 'text-lg',
        specs: '18px / 26px • Regular',
      },
      {
        text: 'The quick brown fox jumps over the lazy dog',
        className: 'text-base',
        specs: '16px / 24px • Regular',
      },
      {
        text: 'The quick brown fox jumps over the lazy dog',
        className: 'text-sm',
        specs: '14px / 20px • Regular',
      },
    ],
  },
];

const typeScale = {
  desktop: [
    { name: 'Display', size: '48px' },
    { name: 'H1', size: '36px' },
    { name: 'H2', size: '30px' },
    { name: 'H3', size: '24px' },
    { name: 'Body Large', size: '20px' },
    { name: 'Body', size: '16px' },
    { name: 'Small', size: '14px' },
  ],
  mobile: [
    { name: 'Display', size: '36px' },
    { name: 'H1', size: '30px' },
    { name: 'H2', size: '24px' },
    { name: 'H3', size: '20px' },
    { name: 'Body Large', size: '18px' },
    { name: 'Body', size: '16px' },
    { name: 'Small', size: '14px' },
  ],
}; 