export const treatments = [
	{
		name: 'Check Ups',
		description: 'Regular examination to ensure your teeth and gums are as healthy as possible',
		image: {
			src: 'check-up.webp',
			alt: 'Dental check-up depiction in a bright, high-contrast setting.'
		},
		costs: [
			{
				type: 'NHS',
				cost: '£25.80'
			},
			{
				type: 'Private',
				cost: 'From £30.00'
			}
		],
		href: 'check-ups'
	},

	{
		name: 'Fillings',
		description:
			'Prevent toothache, bad breath, infection, and even the loss of teeth which can result from a cavity or damaged tooth',
		image: {
			src: 'filling.webp',
			alt: 'Dental filling in a dark, low-contrast setting.'
		},
		costs: [
			{
				type: 'NHS',
				cost: '£70.70'
			},
			{
				type: 'Private',
				cost: 'From £79.99'
			}
		],
		href: 'fillings'
	},

	{
		name: 'Extractions',
		description: 'A procedure to remove teeth that are severely damaged, impacted, or decayed.',
		image: {
			src: 'extraction.webp',
			alt: 'Tooth extraction procedure in a bright, low-contrast setting.'
		},
		costs: [
			{
				type: 'NHS',
				cost: '£70.70'
			},
			{
				type: 'Private',
				cost: 'From £139.99'
			}
		],
		href: 'extractions'
	},

	{
		name: 'Emergency',
		description:
			'Urgent dental care for unexpected issues like severe pain, swelling, or trauma to the mouth.',
		image: {
			src: 'emergency.webp',
			alt: 'Emergency dental care in a bright, low-contrast setting.'
		},
		costs: [
			{
				type: 'NHS',
				cost: '£25.80'
			},
			{
				type: 'Private',
				cost: 'From £59.99'
			}
		],
		href: 'emergency'
	},

	{
		name: 'Whitening',
		description:
			'A cosmetic treatment designed to enhance the brightness of teeth, removing stains and discoloration.',
		image: {
			src: 'teeth-whitening.webp',
			alt: ''
		},
		costs: [
			{
				type: 'Private',
				cost: 'From £299.99'
			}
		],
		href: 'whitening'
	},

	{
		name: 'Invisalign',
		description:
			"A modern approach to straightening teeth using custom-made aligners crafted for an individual's teeth.",
		image: {
			src: 'invisalign.webp',
			alt: 'Invisalign aligners in a dark, low-contrast setting.'
		},
		costs: [
			{
				type: 'Private',
				cost: 'From £2999.99'
			}
		],
		href: 'invisalign'
	},

	{
		name: 'Implants',
		description:
			'Artificial tooth roots that provide a strong foundation for fixed or removable replacement teeth.',
		image: {
			src: 'implant.webp',
			alt: 'Dental implant in a bright, low-contrast setting.'
		},
		costs: [
			{
				type: 'Private',
				cost: 'From £2399.99'
			}
		],
		href: 'implants'
	},

	{
		name: 'Crowns',
		description:
			'Tooth-shaped caps placed over a tooth to restore its shape, size, strength, and appearance.',
		image: {
			src: 'crown.webp',
			alt: 'Dental crown in a dark, high-contrast setting.'
		},
		costs: [
			{
				type: 'NHS',
				cost: '£306.80'
			},
			{
				type: 'Private',
				cost: 'From £449.99'
			}
		],
		href: 'crowns'
	},

	{
		name: 'Dentures',
		description: 'Removable replacements for missing teeth and surrounding tissues.',
		image: {
			src: 'dentures.webp',
			alt: 'Dentures in a dark, low-contrast setting.'
		},
		costs: [
			{
				type: 'NHS',
				cost: '£306.80'
			},
			{
				type: 'Private',
				cost: 'From £399.99'
			}
		],
		href: 'dentures'
	},

	{
		name: 'Bridges',
		description:
			'Dental restorations used to fill the gap created by one or more missing teeth.',
		image: {
			src: 'bridges.webp',
			alt: 'Dental bridges in a dark, high-contrast setting.'
		},
		costs: [
			{
				type: 'NHS',
				cost: '£306.80'
			},
			{
				type: 'Private',
				cost: 'From £449.99'
			}
		],
		href: 'bridges'
	},

	{
		name: 'Periodontal',
		description:
			'Treatments focusing on the care and maintenance of the supporting structures of the teeth, including gums and bone.',
		image: {
			src: 'periodontal.webp',
			alt: ''
		},
		costs: [
			{
				type: 'Private',
				description: 'Scale & Polish',
				cost: 'From £54.99'
			},
			{
				type: 'Private',
				description: 'Airflow Polish & Clean',
				cost: 'From £59.99'
			}
		],
		href: 'periodontal'
	}
] as const
