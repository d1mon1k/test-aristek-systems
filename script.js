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

  const updatedData = {}

  for (let obj of arr) {
    if (!obj[`${key}`]) {
      return {}
    }
    const value = obj[`${key}`]
    if (!updatedData[value]) {
      updatedData[value] = []
    }
    updatedData[value].push(obj)
  }
  return updatedData
}

console.log(groupBy(input, 'universe'))
