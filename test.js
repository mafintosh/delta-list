var tape = require('tape')
var delta = require('./')

tape('packs', function (t) {
  t.same(delta.pack([42]), [42])
  t.same(delta.pack([0, 0, 0]), [0, 0, 0])
  t.same(delta.pack([1, 2, 3, 4, 5]), [1, 1, 1, 1, 1])
  t.same(delta.pack([1, 2, 2, 4, 5]), [1, 1, 0, 2, 1])
  t.end()
})

tape('unpacks', function (t) {
  t.same(delta.unpack([42]), [42])
  t.same(delta.unpack([0, 0, 0]), [0, 0, 0])
  t.same(delta.unpack([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5])
  t.same(delta.unpack([1, 1, 0, 2, 1]), [1, 2, 2, 4, 5])
  t.end()
})