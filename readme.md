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
```

Learn more about what colorish can do [here](https://github.com/mvllow/colorish/blob/main/test/main.ts)

## Related

- [pinecone](https://github.com/mvllow/pinecone)
