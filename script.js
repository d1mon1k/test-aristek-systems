const input = [
  { id: 1, universe: 'marvel', name: 'Spider Man' },
  { id: 2, universe: 'marvel', name: 'Iron Man' },
  { id: 3, universe: 'dc', name: 'Aqua Man' },
  { id: 4, universe: 'dc', name: 'Bat Man' },
  { id: 5, universe: 'marvel', name: 'Hulk' },
]

const groupBy = (arr, key) => {
  if (!arr || !key) {
    throw new TypeError('Expected two arguments')
  }

  return arr.reduce((result, obj) => {
    if (!obj[`${key}`]) {
      return {}
    }
    const value = obj[`${key}`]
    if (!result[value]) {
      result[value] = []
    }
    result[value].push(obj)
    return result
  }, {})
}

console.log(groupBy(input, 'universe'))
