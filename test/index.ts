import test from 'ava'
import colorish from '../source/index.js'

test('colorish accepts hex color', (t) => {
	let actual = colorish('#fa8072', 0.5)
	let expected = '#fa807280'

	t.is(actual, expected)
})

test('colorish accepts short hex color', (t) => {
	let actual = colorish('#fff', 0.5)
	let expected = '#ffffff80'

	t.is(actual, expected)
})

test('colorish accepts hex color without `#`', (t) => {
	let actual = colorish('fa8072', 0.5)
	let expected = '#fa807280'

	t.is(actual, expected)
})

test('colorish accepts short hex color without `#`', (t) => {
	let actual = colorish('fff', 0.5)
	let expected = '#ffffff80'

	t.is(actual, expected)
})

test('colorish accepts hex color object', (t) => {
	const colors = { purple: '#5e53b9', orange: '#ed856c' }

	let actual = colorish(colors, 0.5)
	let expected = { purple: '#5e53b980', orange: '#ed856c80' }

	t.deepEqual(actual, expected)
})

test('colorish handles single digit opacity', (t) => {
	let actual = colorish('#fa8072', 0.01)
	let expected = '#fa807203'

	t.is(actual, expected)
})

test('colorish rejects deep hex color object', (t) => {
	const colors: any = { purple: { base: '#5e53b9' } }

	t.throws(() => colorish(colors, 0.5))
})

test('colorish rejects invalid length hex color', (t) => {
	t.throws(() => colorish('#fa80722', 0.5))
})

test.failing('colorish rejects non-hex color', (t) => {
	t.throws(() => colorish('#ga8072', 0.5))
})
