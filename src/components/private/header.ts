export const headers = [
	{
		name: 'main',
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
			{
				name: 'Fees & Finance',
				href: '/fees/',
			},
			{
				name: 'About Us',
				href: '/about-us/',
			},
		],
	},
] as const;
