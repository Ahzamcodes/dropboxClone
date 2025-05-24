'use client';

import { motion } from 'framer-motion';

export default function Motion() {
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
            Motion Design
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our motion design system creates delightful, purposeful animations that enhance the user experience.
          </p>
        </motion.div>

        <div className="space-y-16">
          {motionSections.map((section, index) => (
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.examples.map((example, exampleIndex) => (
                  <motion.div
                    key={exampleIndex}
                    className="space-y-4"
                  >
                    <div className="bg-gray-50 rounded-lg p-6 h-48 flex items-center justify-center">
                      <motion.div
                        className="w-24 h-24 bg-blue-600 rounded-lg"
                        animate={example.animation}
                        transition={example.transition}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {example.name}
                      </h4>
                      <p className="text-gray-600">{example.description}</p>
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
            Motion Design Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {principle.title}
                </h4>
                <ul className="space-y-2">
                  {principle.points.map((point, pointIndex) => (
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

const motionSections = [
  {
    title: 'Transitions',
    examples: [
      {
        name: 'Fade',
        description: 'Smooth opacity transitions for elements entering and exiting the viewport.',
        animation: {
          opacity: [0, 1, 0],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse' as const,
        },
      },
      {
        name: 'Scale',
        description: 'Subtle scaling animations for interactive elements.',
        animation: {
          scale: [1, 1.1, 1],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse' as const,
        },
      },
    ],
  },
  {
    title: 'Interactions',
    examples: [
      {
        name: 'Hover',
        description: 'Responsive hover states that provide immediate feedback.',
        animation: {
          y: [0, -10, 0],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse' as const,
        },
      },
      {
        name: 'Tap',
        description: 'Quick, subtle animations for touch and click interactions.',
        animation: {
          scale: [1, 0.95, 1],
        },
        transition: {
          duration: 0.3,
          repeat: Infinity,
          repeatType: 'reverse' as const,
        },
      },
    ],
  },
];

const principles = [
  {
    title: 'Purpose',
    points: [
      'Animations should serve a clear purpose',
      'Enhance user understanding and feedback',
      'Guide attention to important elements',
    ],
  },
  {
    title: 'Timing',
    points: [
      'Use appropriate duration for different interactions',
      'Maintain consistent timing across similar elements',
      'Consider user context and device capabilities',
    ],
  },
]; 