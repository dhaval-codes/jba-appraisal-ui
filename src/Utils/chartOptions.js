export const barChartOptions =  {
    scales: {
        x: {
            // beginAtZero: true,
            grid: {
                display: false
            }
        },
        y: {
            suggestedMin: 3,
            suggestedax:5,
            // beginAtZero: true,
            grid: {
                display: true
            },
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        }
    }
}