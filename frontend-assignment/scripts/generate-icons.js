const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = [
  'public/assets/icons',
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate SVG icons
const icons = [
  {
    name: 'consistency.svg',
    content: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#0061FF" stroke-width="2"/>
      <path d="M10 16L14 20L22 12" stroke="#0061FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    name: 'workflow.svg',
    content: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="24" height="24" rx="2" stroke="#0061FF" stroke-width="2"/>
      <line x1="8" y1="12" x2="24" y2="12" stroke="#0061FF" stroke-width="2"/>
      <line x1="8" y1="16" x2="24" y2="16" stroke="#0061FF" stroke-width="2"/>
      <line x1="8" y1="20" x2="24" y2="20" stroke="#0061FF" stroke-width="2"/>
    </svg>`
  },
  {
    name: 'brand.svg',
    content: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L28 12V28H4V12L16 4Z" stroke="#0061FF" stroke-width="2"/>
      <path d="M16 8L24 14V24H8V14L16 8Z" stroke="#0061FF" stroke-width="2"/>
    </svg>`
  },
  {
    name: 'logo.svg',
    content: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L28 12V28H4V12L16 4Z" fill="#0061FF"/>
      <path d="M16 8L24 14V24H8V14L16 8Z" fill="white"/>
    </svg>`
  },
  {
    name: 'menu.svg',
    content: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="4" y1="8" x2="28" y2="8" stroke="#0061FF" stroke-width="2"/>
      <line x1="4" y1="16" x2="28" y2="16" stroke="#0061FF" stroke-width="2"/>
      <line x1="4" y1="24" x2="28" y2="24" stroke="#0061FF" stroke-width="2"/>
    </svg>`
  },
  {
    name: 'close.svg',
    content: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="4" y1="4" x2="28" y2="28" stroke="#0061FF" stroke-width="2"/>
      <line x1="4" y1="28" x2="28" y2="4" stroke="#0061FF" stroke-width="2"/>
    </svg>`
  }
];

// Write icons to files
icons.forEach(icon => {
  const filePath = path.join('public/assets/icons', icon.name);
  fs.writeFileSync(filePath, icon.content);
});

console.log('Generated SVG icons successfully!'); 