tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                brand: {
                    blue: '#1e3a8a',
                    accent: '#3b82f6',
                    light: '#eff6ff',
                    dark: '#1F2937', // This will generate text-brand-dark, bg-brand-dark, etc.
                    red: '#DC2626'   // This will generate text-brand-red, bg-brand-red, etc.
                }
            },
            boxShadow: {
                'premium': '0 10px 40px -10px rgba(59,130,246,0.3)',
                'card': '0 4px 20px -2px rgba(0,0,0,0.05)',
                'card-hover': '0 20px 40px -4px rgba(0,0,0,0.1)'
            }
        }
    }
}
