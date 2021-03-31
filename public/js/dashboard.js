/* globals Chart:false, feather:false */

(function () {
    'use strict'
  
    feather.replace()
  
    // Graphs
    let ctx = document.getElementById('graficoPrincipal');

    let data = [
        30000,
        26000,
        55000,
        28698,
        14976,
        87432,
        97657,
        43679,
        18754,
        93564
    ];

    let chartPrincipal = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Maçã',
          'Abacaxi',
          'Pera',
          'Carambola',
          'Framboesa',
          'Laranja',
          'Morango',
          'Romã',
          'Manga',
          'Melancia'
        ],
        datasets: [{
          data: data,
          lineTension: 0,
          backgroundColor: '#007BFF',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  })()
  

$( function() {
    $( "#datepicker" ).datepicker();
} );