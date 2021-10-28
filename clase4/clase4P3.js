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

const dev1 = newDeveloper("Emily", "N.", "Ireland", "Europe", 30, "Ruby");
const dev2 = newDeveloper("Nor", "E.", "Malaysia", "Asia", 20, "Clojure");

const list = [dev1, dev2];

list.forEach(item=>item.userName = item.firstName.toLowerCase()+item.lastName[0].toLowerCase()+(2021-item.age));
console.log(list);
