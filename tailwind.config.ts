import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				'category-tag-active': '0px 0px 0px 2px rgba(0, 0, 0, 0.25), 0px 0px 12px 0px rgba(138, 255, 71, 0.20), 0px 0px 5px 1px rgba(175, 255, 71, 0.50) inset'
			},
			textShadow: {
				'multi': `
				  0px 2px 0px #FFFFFF7A, 
				  0px -4px 16px #FFFFFF40, 
				  0px 16px 32px -8px #F0F1FF52, 
				  0px 4px 8px #F0F1FF1F, 
				  0px 2px 6px #F0F1FF3D, 
				  0px 1px 3px #F0F1FF3D
				`,
				custom: `
          0px 1px 3px rgba(240, 241, 255, 0.24),
          0px 2px 6px rgba(240, 241, 255, 0.24),
          0px 4px 8px rgba(240, 241, 255, 0.12),
          0px 16px 32px rgba(240, 241, 255, 0.32)
        `,

			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'category-gradient': 'linear-gradient(90deg, rgba(140, 227, 57, 0.40) -5.56%, rgba(140, 227, 57, 0.00) 100%), rgba(255, 255, 255, 0.20)',
				'category-tag-active': 'radial-gradient(50.83% 100% at 50% 0%, rgba(138, 255, 71, 0.50) 0%, rgba(59, 153, 43, 0.08) 100%)',
				'category-tag': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.12) 100%)',
				'gradient-black': 'linear-gradient(180deg, rgba(11, 11, 11, 0) 50%, rgba(11, 11, 11, 0.6) 59.51%, #0B0B0B 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
			},
			fontFamily: {
				satoshi: ['var(--font-satoshi)'],
				ppneubit: ['var(--font-ppneubit)']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate"),
	plugin(function ({ matchUtilities, theme }: { matchUtilities: any; theme: any }) {
		matchUtilities(
			{
				'text-shadow': (value: any) => ({
					textShadow: value,
				}),
			},
			{ values: theme('textShadow') }
		)
	}),
	],
};
export default config;
