const restaurantData = {
    Jollibee: {
        name: "JOLLIBEE",
        address: "Bocaue, Bulacan",
        phone: "490 49 4000",
        website: "Jollibee.com",
        category: "Filipino",
        hours: "10AM to 10PM",
        price: "php",
        description: "Delicious Filipino Cuisine with a modern twist.",
        image: "jollibee.jpg"
    },
    Mcdonalds: {
        name: "Mcdonalds",
        address: "San Manuel Bulacan",
        phone: "490 49 5000",
        website: "Mcdonalds.com",
        category: "American",
        hours: "11AM to 11PM",
        price: "php",
        description: "Authentic meals with fresh ingredients and classic recipes.",
        image: "mcdonalds.jpg"
    },
    KFC: {
        name: "KFC",
        address: "San Jose Del Monte Bulacan",
        phone: "490 49 6000",
        website: "KFC.com",
        category: "Filipino",
        hours: "9AM to 9PM",
        price: "php",
        description: "Experience Filipino flavors with a modern twist.",
        image: "kfc.jpg"
    },
    Chowking: {
        name: "Chowking",
        address: "Baliwag, Bulacan",
        phone: "490 49 7000",
        website: "Chowking.com",
        category: "Chinese",
        hours: "12PM to 10PM",
        price: "php",
        description: "Fresh platters with the best catch of the day.",
        image: "chowking.webp"
    }
};


function showHoverPopup(restaurantKey) {
    const details = restaurantData[restaurantKey];
    const hoverPopup = document.getElementById('hover-popup');
    
    hoverPopup.innerHTML = `<strong>${details.name}</strong><br>${details.description}`;
    hoverPopup.classList.remove('d-none');

    document.addEventListener('mousemove', function (e) {
        hoverPopup.style.left = e.pageX + 15 + 'px';
        hoverPopup.style.top = e.pageY + 15 + 'px';
    });
}

function hideHoverPopup() {
    document.getElementById('hover-popup').classList.add('d-none');
}

// Click pop-up
function openPopup(restaurantKey) {
    const details = restaurantData[restaurantKey];

    document.getElementById('popup-image').src = details.image;
    document.getElementById('popup-image').alt = details.name;
    
    document.getElementById('popup-details').innerHTML = `
        <h2 class="text-danger">${details.name}</h2>
        <p><strong>Address:</strong> ${details.address}</p>
        <p><strong>Phone:</strong> ${details.phone}</p>
        <p><strong>Website:</strong> ${details.website}</p>
        <p><strong>Category:</strong> ${details.category}</p>
        <p><strong>Hours:</strong> ${details.hours}</p>
        <p><strong>Price:</strong> ${details.price}</p>
        <p>${details.description}</p>
    `;

    document.getElementById('popup').classList.remove('d-none');
}

function closePopup() {
    document.getElementById('popup').classList.add('d-none');
}
