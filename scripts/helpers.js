// GENERATE Number between 0 - 255
function generateNumber() {
  return Math.floor(Math.random() * 256)
}

// convert a rgb color to hex
function RGBToHex(r, g, b) {
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)

  if (r.length == 1) r = '0' + r
  if (g.length == 1) g = '0' + g
  if (b.length == 1) b = '0' + b

  return '#' + r + g + b
}
