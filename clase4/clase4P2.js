const newDeveloper = (firstName, lastName, country, continent, age, language)=>{
    const developer = {
        firstName: firstName,
        lastName: lastName,
        country: country,
        continent: continent,
        age: age,
        language: language
    }
    return developer
}

const dev1 = newDeveloper ("Gabriel","X", "Monaco","Europe", 49, "PHP");
const dev2 = newDeveloper ("Odval", "F", "Mongolia", "Asia", 38, "Python");
const dev3 = newDeveloper ("Emilija", "S", "Lithuania", "Europe", 19, "Python");
const dev4 = newDeveloper ("Sou", "B", "Japan", "Asia", 49, "PHP");

const list = [dev1, dev2, dev3, dev4];

let array = list.map(item=>item.age);
let max = Math.max(...array);
console.log(max);
console.log(list.filter(item=>item.age==max));