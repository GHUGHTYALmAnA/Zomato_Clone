let accordians = document.querySelectorAll('.accordian');
accordians.forEach(acc => {
    const icon = acc.querySelector('.icon');
    const answer = acc.querySelector('.answer');

    acc.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }
        else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');
    })
})

let modal = document.querySelector('.modal');
modal.addEventListener('click', () => {
    let modalContent = document.querySelector('.modal-content');
    let arrow = document.querySelector('.arrow');
    modalContent.classList.toggle('active');
})

// filter modal
let filterModal = document.querySelector('.filter-modal');
let body = document.getElementsByTagName('body');
filterModal.addEventListener('click',()=>{
    let filterModalContent = document.querySelector('.filter-modal-content');
    filterModal.style.cursor = 'default';
    let close = document.querySelector('.close');
    filterModalContent.style.visibility = 'visible';
    close.addEventListener('click',()=>{
        filterModalContent.style.visibility = 'hidden';
    })
    // window.style.visibility = 'hidden';
})

// down arrow modal section

let down = document.querySelector('.down');
down.addEventListener('click',()=>{
    let downModal = document.querySelector('.down-modal');
    downModal.classList.toggle('active');
    down.classList.toggle('active');
})

// let login = document.querySelector('.log1');
// login.addEventListener('click',()=>{
//     let loginModal = document.querySelector('.login-modal');
//     let cross = document.querySelector('.cross');
//     loginModal.style.visibility = 'visible';
//     cross.addEventListener('click',()=>{
//         loginModal.style.visibility = 'hidden';
//     })
// })
// let signup = document.querySelector('.log');
// signup.addEventListener('click',()=>{
//     let signupModal = document.querySelector('.signup-modal');
//     let crossClose = document.querySelector('.cross-close');
//     signupModal.style.visibility = 'visible';
//     crossClose.addEventListener('click',()=>{
//         signupModal.style.visibility = 'hidden';
//     })
// })




let login = document.querySelector('.log1');
let signup = document.querySelector('.log');

let loginModal = document.querySelector('.login-modal');
let signupModal = document.querySelector('.signup-modal');

let loginCross = document.querySelector('.cross');
let signupCross = document.querySelector('.cross-close');

login.addEventListener('click', () => {
    closeModals(); // Close any open modal
    loginModal.style.visibility = 'visible';
});

signup.addEventListener('click', () => {
    closeModals(); // Close any open modal
    signupModal.style.visibility = 'visible';
});

loginCross.addEventListener('click', () => {
    loginModal.style.visibility = 'hidden';
});

signupCross.addEventListener('click', () => {
    signupModal.style.visibility = 'hidden';
});

function closeModals() {
    loginModal.style.visibility = 'hidden';
    signupModal.style.visibility = 'hidden';
}

const checkbox = document.getElementById('mycheckbox');

checkbox.addEventListener('click', function() {
  this.classList.toggle('checked'); // Toggle the 'checked' class on the checkbox
});


