let firstName = 'Antonia';
let lastName = 'Francesca';

// Function Declaration
function fullName(first, last) {
    return `${first} ${last}`;
};

// Function Expression
const fullName = function (first, last) {
    return `${first} ${last}`;
};

// Arrow Function
const fullName = (first, last) => `${first} ${last}`;

document.querySelector('#fullname').innerHTML = fullName(firstName, lastName);