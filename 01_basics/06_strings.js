const name = "tanvi"//string declaration
const myRepoCount = 5

console.log(name+myRepoCount+"this is my name and repocount")//this is bad practice

console.log(`my name is ${name} and my repocount is ${myRepoCount}`); //this is morden and most usefull method

const anotherMethod = new String("tanvi")
console.log(anotherMethod)
console.log(anotherMethod[3])//print the char at index 3

//strings method
const myName ="tanvi"

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName.toLowerCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('n'));
console.log(myName.substring(1,4));
console.log(myName.slice(-7,4));

const newName = "   vaishali"
console.log(newName)
console.log(newName.trim())//remove white space

const uri = "https://my ural.com/@vaishali%20kolekar"
console.log(uri.replace('%20' ,'-'))
console.log(uri.includes("vaishali"))
