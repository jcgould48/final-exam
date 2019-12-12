const makeParagraph = (sentence) => {
return sentence.join(' ')
}

const averageDogAge = (pets) => {
  // pets.map
}

const addToDigits = (num1,num2) => {
  let strNum= num1.toString()
  let arrNum= strNum.split('')
  const newArr = [];
  for (let i = 0; i< arrNum.length; i++){
    newArr.push(Number(arrNum[i])+num2)
  
  }
  return Number(newArr.join(''))
  }

const nightOwls = () => {

}

const nap = () => {

}

const findIndices = () => {

}

const Faqtory = () => {

}


class Dog {

}

class GreatDane {

}

class Beagle {

}

class Pointer {

}


module.exports = {
  makeParagraph,
  averageDogAge,
  addToDigits,
  nightOwls,
  nap,
  findIndices,
  Faqtory,
  Dog,
  GreatDane,
  Beagle,
  Pointer,
}