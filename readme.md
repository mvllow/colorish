# colorish

> Normalize color hex values

Useful when working with color objects, such as in CSS in JS or [pinecone](https://github.com/mvllow/pinecone)

## Usage

```js
import colorish from 'colorish'

let colors = {
	purple: '#5e53b9',
	orange: '#ed856c',
	green: '#55b79c',
}

let mutedColors = colorish(colors, 0.5)
// mutedColors.purple = '#5e53b980'
```

Learn more about what colorish can do [here](https://github.com/mvllow/colorish/blob/test/index.ts)
