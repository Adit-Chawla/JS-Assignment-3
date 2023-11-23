// Dynamically add student ID and name
document.addEventListener('DOMContentLoaded', function() {
    const studentInfo = document.createElement('p');
    studentInfo.textContent = 'Student ID: 200531948, Name: Adit Chawla';
    studentInfo.className = 'student-info';
    document.body.insertBefore(studentInfo, document.body.firstChild);
});

// Pizza class
class Pizza {
    constructor(type, size, toppings, name, address, instructions, email, phone) {
        this.type = type;
        this.size = size;
        this.toppings = toppings;
        this.name = name;
        this.address = address;
        this.instructions = instructions;
        this.email = email;
        this.phone = phone;
    }

    getDescription() {
        return `Order for ${this.name.first} ${this.name.last}: ${this.size}, ${this.type} pizza with ${this.toppings.join(', ')}.   ` +
        `Delivery to: ${this.address.line1}, ${this.address.line2}.   ` +
        `Instructions: ${this.instructions}.        ` + `Contact: ${this.email}, ${this.phone}`;
    }
}

// Function to handle form submission
function handleOrder(e) {
    e.preventDefault();

    // Capture form values
    const type = document.getElementById('Pizzas').value;
    const sizes = document.getElementsByName('size');
    const size = Array.from(sizes).find(radio => radio.checked)?.value;
    const toppingsElements = document.querySelectorAll('.toppings input[type="checkbox"]:checked');
    const toppings = Array.from(toppingsElements).map(el => el.value);
    const name = {
        first: document.getElementById('FirstName').value,
        last: document.getElementById('LastName').value
    };
    const address = {
        line1: document.getElementById('line1').value,
        line2: document.getElementById('line2').value
    };
    const instructions = document.getElementById('instructions').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validate inputs (basic validation)
    if (!type || !size || toppings.length === 0 || !name.first || !name.last || !address.line1 || !address.line2 || !email || !phone) {
        alert('Please fill all the required fields');
        return;
    }

    // Create Pizza object
    const pizzaOrder = new Pizza(type, size, toppings, name, address, instructions, email, phone);

    // Output pizza description
    const orderDescription = document.createElement('p');
    orderDescription.textContent = pizzaOrder.getDescription();
    orderDescription.className = 'order-description';
    document.body.appendChild(orderDescription);
}

// Add event listener to the order button
document.getElementById('orderButton').addEventListener('click', handleOrder);
