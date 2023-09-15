const removeButtons = document.querySelectorAll('li button');
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');

for (let btn of removeButtons){
    btn.addEventListener('click', function(e) {
        e.target.parentElement.remove()
    });
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(input.value);
    const newFriend = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click',function(e){
        e.target.parentElement.remove();
    });
    newFriend.innerText = input.value;
    newFriend.appendChild(removeBtn);
    input.value = '';
    friendList.appendChild(newFriend);
})




// const preferences = {
//     fontSize: '18px',
//     favColor: 'purple'

// }

// localStorage.setItem('preferences', JSON.stringify(preferences))

localStorage.setItem('friendList', '')