const scrollDownButton = document.querySelector('.scroll-down-btn');

// Add an event listener for scrolling
window.addEventListener('scroll', function() {
    // Check if the page has been scrolled down from the top
    if (window.scrollY > 100) {
        // Add fade-out class to hide the button when scrolled
        scrollDownButton.classList.add('fade-out');
    } else {
        // Remove fade-out class when near top
        scrollDownButton.classList.remove('fade-out');
    }
});

// Get the context for the canvas element to draw the chart
const ctx = document.getElementById('priceChart').getContext('2d');

// Sample price data for the 3 items over 7 days (for example)
const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
const localChickenPrices = [250, 260, 270, 280, 290, 300, 310];  // Example: Local Chicken price increases
const broilerPrices = [220, 225, 230, 235, 240, 250, 260];      // Example: Broiler price increases
const localGoatPrices = [550, 560, 570, 580, 590, 600, 610];     // Example: Local Goat price increases

// Create the price chart
const priceChart = new Chart(ctx, {
  type: 'line', // Line chart to show continuous data over time
  data: {
    labels: labels,
    datasets: [{
      label: 'स्थानीय कुखुरा (Local Chicken)',
      data: localChickenPrices,
      borderColor: '#2980b9',
      fill: false,
      borderWidth: 2,
      tension: 0.1,
    },
    {
      label: 'ब्रोइलर (Broiler)',
      data: broilerPrices,
      borderColor: '#2ecc71',
      fill: false,
      borderWidth: 2,
      tension: 0.1,
    },
    {
      label: 'स्थानीय खसी (Local Goat)',
      data: localGoatPrices,
      borderColor: '#e74c3c',
      fill: false,
      borderWidth: 2,
      tension: 0.1,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          stepSize: 20, // Adjust tick steps as needed
        }
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    }
  }
});