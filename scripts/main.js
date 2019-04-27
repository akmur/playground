import '../styles/styles.scss'
// Functional Programming for Beginners Exercise

const reviews = [
  4.5,
  4.0,
  5.0,
  2.0,
  1.0,
  5.0,
  3.0,
  4.0,
  1.0,
  5.0,
  4.5,
  3.0,
  2.5,
  2.0
]

const reducer = (a, b) => {
  return {
    ...a,
    [b]: 1 + (a[b] ? a[b] : 0)
  }
}

const result = reviews.reduce(reducer, {})

console.log(result)
