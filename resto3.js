class person
{
    constructor(yearOfBirth)
    {
        this.nombre  ;
        this.apellido  ;
        this.altura  ;
        this.peso ;
        this.pelo  ;
        this.coche  ;
        this.yearOfBirth= 1993 ;
    }

    
   
printEdad(year){
    return year - yearOfBirth
}
}

let persona = new person(yearOfBirth)
console.log(persona)
console.log(persona.printEdad(2022));
