/** @type {import('tailwindcss').Config} */

export default{
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderRadius: {
            lg: '10px',
            md: '5px',
            sm: 'calc(var(--radius) - 4px)',
            },

            height: {
            smLogo: '40px',
            lgLogo: '500px'
            },

            colors: {
            // General Colours
            background: '#F5F1E8',
            backgroundPrimary: '#293040',
            backgroundSecondary: '#2B364D',
            
            leaf: '#1F8A78',
            cardPrimary: '#1F2432',
            cardSecondary: '#2B364D',
            cardPrimaryHover: '#3C4965',

            // Item specific
            sidebarPrimary: '#2B364D',
            sidebarSecondary: '#1F2432',
            sidebarButtonHover: '#555D6F',
            sidebarRowHover: '#46566E',
            sidebarActive: '#61DBFB',

            },

            animation: {
            'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
            'rotate-anticlockwise':
            'spin-anticlockwise 1.4s 0.25s ease-out forwards',
            rotate: 'rotate 2s linear infinite',
            },
            
        //   plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
        },
    },
}


