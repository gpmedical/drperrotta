import { defaultLocale, type Locale } from './config';

const messages = {
	en: {
		metadata: {
			title: 'Dr. Gerardo Perrotta | General and Colorectal Surgeon',
			description:
				'Professional website for Dr. Gerardo Perrotta, surgeon specializing in minimally invasive general and colorectal surgery.',
		},
		header: {
			brand: {
				name: 'Dr. Gerardo Perrotta',
				title: 'General & Colorectal Surgeon',
			},
			navigation: [
				{ href: '/', label: 'Home' },
				{ href: '/about', label: 'About' },
				{ href: '/treatments', label: 'Treatments' },
				{ href: '/blog', label: 'Blog' },
				{ href: '/contact', label: 'Contact' },
			],
			consultationLabel: 'Book Consultation',
			languageLabel: 'Language',
			languageComingSoon: 'Italian coming soon',
		},
		footer: {
			description:
				'Dedicated to providing high-quality surgical care with a patient-centered approach, licensed in Italy and the UK.',
			quickLinksTitle: 'Quick Links',
			quickLinks: [
				{ href: '/about', label: 'About Dr. Perrotta' },
				{ href: '/treatments', label: 'Conditions Treated' },
				{ href: '/blog', label: 'Surgical Insights Blog' },
				{ href: '/contact', label: 'Book an Appointment' },
			],
			locationsTitle: 'Locations',
			locations: [
				'Casa di Cura La Madonnina, Milan',
				'Rome American Hospital, Rome',
				'Clinica Mediterranea, Naples',
				'The London Clinic, London',
			],
			contactTitle: 'Contact',
			contactLines: ['+39 02 1234 5678 (IT)', '+44 20 1234 5678 (UK)', 'info@drperrotta.com'],
			legal: ['Privacy Policy', 'Cookie Policy', 'Terms of Use'],
			copyright: '© 2026 Dr. Gerardo Perrotta. All rights reserved.',
		},
		home: {
			hero: {
				eyebrow: 'Excellence in surgery',
				title: 'Minimally Invasive General and Colorectal Surgery',
				description:
					'Providing expert surgical care with a focus on rapid patient recovery and personalized treatment plans.',
				primaryCta: 'Request Appointment',
				secondaryCta: 'Watch Introduction',
			},
			accreditations: ['NHS', 'SICCR', 'GMC', 'SICE'],
			about: {
				kicker: 'Meet Dr. Perrotta',
				title: 'Compassionate care, world-class expertise.',
				body:
					'Specializing in general and colorectal surgery, Dr. Perrotta brings international expertise to his practice, ensuring the highest standards of care in both Italy and the UK. With a focus on minimally invasive techniques, he is dedicated to reducing recovery times and improving patient outcomes.',
				cards: [
					{
						title: 'Minimally Invasive',
						description: 'Advanced laparoscopic techniques for faster recovery and less pain.',
					},
					{
						title: 'Dual Certified',
						description: 'Fully licensed and practicing surgeon in both Italy and the United Kingdom.',
					},
				],
				linkLabel: 'Read full biography',
				quote:
					'"My goal is to provide a surgical path that is as smooth and comfortable as possible."',
			},
			presence: {
				title: 'Global Presence',
				description: 'Consulting and operating in leading medical hubs across Europe.',
				locations: [
					{
						country: 'Italy',
						city: 'Milan',
						clinic: 'Casa di Cura La Madonnina',
						address: 'Via Quadronno, 29',
						postalCode: '20122 Milano MI',
						mapLabel: 'View Map',
						image:
							'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
					},
					{
						country: 'Italy',
						city: 'Rome',
						clinic: 'Rome American Hospital',
						address: 'Via Emilio Longoni, 81',
						postalCode: '00155 Roma RM',
						mapLabel: 'View Map',
						image:
							'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80',
					},
					{
						country: 'Italy',
						city: 'Naples',
						clinic: 'Clinica Mediterranea',
						address: 'Via Orazio, 2',
						postalCode: '80122 Napoli NA',
						mapLabel: 'View Map',
						image:
							'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80',
					},
					{
						country: 'UK',
						city: 'London',
						clinic: 'The London Clinic',
						address: '20 Devonshire Place',
						postalCode: 'London W1G 6BW',
						mapLabel: 'View Map',
						image:
							'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80',
					},
				],
			},
			conditions: {
				title: 'Conditions Treated',
				description: 'Expert diagnosis and surgical treatment for a wide range of conditions.',
				linkLabel: 'View all conditions',
				items: [
					{ title: 'Colorectal Cancer', description: 'Early detection & surgery' },
					{ title: 'Hernias', description: 'Inguinal, umbilical, incisional' },
					{ title: 'Proctology', description: 'Haemorrhoids, fissures, fistulas' },
					{ title: 'Gallbladder', description: 'Gallstones, gallbladder polyps' },
					{ title: 'IBD Surgery', description: "Crohn's disease & ulcerative colitis" },
					{ title: 'Diverticular Disease', description: 'Diverticulosis & diverticulitis' },
				],
			},
			cta: {
				title: 'Ready to prioritize your health?',
				description:
					'Schedule a consultation to discuss your personalized treatment plan. Telemedicine appointments also available.',
				primary: 'Book a Consultation',
				secondary: 'Contact Us',
			},
			images: {
				hero:
					'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1600&q=80',
				portrait:
					'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80',
			},
		},
	},
	it: null,
} as const;

export type SiteMessages = typeof messages.en;

export function getMessages(locale: Locale = defaultLocale): SiteMessages {
	return messages[locale] ?? messages[defaultLocale];
}
