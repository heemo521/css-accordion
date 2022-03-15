'use strict';

// BUTTONS
const accordionItems = document.querySelectorAll('.item');
console.log(accordionItems);

//CALLBACK FUNCTION
const toggleAccordion = function (event) {
    const box = event.target.closest('.item');
    //when button is clicked, check if the box is open (contains open class)
    // console.log(box.classList.contains('open'));
    //if true, close the box by removing the open class

    box.style.transition = 'all 180ms ease-in-out';

    if (box.classList.contains('open')) {
        box.classList.remove('open');
    } else {
        //if false, first check if any other box is open, if this is true, close the other open boxes by removing the open class
        const findOpenBox = [...document.querySelectorAll('.item')].find((item) => item.classList.contains('open'));

        if (findOpenBox) {
            findOpenBox.classList.remove('open');
        }
        box.classList.add('open');
    }
};

//ATTACH EVENT LISTNER
accordionItems.forEach((item) => {
    item.querySelector('.icon').addEventListener('click', toggleAccordion);
});
