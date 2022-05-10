class Person
{
    constructor(nombre,apellido)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = 1.72
        this.peso = 61
        this.pelo = "rubio"
        this.coche = true;
        this.yearOfBirth = 1993 ;
        this.hobbies=["conducir","leer","jugar al futbol","jugar a la play "]
    }

    printImc (){
        return  this.peso/(this.altura*2);
    }

    
   printAll()
   {
      console.log(this.nombre + this.apellido + -this.altura+ -this.peso + -this.coche + -this.yearOfBirth + "\n")
   }
   printHobbies()
   {
       console.log(this.hobbies)
   }
}

module.exports={Person}