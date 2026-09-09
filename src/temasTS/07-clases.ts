class Persona{
    nombre: string;
    edad:number;
    constructor(nombre:string, edad:number){ //permite inicializar los objetos de la clase cuando son creados.
        this.nombre=nombre
        this.edad=edad
    }
    imprimir(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
    } 
}

let persona:Persona

persona=new Persona('Danae', 22)
persona.imprimir()