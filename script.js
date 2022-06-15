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
// let button = document.getElementById('button');
// let box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

//mouseover event is triggered for inner elements and mouse out is triggered when it leaves the parent node//
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select')

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

//focus even highlights the text field when it is selected or the form border//
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)

form.addEventListener('submit', runEvent);

function runEvent(e) {
   e.preventDefault()
   console.log('EVENT TYPE: ' + e.type);

   //console.log(e.target.value);
   // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

   //Causes a live update of the position of the cursor when the event is being triggered//
   // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>'

   //changes the background color of node selected 
   // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)"
}