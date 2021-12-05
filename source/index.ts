// Thanks to @sindresorhus for hex logic (hex-rgb)[https://github.com/sindresorhus/hex-rgb]
const hexCharacters = 'a-f\\d'
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi')
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i')

function alphaToHex(alpha: number) {
	const hex = Math.round(alpha * 255).toString(16)

	if (hex.length === 1) return `0${hex}`
	if (hex.length !== 2) return 'ff'
	return hex
}

function colorish(
	color: string | Record<string, any>,
	alpha: number,
	hook?: (arg0: string) => string
) {
	if (typeof color === 'object') {
		const colors = {}

		for (const key in color) {
			if (typeof color[key] !== 'undefined') {
				Object.assign(colors, {[key]: colorish(color[key], alpha, hook)})
			}
		}

		return colors
	}

	if (
		typeof color !== 'string' ||
		nonHexChars.test(color) ||
		!validHexSize.test(color)
	) {
		throw new TypeError('Expected a valid hex string')
	}

	const hexAlpha = alphaToHex(alpha)

	let hex = color.replace(/^#/, '')

	if (hex.length !== 3 && hex.length !== 6 && hex.length !== 8) {
		throw new TypeError('Expected valid hex length')
	}

	if (hex.length === 3) {
		hex = `${hex.charAt(0)}${hex.charAt(0)}${hex.charAt(1)}${hex.charAt(
			1
		)}${hex.charAt(2)}${hex.charAt(2)}`
	}

	if (hex.length === 8) {
		return hook ? hook(`#${hex}`) : `#${hex}`
	}

	return hook ? hook(`#${hex}${hexAlpha}`) : `#${hex}${hexAlpha}`
}

export {colorish}
export default colorish
