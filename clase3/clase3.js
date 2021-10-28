//JS no es orientado a objeto pero si esta adaptado
//Paradigma es la estrategia para desarrollar
//Clases son como los dueños, objeto es cuando instanciamos
//Puedo declarar la clase mascota, pero cuando instancie (objeto) sabre q mascota es(si es gato, perro, raza, tamaño etc)
//La clase nos define un modelo, 
//Para instanciar usamos un constructor. Es como una fn 
class Pet{
    type
    race
    name
    color
    size

    constructor(petType,petRace,petName,petColor,petSize){
        this.type=petType;
        this.race=petRace;
        this.name=petName;
        this.color=petColor;
        this.size=petSize;
    }
}

let dog = new Pet ("perro", "bulldog", "pepe", "azul","mediano");
console.log(dog)
console.log(dog.type)

//con new Pet creo un nuevo objeto de la clase pet