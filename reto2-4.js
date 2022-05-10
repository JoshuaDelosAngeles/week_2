class person
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
    }

    printImc (){
        return  this.peso/(this.altura*2);
    }

    
   printAll()
   {
      console.log(this.nombre + this.apellido + -this.altura+ -this.peso + -this.coche + -this.yearOfBirth + "\n")
   }
}
;

let persona = new person("Joshua","De los Ángeles")
console.log(persona)
console.log(persona.printImc())
persona.printAll()