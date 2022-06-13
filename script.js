//EVENTS//

let button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
   // console.log('Button clicked');
//    document.getElementById('header-title').textContent = 'Changed';
//    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//console.log(e);
console.log(e.target);
console.log(e.target.id);
console.log(e.target.className);
console.log(e.target.classList);
let output = document.getElementById('output');
output.innerHTML = '<h3>'+e.target.id+'</h3>';
}

