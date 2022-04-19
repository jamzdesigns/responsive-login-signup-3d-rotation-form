// CHANGE BETWEEM FORMS
changeForms();
function changeForms() {
    let checkbox = document.querySelector('.checkbox-change'); // get the checkbox-change element
        form = document.querySelector('.login-form'); // get the login-form element
    checkbox.addEventListener('click', function() { // add click event to the checkbox-change element
        if(checkbox.checked) { // check if checkbox-change element is checked
            form.style.transform = 'rotateY(180deg)'; // if checkbox-change element is checked rotate the login-form element 180 degrees
        }

        else {
            form.style.transform = 'rotateY(0deg)'; // rotate login-form element to 0 degrees in case checkbox-chnage element is not checked
        }
    });    
}