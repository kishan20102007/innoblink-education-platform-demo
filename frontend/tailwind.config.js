/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif']
      },
      colors: {
        brand: {
          blue: '#0f4aad',
          teal: '#08a7a5',
          green: '#21a66b',
          orange: '#ff7a1a',
          ink: '#101828'
        }
      },
      boxShadow: {
        premium: '0 28px 80px rgba(15, 74, 173, 0.16)',
        glass: '0 18px 50px rgba(16, 24, 40, 0.12)'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0f4aad 0%, #08a7a5 50%, #21a66b 100%)',
        'warm-gradient': 'linear-gradient(135deg, #ff7a1a 0%, #ffd166 100%)'
      }
    }
  },
  plugins: []
};
