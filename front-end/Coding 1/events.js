// const p = document.querySelector('p');
// p.addEventListener('click', function(e) {
//     console.log(e.type);
// });

// p.addEventListener('mousedown', function(e) {
//     console.log(e.type);
// });



const form = document.querySelector('#monkeyform');
form.addEventListener('submit',function(evt){
    evt.preventDefault();
    alert('YOU SUBMITTED THE FORM');
})