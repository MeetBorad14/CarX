// JavaScript to handle the car info display
document.addEventListener("DOMContentLoaded", () => {
    const carBoxes = document.querySelectorAll('.box');
    const fullCarInfoSection = document.getElementById('full-car-info-section');
    const fullCarName = document.getElementById('full-car-name');
    const fullCarDescription = document.getElementById('full-car-description');
    const fullCarFuel = document.getElementById('full-car-fuel');
    const fullCarEngine = document.getElementById('full-car-engine');
    const fullCarTransmission = document.getElementById('full-car-transmission');

    carBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const carInfo = box.getAttribute('data-info');
            const carTitle = box.querySelector('h2').innerText;
            const carFuel = box.getAttribute('data-fuel');
            const carEngine = box.getAttribute('data-engine');
            const carTransmission = box.getAttribute('data-transmission');

            // Set the car name, description, fuel, engine, and transmission details
            fullCarName.innerText = carTitle;
            fullCarDescription.innerText = carInfo;
            fullCarFuel.innerText = carFuel;
            fullCarEngine.innerText = carEngine;
            fullCarTransmission.innerText = carTransmission;

            // Show the full car info section
            fullCarInfoSection.classList.remove('hidden');
        });
    });
});

// Function to close the full car info section
function closeFullCarInfo() {
    const fullCarInfoSection = document.getElementById('full-car-info-section');
    fullCarInfoSection.classList.add('hidden');
}
