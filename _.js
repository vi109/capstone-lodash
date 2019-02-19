const _ = {
  clamp(number,lower,upper){
    return number < lower ? lower : number > upper ? upper : number
  },
  inRange(number,start,end){
    if(!end){
     end = start
     start = 0
    }
    if(start > end){
      let temp = end
      end = start
      start = temp
    }
    return number >= start && number < end ? true : false
  },
  words(string){
  return string.split(" ")
  },
  pad(string, length){
    if(length <= string.length){
      return string
    }
    const start = Math.floor((length - string.length) / 2)
    const end = length - string.length - start
    const newString = ' '.repeat(start) + string + ' '.repeat(end)
    return newString
  },
  has(object, key){
    return object[key] !== undefined
  },
  invert(object){
 		let newObject = {}
		for (let key in object){
    	let orgVal = object[key]
      newObject[orgVal] = key
    	}
 		return newObject
  },
  findKey(object, predicate){
    for (let key in object){
      if(predicate(object[key])){
        return key
      }
    }
    return undefined
  },
  drop(array, number){
    if(!number){
      number = 1
    }
    newArray = array.slice(number)
    return newArray
  },
  


};





// Do not write or modify code below this line.
module.exports = _;
