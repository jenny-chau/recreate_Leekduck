
// For the Shiny page, when the shiny pokemon are clicked, the border color changes in a cycle (grey, green, red, blue)
// The function takes the id of the element as a parameter, so it can be used for different elements.
// Already functional on the website.
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
    } else if (currentBorderColor === "blue") {
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
        element.style.borderColor = "grey"; // not selected
        element.style.boxShadow = "none";
        updateRegisteredCounter("decrease");
        updateOwnedCounter("decrease");
    } else if (btnCounter === 1) {
        element.style.borderColor = 'green'; // Registered pokemon
        element.style.boxShadow = "2px 2px 2px green";
        updateRegisteredCounter("increase");
    } else if (btnCounter === 2) {
        element.style.borderColor = "blue"; // Owns pokemon
        element.style.boxShadow = "2px 2px 2px blue";
        updateOwnedCounter("increase");
    } else {
        element.style.borderColor = "red";
        element.style.boxShadow = "2px 2px 2px red";
    }
    return;
}

// Update the counter on the Shiny page. Related to the btnClicked(...) function. 
// The function takes in a string parameter to either increase or decrease the counter.
let num;

function updateOwnedCounter(update) {
    // Get the element data
    element = document.getElementById("owns-number");
    num = parseInt(element.textContent);

    if (update === "decrease" && num != 0) {
        num--;
    } else {
        num++;
    }
    element.textContent = num;
    return;
}

function updateRegisteredCounter(update) {
    element = document.getElementById("registered-number");
    num = parseInt(element.textContent);

    if (update === "decrease" && num != 0) {
        num--;
    } else {
        num++;
    }
    element.textContent = num;
    return;
}


// Form validation on the Shiny page. Takes name and email from form as inputs.
// If email is valid, email and name get added to an array database.
let emailUsername;
let domainName;

function emailValidation (name, email) {
    if (email.lastIndexOf(".") > email.lastIndexOf("@")) { // Check for presence of @ and ., and checks for correct order of symbols
            emailUsername = email.split("@");
            domainName = emailUsername[emailUsername.length - 1].split(".");
            if (!hasEmptyString(emailUsername) && !hasEmptyString(domainName)) { // Check that email contains corrent parts (username, domain name). No invalid emails like @.
                addToDatabase(name, email);
                return true;
            }
        return false;
    } else {
        return false;
    }
}

// Takes an array of strings and searches for empty strings ""
// Returns true is empty string is found. 
// False if array does not contain empty strings.
function hasEmptyString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            return true;
        }
    }
    return false;
}

// Add name and email to array database
let nameDatabase = [];
let emailDatabase = [];

function addToDatabase(name, email) {
    nameDatabase.push(name);
    emailDatabase.push(email);
    return;
}

// Test emailValidation(...) and print in console
console.log(emailValidation("Wasabi", "n@g.c"));
console.log(emailValidation("Wasabi2", "wasabi@gmail.com"));
console.log(emailValidation("Wasabi3", "wasabi@gmai.lcom"));
console.log(emailValidation("Wasabi4", "wasabi.gmail@com"));

for (let i = 0; i < nameDatabase.length; i++) {
    console.log(nameDatabase[i], emailDatabase[i]);
}