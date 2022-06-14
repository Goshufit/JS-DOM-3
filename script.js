//EVENTS//

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//    // console.log('Button clicked');
//    document.getElementById('header-title').textContent = 'Changed';
//    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// let output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>';

// console.log(e.type);

//this will give you the distance between top of the page and the bottom and the width of th page from left to right//
// console.log(e.clientX);
// console.log(e.clientY);

//this will give you the distance from the bottom and top of the page from the element//
// console.log(e.offsetX);
// console.log(e.offsetY);

//this is how you log if someone is holding down a key when clicking the event//
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }


//.type tells you what event is being listened for//
let button = document.getElementById('button');
let box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

function runEvent(e){
   console.log('EVENT TYPE: '+e.type);
}