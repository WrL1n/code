const entries = new Map([
  ['AEIOULNRST', 1],
  ['DG ', 2],
  ['BCMP', 3],
  ['FHVWY', 4],
  ['K', 5],
  ['JX', 8],
  ['QZ', 10]
])

export const score = (str) => {
  if (!str) return 0;
  return [...(str.toUpperCase())].reduce((acc,rec) => {
    entries.forEach((value,key) => {
      if (key.includes(rec)) acc += value
    })
    return acc
  }, 0)
};
