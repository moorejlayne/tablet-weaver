import { createSlice } from '@reduxjs/toolkit'

const toggleDirection = (currentDirection) => {
	return currentDirection === 'Z' ? 'S' : 'Z'
}


export const stitchSlice = createSlice({
	name: 'stitch',
	initialState: {
		threadDirection: 'Z',
		cardDirection: 'S',
		topLabel: 'D-A',
		turnDirection: 'forward',
		turnAmount: '1',
	},
	reducers: {
		flipCard: (state) => {
			state.threadDirection = toggleDirection(state.threadDirection)
			state.cardDirection = toggleDirection(state.cardDirection)
		},

	}
})