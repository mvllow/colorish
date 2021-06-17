type Color = string | { [key: string]: string }
type Opacity = number

function convertDecimalToHex(decimal: number) {
	const hex = Math.round(decimal * 255).toString(16)

	if (hex.length === 1) return `0${hex}`
	if (hex.length !== 2) return 'ff'
	return hex
}

function normalizeHex(hex: string) {
	let workingHex = hex.replace('#', '')

	if (workingHex.length !== 3 && workingHex.length !== 6) {
		throw new Error(`Invalid hex code: ${hex}`)
	}

	if (workingHex.length === 3) {
		workingHex = workingHex.repeat(2)
	}

	return `#${workingHex}`
}

function colorish(color: Color, opacity: Opacity) {
	if (typeof color === 'object') {
		const colors: typeof color = {}

		for (const key in color) {
			if (typeof color[key] === 'object') {
				throw new Error('Nested color objects are not supported')
			}

			Object.assign(colors, { [key]: colorish(color[key], opacity) })
		}

		return colors
	}

	return `${normalizeHex(color)}${convertDecimalToHex(opacity)}`
}

export default colorish
export { colorish }
