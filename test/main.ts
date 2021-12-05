import test from 'ava'
import colorish from '../source/index.js'

const stuff = {iris: '#c4a7e7', gold: '#f6c177'}
const nestedStuff = {stuff}

test('converts hex value', (t) => {
	t.is(colorish('fa8072', 0.5), '#fa807280')
	t.is(colorish('#fa8072', 0.01), '#fa807203')
})

test('converts short hex value', (t) => {
	t.is(colorish('c00', 0.5), '#cc000080')
	t.is(colorish('#c00', 0.5), '#cc000080')
})

test('converts object of hex values', (t) => {
	t.deepEqual(colorish(stuff, 0.5), {
		iris: '#c4a7e780',
		gold: '#f6c17780',
	})
})

test('converts deep object of hex values', (t) => {
	t.deepEqual(colorish(nestedStuff, 0.5), {
		stuff: {iris: '#c4a7e780', gold: '#f6c17780'},
	})
})

test('callback applies to each value', (t) => {
	t.deepEqual(
		colorish(stuff, 0.5, (value) => `${value}_modified`),
		{
			iris: '#c4a7e780_modified',
			gold: '#f6c17780_modified',
		}
	)
})

test('rejects non-hex values', (t) => {
	t.throws(() => colorish('%fa8072', 0.5))
	t.throws(() => colorish('#ga8072', 0.5))
})
