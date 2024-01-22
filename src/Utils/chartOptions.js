export const barChartOptions =  {
    scales: {
        x: {
            beginAtZero: true,
            grid: {
                display: false
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: true
            }
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