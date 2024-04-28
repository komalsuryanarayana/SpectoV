// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Sample data for the bar chart
    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [50, 80, 60, 75, 85, 70],
        }]
    };

    // Get the canvas element
    const ctx = document.getElementById('salesChart').getContext('2d');

    // Initialize the bar chart
    const salesChart = new Chart(ctx, {
        type: 'bar',
        data: salesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
