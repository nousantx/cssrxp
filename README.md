# `cssrxp`

A small `RegExp` library related with CSS data-types.

## Installation

```bash
npm install cssrxp
```

## Usage Example

```javascript
// esm
import { is, has } from 'cssrxp'

// cjs
const { is, has } = require('cssrxp')

// iife (browser usage)
// <script src="https://cdn.jsdelivr.net/npm/cssrxp"></script>
const { is, has } = cssrxp

is.number.test('5') // true
is.number.test('5px') // false
is.length.test('5px') // true
is.length.test('5ms') // false
is.dimension.test('5ms') // true

has.number.test('margin: 5rem') // true
has.number.test('my-px') // false
has.length.test('margin: 5px') // true
has.length.test('transition: 5ms') // false
has.dimension.test('transition: 5ms') // true
```

## LICENSE

MIT
