
const $grafica = document.querySelector("#grafica");

const etiquetas = ["Septiembre", "Octubre", "Noviembre", "Diciembre"]

const ventas = {
    label: "Ventas por mes",
    data: [3000, 900, 6040, 3220],
    backgroundColor: 'rgba(54, 162, 235)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
};
new Chart($grafica, {
    type: 'bar',
    data: {
        labels: etiquetas,
        datasets: [
            ventas,

        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});