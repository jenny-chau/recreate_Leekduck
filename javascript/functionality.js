
// For the Shiny page, when the shiny pokemon are clicked, 
// the btnCounter increases to determine the border color
let btnCounter = 0;
let element;

function btnClicked (elementId) {
    if (btnCounter === 3) {
        btnCounter = 0;
    } else {
        btnCounter++;
    }

    if (btnCounter === 0) {
        element = document.getElementById(elementId);
        element.style.borderColor = "grey";
        element.style.boxShadow = "none";
    } else if (btnCounter === 1) {
        element = document.getElementById(elementId);
        element.style.borderColor = 'green';
        element.style.boxShadow = "2px 2px 2px green";
    } else if (btnCounter === 2) {
        element = document.getElementById(elementId);
        element.style.borderColor = "red";
        element.style.boxShadow = "2px 2px 2px red";
    } else {
        element = document.getElementById(elementId);
        element.style.borderColor = "blue";
        element.style.boxShadow = "2px 2px 2px blue";
    }
    // console.log(element = document.style.borderColor);
    return;
}
// for (let i = 0; i < 3; i++) {
//     btnClicked();
// }
console.log(btnCounter);



function emailValidation (email) {

}