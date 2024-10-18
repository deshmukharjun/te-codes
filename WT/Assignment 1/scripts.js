
const totalUsersCtx = document.getElementById('totalUsersChart').getContext('2d');
const totalUsersChart = new Chart(totalUsersCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'This year',
            data: [10, 20, 15, 25, 20, 30, 25],
            borderColor: 'rgba(133, 133, 133, 1)',
            borderWidth: 1,
            fill: false
        }, {
            label: 'Last year',
            data: [17, 26, 28, 32, 24, 36, 37],
            borderColor: 'rgba(227, 245, 255, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const trafficByDeviceCtx = document.getElementById('trafficByDeviceChart').getContext('2d');
const trafficByDeviceChart = new Chart(trafficByDeviceCtx, {
    type: 'bar',
    data: {
        labels: ['Linux', 'Mac', 'iOS', 'Windows', 'Android'],
        datasets: [{
            label: 'Devices',
            data: [20, 15,28, 21, 32],
            backgroundColor: [
                'rgba(149, 164, 252, 0.1)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const trafficByLocationCtx = document.getElementById('trafficByLocationChart').getContext('2d');
const trafficByLocationChart = new Chart(trafficByLocationCtx, {
    type: 'doughnut',
    data: {
        labels: ['Pune', 'Mumbai', 'Banglore'],
        datasets: [{
            label: 'Traffic',
            data: [45, 25, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.11)',
                'rgba(54, 162, 235, 0.11)',
                'rgba(255, 206, 86, 0.11)',
                'rgba(75, 192, 192, 0.11)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true
    }
});
