console.log('My code is running!');

function greet(name) {
  console.log('Hello, ' + name);
}
//  function setClassTip(){
//    let el = document.getElementById('mypara');
//      el.className = 'tip' ;
//    }
//  function listenForClick(event) {

//    }
function setClasswarning(event) {
  let el = document.getElementById('mypara');
  el.className = 'warning';
}

function setClasstip(event) {
  let el = document.getElementById('mypara');
  el.className = 'tip';
}

function setClassnormal(event) {
  let el = document.getElementById('mypara');
  el.className = 'normal';
}
