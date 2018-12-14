console.log('My code is running!');

function greet(name) {
  console.log('Hello, ' + name);
}

//function setClasswarning(event) {
  //let el = document.getElementById('mypara');
//  el.className = 'warning';
//}

//function setClasstip(event) {
  //let el = document.getElementById('mypara');
//  el.className = 'tip';
//}

//function setClassnormal(event) {
//  let el = document.getElementById('mypara');
//  el.className = 'normal';
//}
//


function setClass(event, className) {
  let el = document.getElementById('mypara');
  el.className = className;
}
