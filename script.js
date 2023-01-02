/* What You Will Learn :
Use functions, string methods, array methods and loops*/

// 1) Prompt the user for several words (separated by commas).
// 2) Put the words into an array.
// 3) Console.log the words one per line, in a rectangular frame as seen below.
// 4) Check out the Hints and Requirements below.

let mot = prompt("Entrez des mots separés par des virgules  :");
let motTab = mot.split(",");
let maxLenght = -1;
let croix = '';
let espace = ' ';
for(let i of motTab) {
    if(i.length > maxLenght) {
        maxLenght = i.length;
    }
}

maxLenght+=4;

for(let i = 1; i <= maxLenght;i++) {
    croix+='*';
}
console.log(croix);
for(let i of motTab) {
    if(i.length < (maxLenght -4)) {
       
        for(let j=0; j<(maxLenght-4-Number(i.length));j++) {
            espace+=' ';
        }
        console.log(`* ${i}${espace}*`);
        espace = ' ';
    }else {
        console.log(`* ${i} *`);
    }

}
console.log(croix);