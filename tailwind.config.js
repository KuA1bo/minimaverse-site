/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Animations
    'animate-fade-in-up',
    'animate-float-slow',
    'animate-float-slower',
    'animate-pulse-slow',
    'animate-gradient-x',
    'animate-ping',
    'animate-pulse',
    // Delays
    'delay-75',
    'delay-150',
    'delay-200',
    'delay-300',
    // Gradients
    'bg-gradient-to-r',
    'from-purple-500',
    'via-blue-500',
    'to-cyan-500',
    'from-white',
    'via-white',
    'to-purple-300',
    'from-purple-200',
    'via-blue-200',
    // Glassmorphism
    'backdrop-blur-xl',
    'bg-black/40',
    'bg-gray-800/30',
    'bg-gray-800/50',
    // Shadows and glow
    'shadow-purple-500/10',
    'shadow-blue-500/10',
    'shadow-green-500/50',
    'shadow-yellow-500/50',
    'hover:shadow-2xl',
    'hover:shadow-purple-500/20',
    // Positioning
    'sticky',
    'top-0',
    'z-50',
    'z-10',
    'z-0',
    // Border
    'border-gray-700/50',
    'hover:border-purple-500/50',
    'hover:border-blue-500/50',
    // Optimizations
    'will-change-transform',
    'transform-gpu',
    'blur-2xl',
    'blur-xl',
    'blur-8px',
    'blur-16px',
    'w-72', 'h-72',
    'bg-purple-500/15',
    'bg-blue-500/15',
    'bg-purple-500/20',
    'bg-blue-500/20',
    // Progressive enhancement
    'filter',
    'text-shadow',
    'contain-layout',
    'contain-style',
    'contain-paint',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
