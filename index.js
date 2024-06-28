// Write your solution here!
let cats =["Milo", "Otis", "Garfield"];
console .log(cats)
function destructivelyAppendCat(){
    cats.push("Ralph");
    console .log(cats);
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
    console .log(cats);
}

function destructivelyRemoveLastCat() {
    cats.pop("Ralph");
    console .log(cats);
}
function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
    console .log(cats);
}
function appendCat() {
    let cat1 = cats.slice();
    cat1.push("Broom");
    return cat1;
}

function prependCat(name) {
    let newCatsArray = cats.slice(); 
    newCatsArray.unshift(name); 
    return newCatsArray; 
  }
  function removeLastCat() {
    return cats.slice(0, -1); 
  }


function removeFirstCat() {
  return cats.slice(1); 
}
  
  

  


