export const headers = [
	{
		name: 'main',
		links: [
			{
				name: 'Home',
				href: '/',
			},
			{
				name: 'Dental Foundation Training',
				href: '/dft/',
			},
			{
				name: 'European Graduates',
				href: 'https://eeadentalgraduates.co.uk/',
			},
			{
				name: 'Structured Learning Program',
				href: '/slp/',
			},
			{
				name: 'PLVE',
				href: 'https://plvedental.co.uk/',
			},
			{
				name: 'Gallery',
				href: '/gallery/',
			},
		],
	},
	{
		name: 'practice',
		links: [
			{
				name: 'Home',
				href: '/',
			},
			{
				name: 'New Patients',
				href: '/new-patients/',
			},
			{
				name: 'Treatments',
				href: '/treatments/',
			},
			{
				name: 'Emergency',
				href: '/treatments/emergency/',
			},
			/*
			{
				name: 'Fees & Finance',
				href: '/fees/',
			},
			*/
			{
				name: 'About Us',
				href: '/about-us/',
			},
		],
	},
] as const;
