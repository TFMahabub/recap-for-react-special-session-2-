const obj = {
  name: 'mahabub',
  age: (2022-1999),
  profession: {
    office: 'google',
    posioton: 'debugger',
    location: ['usa', 'india', 'natherland']
  }
}


const result = obj.profession.posioton.name?.lastName || 0;
const result2 = obj.profession.location[0] || 0;

console.log(result)
console.log(result2)