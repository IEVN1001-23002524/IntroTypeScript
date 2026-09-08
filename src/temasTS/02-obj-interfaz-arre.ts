interface IAlumnos{
    nombre:string;
    appelido:string;
    edad:number;
    email:string;
    nota:number;
    //Si usamos un objeto que queremos que sea opcional usamos signo de interrogación.
    //ejemplo: nota?:number. Y ya no tienes que usarla abajo.
}

const alumnos: IAlumnos ={
    nombre:'Mario',
    appelido:'Lopez',
    edad:22,
    email:'lopez@gmail.com',
    nota:5
}

console.log(alumnos)

let mascotas = ['perro','gato','perico']
console.log(mascotas)
mascotas[1]="Nuevo gato" //cambiar el arreglo [1]
console.log(mascotas)
mascotas.push('leon') //push es para meter uno nuevo al arreglo
console.log(mascotas)

let tem:(number|string)[]=[]
    tem.push(11)
    tem.push('Once números')
    console.log(tem)


