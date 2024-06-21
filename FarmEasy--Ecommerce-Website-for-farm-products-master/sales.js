let dailySales = [
    { date: '2024-06-01', total: 100 },
    { date: '2024-06-02', total: 150 }
];

let monthlySales = [
    { month: '2024-05', total: 5000 },
    { month: '2024-06', total: 3000 }
];

// Load daily sales
function loadDailySales() {
    const dailySalesDiv = document.getElementById('daily-sales-content');
    dailySalesDiv.innerHTML = '';

    dailySales.forEach(sale => {
        const saleItem = document.createElement('div');
        saleItem.innerHTML = `<p>Date: ${sale.date} - Total: ₹${sale.total}</p>`;
        dailySalesDiv.appendChild(saleItem);
    });
}

// Load monthly sales
function loadMonthlySales() {
    const monthlySalesDiv = document.getElementById('monthly-sales-content');
    monthlySalesDiv.innerHTML = '';

    monthlySales.forEach(sale => {
        const saleItem = document.createElement('div');
        saleItem.innerHTML = `<p>Month: ${sale.month} - Total: ₹${sale.total}</p>`;
        monthlySalesDiv.appendChild(saleItem);
    });
}

// Initial load
loadDailySales();
loadMonthlySales();
