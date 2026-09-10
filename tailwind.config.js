/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FDFBF7',  /* Warm Cream Background */
          100: '#F4EBE1',
          500: '#D97706',
          800: '#7C2D12',
          900: '#1C1917',  /* Text color */
        },
        brand: {
          navy: '#1A2B4C', /* Navy sesuai garis logo */
          brown: '#C47A47' /* Warm accent */
        }
      }
    },
  },
  plugins: [],
}
