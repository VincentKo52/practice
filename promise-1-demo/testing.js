const rectangle = {
    width: 5,
    height: 3,
};

// Mengconvert object menjadi string (JSON)
const str = JSON.stringify(rectangle);

//Mengparse string (JSON) menjadi object 
const obj = JSON.parse(str);

console.log(str);  // {"width":5,"height":3}  
console.log(obj);  // { width: 5, height: 3 }














