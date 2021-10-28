// class Developer{
//     firstName
//     country
//     continent
//     age
//     language

//     constructor(firstName, country,continent, age, language){
//         this.firstName = firstName;
//         this.country = country;
//         this.continent = continent;
//         this.age = age;
//         this.language = language;
//     }
// }

const newDeveloper = (firstName, country, continent, age, language)=>{
    const developer = {
        firstName: firstName,
        country: country,
        continent: continent,
        age: age,
        language: language
    }
    return developer;
}

const dev1 = newDeveloper ('Sofia', 'Argentina', 'Americas', 35, 'Java');
const dev2 = newDeveloper ('Lukas', 'Croatia', 'Europe', 35, 'Java');
const dev3 = newDeveloper ('Madison', 'United States', 'Americas', 32, 'Java');
const sameLanguage = (list)=>{
    let array = list.map(item=>item.language);
    return array.every(item=>item==array[0]);
}

let list = [dev1, dev2, dev3];
console.log(sameLanguage(list));








