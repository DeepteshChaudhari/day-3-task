let object = [
    { person: "John", age: 30, company: "Google" },
    { person: "Mohn", age: 37, company: "Flipkart" },
    { person: "Kohn", age: 38, company: "Amazon" },
    { person: "Sohan", age: 40, company: "Myntra" },
    { person: "Jenny", age: 70, company: "Apple" },
  ];
  
  //simple for loop
  for(let value = 0; value < object.length; value++)
  {
    console.log(`
    person: ${object[value].person},
    age: ${object[value].age},
    company: ${object[value].company}`)
  }

  //for each loop
  object.forEach(value => {
    console.log(value)
  });
  
  //for in loop
  for (const value in object) {
    console.log(object[value]);
  }
  
  //for of loop
  for (let value of object) {
    console.log(value)
  }
object.forEach(value => {
    console.log(`
    person: ${object[value].person},
    age: ${object[value].age},
    company: ${object[value].company}`)
  });