export const state = {
	app: {
		picks: 1,
		cards: 1,
		directionType: 'threading',
	},
	card: {
		holesPerCard: 4,
		sides: ['D-A', 'A-B', 'B-C', 'C-D'],
		colors: {
			'D-A': 'red',
			'A-B': 'blue',
			'B-C': 'green',
			'C-D': 'orange',
		}
	},
	cards: {
		ids: [1],
		entities: {
			1: {
				cardNumber: 1,
				holes: {
					a: 'black',
					b: 'blue',
					c: 'yellow',
					d: 'red',
				},
				stitches: [1, 2, 3]
			}
		},
	},
	stitches: {
		ids: [1],
		entities: {
			1: {
				stitchNumber: 1,
				direction: 'Z',
				topLabel: 'D-A',
				turnDirection: 'forward',
				turnAmount: '1',
			}
		}
	}
}