# delta-list

Data structure that maps an integer list to a list of relative integer deltas

```
npm install delta-list
```

## Usage

``` js
var delta = require('delta-list')

var deltas = delta.pack([1, 2, 3, 4, 5])
console.log(deltas) // prints [1, 1, 1, 1, 1]

var abs = delta.unpack(deltas)
console.log(abs) // prints [1, 2, 3, 4, 5]
```

## API

#### `array = delta.pack(list, [resultList])`

Map a list of integers to a list of relative deltas.
Optionally you can pass in a list to store the deltas in.

#### `array = delta.unpack(list, [resultList])`

Map a list of relative deltas to a list of integers.
Optionally you can pass in a list to store the integers in.

## When is this useful?

If you have a sorted list of integers and you want to transmit then over a network
it can be useful to only send the deltas and the resulting integers will be smaller
meaning you'll need fewer bytes to encode them.

## License

MIT
