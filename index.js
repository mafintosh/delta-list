exports.pack = function (list, result) {
  if (!result) result = new Array(list)
  for (var i = 0; i < list.length; i++) result[i] = list[i] - (i && list[i - 1])
  return result
}

exports.unpack = function (list, result) {
  if (!result) result = new Array(list.length)
  for (var i = 0; i < list.length; i++) result[i] = list[i] + (i && result[i - 1])
  return result
}
