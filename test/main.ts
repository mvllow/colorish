import test from 'ava'
import colorish from '../source/index.js'

test('converts hex value', (t) => {
	t.is(colorish('fa8072', 0.5), '#fa807280')
	t.is(colorish('#fa8072', 0.5), '#fa807280')
	t.is(colorish('#fa8072', 0.01), '#fa807203')
})

test('converts short hex value', (t) => {
	t.is(colorish('fff', 0.5), '#ffffff80')
	t.is(colorish('#fff', 0.5), '#ffffff80')
})

test('converts object of hex values', (t) => {
	t.deepEqual(colorish({purple: '#5e53b9', orange: '#ed856c'}, 0.5), {
		purple: '#5e53b980',
		orange: '#ed856c80',
	})
})

test('rejects deep hex color object', (t) => {
	const colors: any = {purple: {base: '#5e53b9'}}

	t.throws(() => colorish(colors, 0.5))
})

test('rejects non-hex values', (t) => {
	t.throws(() => colorish('#fa8072x', 0.5))
	t.throws(() => colorish('#ga8072', 0.5))
})
