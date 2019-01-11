// OBJECTIVES
// Demonstrate listening to events on a DOM node with addEventListener()
// Demonstrate triggering events listeners on DOM nodes
// Demonstrate preventing the default behavior for DOM nodes
// Explain the difference between bubbling and capturing events
// Demonstrate stopping propagated behaviors with stopPropagation()



// log key events. Use preventDefault() to log the letter g
const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});


// create a bubble event only on the clicked div. Restrict using stopPropagation()
const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
