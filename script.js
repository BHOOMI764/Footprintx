function calculateCO2() {
    const mileage = document.getElementById('mileage').value;
    const type = document.getElementById('type').value;

    let co2PerKm;
    switch (type) {
        case 'car':
            co2PerKm = 0.12; // Example values
            break;
        case 'bike':
            co2PerKm = 0.02;
            break;
        case 'bus':
            co2PerKm = 0.04;
            break;
        case 'train':
            co2PerKm = 0.03;
            break;
        case 'plane':
            co2PerKm = 0.15;
            break;
        default:
            co2PerKm = 0;
    }

    const totalCO2 = mileage * co2PerKm;
    alert(`Your total CO2 for this journey is ${totalCO2.toFixed(2)} KG`);
}
document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('co2-counter');
    const target = +counter.getAttribute('data-count');
    let count = 0;

    const updateCounter = setInterval(() => {
        count++;
        counter.innerHTML = `${count} KG`;
        if (count >= target) {
            clearInterval(updateCounter);
        }
    }, 30); // Adjust speed as needed
});
