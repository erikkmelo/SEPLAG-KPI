// Dados de exemplo
const data1 = [12, 19, 3, 5, 2, 3];
const data2 = [5, 10, 15, 20, 25, 30];
const data3 = [7, 8, 5, 12, 6, 10];
const data4 = [14, 9, 11, 8, 20, 15];

// Configurações dos gráficos
const config1 = {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [{
      label: 'Tema 1',
      data: data1,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  }
};

const config2 = {
  type: 'line',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [{
      label: 'Tema 2',
      data: data2,
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 2
    }]
  }
};

const config3 = {
  type: 'pie',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [{
      label: 'Tema 3',
      data: data3,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderWidth: 1
    }]
  }
};

const config4 = {
  type: 'doughnut',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [{
      label: 'Tema 4',
      data: data4,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderWidth: 1
    }]
  }
};

// Renderizando os gráficos
new Chart(document.getElementById('chart1'), config1);
new Chart(document.getElementById('chart2'), config2);
new Chart(document.getElementById('chart3'), config3);
new Chart(document.getElementById('chart4'), config4);

// Inicializando o mapa de São Vicente, SP
const map = L.map('map').setView([-23.9574, -46.3883], 13);

// Adicionando camadas de mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adicionando um marcador no centro de São Vicente
L.marker([-23.9574, -46.3883]).addTo(map)
  .bindPopup('São Vicente, SP')
  .openPopup();
