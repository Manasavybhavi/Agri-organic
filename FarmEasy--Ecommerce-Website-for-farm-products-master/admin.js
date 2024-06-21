// Dummy data for orders, products, customers, and sales
let orders = [
    { id: 1, customer: 'John Doe', product: 'Apple', quantity: 5, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', product: 'Banana', quantity: 3, status: 'Shipped' }
];

let products = [
    { name: 'Apple', price: 80, image: 'apple.jpg' },
    { name: 'Mango', price: 150, image: 'banana.jpg' }
];

let customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', orders: [1] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', orders: [2] }
];

let dailySales = [
    { date: '2024-06-01', total: 100 },
    { date: '2024-06-02', total: 150 }
];

let monthlySales = [
    { month: '2024-05', total: 5000 },
    { month: '2024-06', total: 3000 }
];

// Load orders
function loadOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>${order.status}</td>
            <td><button onclick="cancelOrder(${order.id})">Cancel</button></td>
        `;
        orderList.appendChild(row);
    });
}

// Load products
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price} per Kg</p>
            <button onclick="removeProduct('${product.name}')">Remove</button>
        `;
        productGrid.appendChild(productItem);
    });
}

// Load customers
function loadCustomers() {
    const customerList = document.getElementById('customer-list');
    customerList.innerHTML = '';

    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.orders.join(', ')}</td>
        `;
        customerList.appendChild(row);
    });
}

// Load daily sales
function loadDailySales() {
    const dailySalesDiv = document.getElementById('daily-sales');
    dailySalesDiv.innerHTML = '';

    dailySales.forEach(sale => {
        const saleItem = document.createElement('div');
        saleItem.innerHTML = `<p>Date: ${sale.date} - Total: ₹${sale.total}</p>`;
        dailySalesDiv.appendChild(saleItem);
    });
}

// Load monthly sales
function loadMonthlySales() {
    const monthlySalesDiv = document.getElementById('monthly-sales');
    monthlySalesDiv.innerHTML = '';

    monthlySales.forEach(sale => {
        const saleItem = document.createElement('div');
        saleItem.innerHTML = `<p>Month: ${sale.month} - Total: ₹${sale.total}</p>`;
        monthlySalesDiv.appendChild(saleItem);
    });
}

// Add product
document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;

    products.push({ name, price, image });
    loadProducts();
    alert('Product added successfully!');
    this.reset();
});

// Cancel order
function cancelOrder(orderId) {
    orders = orders.filter(order => order.id !== orderId);
    loadOrders();
    alert('Order cancelled successfully!');
}

// Remove product
function removeProduct(productName) {
    products = products.filter(product => product.name !== productName);
    loadProducts();
    alert('Product removed successfully!');
}

// Initial load
loadOrders();
loadProducts();
loadCustomers();
loadDailySales();
loadMonthlySales();
