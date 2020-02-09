const d = 9

let m1 = 1
let m2 = Math.pow(100, d - 1)
m2 /= m1
m1 = 1
let v1 = 0
let v2 = -10
let count = 0
let u1
// let u2

while (v1 > v2) {
  // let u1 = (m1 * v1 + m2 * (2 * v2 - v1)) / (m1 + m2)
  // let u2 = (m2 * v2 + m1 * (2 * v1 - v2)) / (m1 + m2)
  u1 = (v1 + m2 * (2 * v2 - v1)) / (m2 + 1)
  v2 = (m2 * v2 + (2 * v1 - v2)) / (m2 + 1)
  v1 = u1
  count++
  // v1 = u1
  // v2 = u2
  if (v1 < 0) {
    v1 *= -1
    count++
  }
}

console.log(count)
