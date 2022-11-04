/** @type {import('tailwindcss').Config} */
module.exports={
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'ssm': '320px',
      // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // 'tb': '900px',
      // // => @media (min-width: 768px) { ... }

      // 'smd': '1024px',
      // 'mmd': '1200px',

      // 'lg': '1330px',
      // // => @media (min-width: 1024px) { ... }

      // 'xl': '1450px',
      // // => @media (min-width: 1280px) { ... }

      // '2xl': '1730px',
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
