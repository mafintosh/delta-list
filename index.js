exports.pack = function (list, result) {
  if (!result) result = new Array(list)
  var acc = 0
  for (var i = 0; i < list.length; i++) {
    var delta = list[i] - acc
    acc = list[i]
    result[i] = delta
  }
  return result
}

exports.unpack = function (list, result) {
  if (!result) result = new Array(list.length)
  var acc = 0
  for (var i = 0; i < list.length; i++) {
    acc += list[i]
    result[i] = acc
  }
  return result
}
