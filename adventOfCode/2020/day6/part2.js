document.querySelector('pre')
  .outerText
  .split('\n')
  .slice(0,-1)
  .reduce((acc, rec, i) => {
    if(!i) return [[... rec], acc[1]]
    if(!acc[0][0]){
      return [[... rec], acc[1]]
    }
    if(rec) {
      acc[0] = acc[0].filter(char => [... rec].includes(char))
      return acc
    }
    if(!rec){
      acc[1] += acc[0].length
      acc[0] = [rec]
      return acc
    }
  }, [[''], 0])