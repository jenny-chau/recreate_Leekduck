
// For the Shiny page, when the shiny pokemon are clicked, the border color changes in a cycle (grey, green, red, blue)
let btnCounter = 0;
let currentBorderColor = "";
let element;

function btnClicked (elementId) {
    element = document.getElementById(elementId);
    currentBorderColor = element.style.borderColor;

    // Check what the current border color is, which gives information about how many times the button has been clicked
    if (currentBorderColor === "grey" || currentBorderColor === "") {
        btnCounter = 0;
    } else if (currentBorderColor === "green") {
        btnCounter = 1;
    } else if (currentBorderColor === "red") {
        btnCounter = 2;
    } else {
        btnCounter = 3;
    }
    
    // Reset the btnCounter after max 4 clicks
    if (btnCounter === 3) {
        btnCounter = 0;
    } else {
        btnCounter++;
    }

    // Change styling depending on how many times the button was clicked
    if (btnCounter === 0) {
        element.style.borderColor = "grey";
        element.style.boxShadow = "none";
    } else if (btnCounter === 1) {
        element.style.borderColor = 'green';
        element.style.boxShadow = "2px 2px 2px green";
    } else if (btnCounter === 2) {
        element.style.borderColor = "red";
        element.style.boxShadow = "2px 2px 2px red";
    } else {
        element.style.borderColor = "blue";
        element.style.boxShadow = "2px 2px 2px blue";
    }
    // console.log(element = document.style.borderColor);
    return;
}



function emailValidation (email) {

}