// Programming Languages bar chart
var ctx = document.getElementById("linguagens").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["PHP", "Java", "HTML", "CSS", "Javascript", 'Python'],
        datasets: [{
            label: 'Proficiencia com linguagens de programação',
            data: [4, 3, 5, 2, 1, 0],
            backgroundColor: [
                '#007bff',
                '#dc3545',
                '#fd7e14',
                '#ffc107',
                '#28a745',
                '#6610f2'
            ],
            borderColor: [
                '#007bff',
                '#dc3545',
                '#fd7e14',
                '#ffc107',
                '#28a745',
                '#6610f2'
            ],
            borderWidth: 1
        }]
    }
});

// Proficiencies doughnut chart
var ctx = document.getElementById("proficiencias").getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [1, 2, 5, 4],
            backgroundColor: [
                '#007bff',
                '#dc3545',
                '#fd7e14',
                '#6610f2'
            ],
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Criatividade',
            'Detalhista',
            'Comunicação',
            'Proatividade'
        ]
    }
});