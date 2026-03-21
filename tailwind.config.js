/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Анимации
    'animate-fade-in-up',
    'animate-float-slow',
    'animate-float-slower',
    'animate-pulse-slow',
    'animate-gradient-x',
    'animate-ping',
    'animate-pulse',
    // Задержки
    'delay-75',
    'delay-150',
    'delay-200',
    'delay-300',
    // Градиенты
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
    // Тени и свечение
    'shadow-purple-500/10',
    'shadow-blue-500/10',
    'shadow-green-500/50',
    'shadow-yellow-500/50',
    'hover:shadow-2xl',
    'hover:shadow-purple-500/20',
    // Позиционирование
    'sticky',
    'top-0',
    'z-50',
    'z-10',
    'z-0',
    // Border
    'border-gray-700/50',
    'hover:border-purple-500/50',
    'hover:border-blue-500/50',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
