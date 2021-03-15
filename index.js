// Write your code here!

// let indes = document.querySelector("main");
// indes.remove();

let indes = document.getElementById('main');
indes.remove();

// let newHeader = document.querySelector('h1#victory');
// newHeader.innerHTML = 'Ye is the champion!'

let newHeader = document.createElement('h1');
let yourName = document.createTextNode('Ye is the champion!');
newHeader.appendChild(yourName);
newHeader.id = "victory"


