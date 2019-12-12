const makeParagraph = (sentence) => {
return sentence.join(' ')
}

const averageDogAge = (pets) => {
let total = 0

  const dogs = pets.filter((pet)=>(pet.species)==='dog')
  const ages = dogs.map((dog)=>(dog.age))
for (age of ages){
total += age
}

return (total/ages.length)
}

const addToDigits = (num1,num2) => {
  let strNum= num1.toString()
  let arrNum= strNum.split('')
  const newArr = [];
  for (let i = 0; i< arrNum.length; i++){
  if (Number(arrNum[i])+num2 >= 10){
    newArr.push(10 - (Number(arrNum[i])+num2))
  }
else{
    newArr.push(Number(arrNum[i])+num2)
}
  }
  return Number(newArr.join(''))
  }


  const nightOwls = (peoples) => {

 return peoples.filter(function(people){
    if (people.asleep ===false && people.localTime >= 100 && people.localTime <= 400){
      return people
    }
  }
)
}

const nap = (peoples) => {
  

  for (people of peoples){
    if (people.asleep ===false && people.localTime >= 100 && people.localTime <= 400){
          return {
            name: name,
            localTime : localTime,
            asleep : true
          }

  }
  // return peoples.map(function(people){
  //   if (people.asleep ===false && people.localTime >= 100 && people.localTime <= 400){
  //     return {
  //       asleep : true
  //     }
  //   }
  // }
// )
}}




const findIndices = (item, func) => {
  const newArr = item.filter(indexOf(func))


}

const Faqtory = () => {
  return {
    questions: [],
    length : 0,
  
  addQuestion : function(question){
    this.questions.push(question)
    this.length ++
  },

  answerQuestion : function(){

  }
}}


class Dog  {
  constructor(name, breed, color){
this.name = name;
this.breed = breed;
this.color = color;
}
makeNoise(){
  return 'Woof.'
}
}

class GreatDane extends Dog{
  constructor(name, color){
super(name, 'Great Dane', color);
  }
  makeNoise(){
    return 'WOOF.'
  }
}

class Beagle extends Dog {
  constructor(name){
    super(name, 'Beagle', 'white/black/brown');
      }
      makeNoise(){
        return 'Awooooooooo.'
      }

}

class Pointer extends Dog {
  constructor(name ,color, points){
    super(name,'Pointer', color);
    this.points = points;
      }


      point(){
        if(this.points===true){
          return 'Over there!'
        }
        else {
          return 'Woof.'
        }
      }

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