import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	shortcuts: {
    'wtext1': 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500',
		'btn':'inline-flex items-center justify-center rounded border border-transparent font-medium text-center text-base leading-snug transition py-3 px-6 shadow-lg ease-in duration-200 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2',
    'wbtn1': 'btn text-white mb-4 sm:mb-0',
    'wicon': 'w-7 h-7 inline-block',
    'wicon-s': 'w-5 h-5 inline-block',
    'wtablecell': 'table-cell border p-1',
    'app': 'text-red',
    'app-border': 'border-gray-200 dark:border-dark-300',
  },
  extract: {
    include: ['index.html', 'src/**/*.{vue,html,js,ts}'],
    exclude: ['node_modules', '.git'],
  },
	darkMode: 'class',
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
  ],
  safelist: ['md-body', 'md-body-sm', 'max-w-none'],
  theme: {
    extend: {
      colors: {
        'primary': '#388370',
        'primary-light-1': '#B9C6C3',
        'primary-light-2': '#BFBFBF',
        'secondary': '#839F98',
      },
      fontFamily: {
        heading: ['Work Sans', 'sans-serif'],
        sans: ['Nunito', 'sans-serif'],
        // serif: [...defaultTheme.fontFamily.serif],
        // mono: [...defaultTheme.fontFamily.mono],
      },
    },
  },
});

