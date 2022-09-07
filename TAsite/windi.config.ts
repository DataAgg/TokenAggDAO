import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	shortcuts: {
    'wtext1': 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500',
    'vstack': 'flex flex-col',
    'icon': 'w-6 h-6 fill-current',
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

