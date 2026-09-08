let x=8
let y=2

function sumar(x:number,y:number):number{
    let a=6
    let b=7
    let res=a+b
    console.log('La suma es: ' + res)
    return x + y
}

let resultado=sumar(x, y)
console.log(resultado)

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean
    mostrar: ()=>void
}

const nuevoMascotas:Mascotas={
    nombre:'Molcajetito',
    edad:5,
    raza:'Chihuahua',
    vacunado:true,

    mostrar() {
        console.log(`La edad de ${this.nombre} es ${this.edad}`)
}
}

function mostrarMascotas(mascota:Mascotas,x:number):void{
    mascota.edad+=x
    console.log(mascota)
    //console.log(mascota.mostrar())
}

mostrarMascotas(nuevoMascotas,1)
