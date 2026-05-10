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
				{
					label: 'Casa di Cura La Madonnina, Milan',
					mapUrl: 'https://www.google.com/maps/search/?api=1&query=Casa%20di%20Cura%20La%20Madonnina%20Milan',
				},
				{
					label: 'Rome American Hospital, Rome',
					mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rome%20American%20Hospital%20Rome',
				},
				{
					label: 'Clinica Mediterranea, Naples',
					mapUrl: 'https://www.google.com/maps/search/?api=1&query=Clinica%20Mediterranea%20Naples',
				},
				{
					label: 'The London Clinic, London',
					mapUrl: 'https://www.google.com/maps/search/?api=1&query=The%20London%20Clinic%20London',
				},
			],
			contactTitle: 'Contact',
			contactLines: ['+39 02 1234 5678 (IT)', '+44 20 1234 5678 (UK)', 'info@drperrotta.com'],
			legal: ['Privacy Policy', 'Cookie Policy', 'Terms of Use'],
			copyright: '\u00A9 2026 Dr. Gerardo Perrotta. All rights reserved.',
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
						mapUrl:
							'https://www.google.com/maps/search/?api=1&query=Casa%20di%20Cura%20La%20Madonnina%20Via%20Quadronno%2029%20Milan',
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
						mapUrl:
							'https://www.google.com/maps/search/?api=1&query=Rome%20American%20Hospital%20Via%20Emilio%20Longoni%2081%20Rome',
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
						mapUrl:
							'https://www.google.com/maps/search/?api=1&query=Clinica%20Mediterranea%20Via%20Orazio%202%20Naples',
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
						mapUrl:
							'https://www.google.com/maps/search/?api=1&query=The%20London%20Clinic%2020%20Devonshire%20Place%20London',
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
					'https://images.pexels.com/photos/19563295/pexels-photo-19563295.jpeg?auto=compress&cs=tinysrgb&w=1600',
				portrait:
					'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80',
			},
		},
		about: {
			metadata: {
				title: 'About Dr. Gerardo Perrotta | General and Colorectal Surgeon',
				description:
					'Learn more about Dr. Gerardo Perrotta, his surgical philosophy, international training, credentials, and professional memberships.',
			},
			hero: {
				badges: ['GMC Registered', 'English & Italian'],
				title: {
					lineOne: 'Bridging',
					lineTwo: 'Borders in',
					lineThree: 'Surgical',
					lineFour: 'Excellence',
				},
				description:
					'Specialist General & Colorectal Surgeon practicing in Italy and the UK. Dedicated to providing patient-centered care with international expertise and a compassionate touch.',
				primaryCta: 'Book Consultation',
				secondaryCta: 'View My CV',
				image: '/about-portrait.png',
				imageAlt: 'Portrait of Dr. Gerardo Perrotta',
			},
			biography: {
				titleLineOne: 'Biography &',
				titleLineTwo: 'Philosophy',
				paragraphs: [
					'Dr. Perrotta believes in a holistic approach to surgery, combining advanced technical skills with compassionate patient care. With extensive experience in both the Italian and UK healthcare systems, he brings a unique cross-border perspective to colorectal and general surgery.',
					'His journey began with a deep curiosity about the human body and a desire to make a tangible difference in people\'s lives. This led him to pursue rigorous training across Europe, allowing him to master diverse surgical techniques and patient care protocols.',
					'Today, Dr. Perrotta is committed to minimally invasive techniques that reduce recovery time and improve outcomes. He views every patient interaction as a partnership, ensuring that individuals feel heard, understood, and confident in their treatment plan.',
				],
			},
			career: {
				title: 'Career Journey',
				description: 'A timeline of professional milestones across Europe.',
				items: [
					{
						period: '2018 - Present',
						title: 'Consultant General Surgeon',
						location: 'London, United Kingdom',
						description: 'Leading complex colorectal procedures and mentoring junior surgeons in NHS trusts.',
					},
					{
						period: '2015 - 2018',
						title: 'Fellowship in Colorectal Surgery',
						location: 'Rome, Italy',
						description: 'Specialized training focusing on laparoscopic techniques and oncological surgery.',
					},
					{
						period: '2010 - 2015',
						title: 'Residency in General Surgery',
						location: 'University of Naples, Italy',
						description: 'Comprehensive training in emergency and elective surgery.',
					},
				],
			},
			credentials: [
				{
					title: 'Education',
					items: [
						{
							label: 'Doctor of Medicine (MD)',
							detail: 'University of Naples Federico II, Italy',
						},
						{
							label: 'Specialization in General Surgery',
							detail: 'Cum Laude',
						},
					],
				},
				{
					title: 'Certifications',
					items: [
						{
							label: 'Board Certified Surgeon',
							detail: 'Italy & UK',
						},
						{
							label: 'GMC Specialist Register',
							detail: 'General Surgery',
						},
						{
							label: 'Advanced Laparoscopy',
							detail: 'Certified Practitioner',
						},
					],
				},
				{
					title: 'Memberships',
					items: [
						{
							label: 'General Medical Council (UK)',
							detail: '',
						},
						{
							label: 'Italian Medical Council',
							detail: '',
						},
						{
							label: 'Association of Coloproctology',
							detail: '',
						},
						{
							label: 'European Society of Surgery',
							detail: '',
						},
					],
				},
			],
			cta: {
				title: 'Ready to discuss your health?',
				description:
					'Book a consultation at one of my clinics in London or Rome. Telemedicine appointments are also available.',
				primary: 'Book Appointment',
				secondary: 'Contact Clinic',
			},
		},
	},
	it: null,
} as const;

export type SiteMessages = typeof messages.en;

export function getMessages(locale: Locale = defaultLocale): SiteMessages {
	return messages[locale] ?? messages[defaultLocale];
}
