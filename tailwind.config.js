const proseCss = {
  css: {
    maxWidth: 'none',
    p: {
      marginTop: '4px',
      marginBottom: '4px',
    },
    ul: {
      marginTop: '4px',
      marginBottom: '4px',
    },
    div: {
      maxWidth: '100%',
      overflow: 'auto'
    },
    'ul > li > *': {
      marginTop: '4px',
      marginBottom: '4px',
    },
    img: {
      maxWidth: '100%',
      margin: '2px auto',
    }
  }
};

module.exports = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: proseCss,
        sm: proseCss,
        lg: proseCss,
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
