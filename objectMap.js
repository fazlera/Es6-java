const students =[
    {id:50, Name: 'apple'},
    {id:60, Name: 'komla'},
    {id:70, Name: 'lebu'},
    {id:80, Name: 'jam'}
]
const Names = students.map(s => s.Name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 60);
const isthere = students.find(s => s.id > 60);
console.log(Names);
console.log(ids);
console.log(bigger);
console.log(isthere);


    