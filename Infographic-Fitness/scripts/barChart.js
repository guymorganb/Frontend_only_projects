const data = {
    labels: ['Gender','Year in College', 'GPA', 'Age', 'Height', 'Weight', 'Hand Grip Strength', 'Leg Press 1RM', 'Leg Extension 1RM'],
    datasets: [{
        label: 'Positive Correlation with BMI',
        data: [0.332, -0.253, -0.404,  0.227, 0.231, 0.823, 0.414, 0.424, 0.306],
        backgroundColor: ['green','red', 'red', 'green', 'green', 'green', 'green', 'green', 'green'],
        
    }]
};

// Configuration
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'blue' // Change y-axis label color
                },
                grid: {
                    drawBorder: false,
                    color: function(context) {
                        if (context.tick.value === 0) {
                            return '#000000'; // Black color for zero line
                        }
                        return '#000000'; // Light grey for other grid lines
                    },
                    lineWidth: function(context) {
                        if (context.tick.value === 0) {
                            return 3; // Thicker line for zero
                        }
                        return 1; // Regular width for other grid lines
                    }
                }
            },
            x: {
                ticks: {
                    color: 'blue', // Change x-axis label color
                    font: {
                        size: 11 // Change the font size for x-axis labels
                    }
                },
                grid: {
                    drawBorder: false,
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'purple' // Change legend text color
                }
            },
            title: {
                display: true,
                text: 'Fitness & BMI Correlation in College Students',
                color: 'blue', // Change title text color
                font: {
                    size: 18 // Font size for title
                }
            },
            datalabels: {
                color: '#000000', // Label text color
                anchor: 'end', // Position of the label
                align: 'top', // Alignment of the label
                formatter: (value, context) => {
                    return value.toFixed(2); // Format the label value
                },
                font: {
                    size: 10 // Set the font size here
                }
            },
        }
    },
    plugins: [ChartDataLabels] // Register the plugin
};


// Render Chart
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleAside');
    var asideElement = document.querySelector('aside');
    var orderedList = document.querySelector('ol');
    toggleButton.addEventListener('click', function () {
        if (asideElement.style.left === '0px') {
            asideElement.style.left = '-200px';
            orderedList.style.left = '-200px'
        } else {
            asideElement.style.left = '0px';
            orderedList.style.left = '0px';
        }
    });
});


