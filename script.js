const chocolateOptions = document.querySelectorAll('.chocolate-options li');
const totalItemsElement = document.getElementById('total-items');
const totalPriceElement = document.getElementById('total-price');

const chocolatePrices = {
    'dark-chocolate': 2.50,
    'milk-chocolate': 2.00,
    'white-chocolate': 2.25,
    'almond-chocolate': 3.00,
};

chocolateOptions.forEach(option => {
    const input = option.querySelector('input[type="number"]');
    input.addEventListener('change', updateSummary);
});

function updateSummary() {
    let totalItems = 0;
    let totalPrice = 0;

    for (const chocolateId in chocolatePrices) {
        const input = document.getElementById(chocolateId);
        const quantity = parseInt(input.value) || 0;
        totalItems += quantity;
        totalPrice += quantity * chocolatePrices[chocolateId];
    }

    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
