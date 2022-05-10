let {Person} = require('./person')

 let personita = new Person('javi','martin')


console.log(personita)

personita.printHobbies()
console.log(personita.printImc())
personita.printAll()