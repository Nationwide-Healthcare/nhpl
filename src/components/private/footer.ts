import { treatments } from './treatments.ts'

export const sections = [
	{
		title: 'Treatments',
		links: treatments.map((treatment) => {
			return {
				name: treatment.name,
				href: `/treatments/${treatment.href}`
			}
		})
	},

	{
		title: 'Our Practice',
		links: [
			{
				name: 'About Us',
				href: '/about-us'
			},
			{
				name: 'Our Values',
				href: '/our-values'
			},
			{
				name: 'Patient Charter',
				href: '/patient-charter'
			},
			{
				name: 'Privacy Policy',
				href: '/privacy-policy'
			},
			{
				name: 'Feedback',
				href: '/feedback'
			},
			{
				name: 'Compliance',
				href: '/compliance'
			}
		]
	},

	{
		title: 'Contact',
		links: [
			{
				name: '0115 970 0007',
				href: 'tel:01159700007'
			},
			{
				name: 'patientrelationsteam@nationwidehealthcareproviderslimited.co.uk',
				href: 'mailto:patientrelationsteam@nationwidehealthcareproviderslimited.co.uk'
			},
			{
				name: '69 - 75 Radford Road, Hyson Green, Nottingham NG7 5DR',
				href: 'https://maps.google.com/?q=Seven%20Dental'
			}
		]
	}
] as const
