"use strict";

// Drying out all the copy cat code
const openModal = document.querySelectorAll('div'); //creates a nodelist to iterate throughs
const closeModal = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');

//opening function for modal window
const modalEnter = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//closing funcion for mal window
const modalQuit = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//iterating through the div elements using for loop and querySelectorAll
for (let i = 0; i < openModal.length; i++)
    openModal[i].addEventListener('click', modalEnter)

//clicking over the black screen
overlay.addEventListener('click', modalQuit);

//cross button to close down modal window
closeModal.addEventListener('click', modalQuit);

//escape keyboard event
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        modalQuit();//accessing key property 

})

