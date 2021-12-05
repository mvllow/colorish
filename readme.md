# colorish

> Objectify alpha hex values

## Usage

```js
import colorish from 'colorish'

let colors = {
	iris: '#c4a7e7',
	gold: '#f6c177',
	pine: '#31748f',
}

let mutedColors = colorish(colors, 0.5)
// => { iris: '#c4a7e780', gold: '#f6c17780', pine: '#31748f80' }

let rgbColors = colorish(colors, 0.5, (color) => rgbHex(color))
// => { iris: 'rgb(196, 167, 231, 0.5)', gold: 'rgb(246, 193, 119, 0.5)', pine: 'rgb(49, 116, 143, 0.5)' }
```

Learn more about what colorish can do [here](https://github.com/mvllow/colorish/blob/main/test/main.ts)

## Related

- [pinecone](https://github.com/mvllow/pinecone)
