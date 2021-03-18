// GLOBAL CONFIGS
//Chart.defaults.global.elements.rectangle.borderWidth = 2;
//Chart.defaults.global.elements.rectangle.borderColor = '#FFAB00';
Chart.defaults.global.elements.rectangle.backgroundColor = 'rgba(255, 171, 0, 1)';
Chart.defaults.global.tooltips.titleFontSize = 16;
Chart.defaults.global.tooltips.bodyFontSize = 16;
Chart.defaults.global.tooltips.borderWidth = 2;
Chart.defaults.global.tooltips.borderColor = '#FFAB00';
Chart.defaults.global.tooltips.backgroundColor = 'rgba(26, 20, 41, 0.9)';
Chart.defaults.global.tooltips.displayColors = false;
Chart.defaults.global.tooltips.xPadding = 12;
Chart.defaults.global.tooltips.yPadding = 12;
Chart.defaults.global.defaultFontFamily = "'Barlow', sans-serif";
Chart.defaults.global.defaultFontSize = 13;
Chart.defaults.global.defaultFontColor = '#858585';
Chart.defaults.global.legend.display = false;

// DATA
// workoutChart1
const workoutRepsByKind = [
  {
    "Day": 1,
    "Kind": "UpperBody",
    "totalReps": 280
  },
  {
    "Day": 2,
    "Kind": "LowerBody",
    "totalReps": 260
  },
  {
    "Day": 4,
    "Kind": "AllBody",
    "totalReps": 306
  },
  {
    "Day": 5,
    "Kind": "Cardio",
    "totalReps": 34
  },
  {
    "Day": 6,
    "Kind": "ActiveRecovery",
    "totalReps": 211
  },
  {
    "Day": 8,
    "Kind": "UpperBody",
    "totalReps": 280
  },
  {
    "Day": 9,
    "Kind": "LowerBody",
    "totalReps": 260
  },
  {
    "Day": 11,
    "Kind": "AllBody",
    "totalReps": 306
  },
  {
    "Day": 12,
    "Kind": "Cardio",
    "totalReps": 34
  },
  {
    "Day": 13,
    "Kind": "ActiveRecovery",
    "totalReps": 211
  },
  {
    "Day": 15,
    "Kind": "UpperBody",
    "totalReps": 280
  },
  {
    "Day": 16,
    "Kind": "LowerBody",
    "totalReps": 260
  },
  {
    "Day": 18,
    "Kind": "AllBody",
    "totalReps": 306
  },
  {
    "Day": 19,
    "Kind": "Cardio",
    "totalReps": 34
  },
  {
    "Day": 20,
    "Kind": "ActiveRecovery",
    "totalReps": 211
  },
  {
    "Day": 22,
    "Kind": "UpperBody",
    "totalReps": 280
  },
  {
    "Day": 23,
    "Kind": "LowerBody",
    "totalReps": 260
  },
  {
    "Day": 25,
    "Kind": "AllBody",
    "totalReps": 306
  },
  {
    "Day": 26,
    "Kind": "Cardio",
    "totalReps": 34
  },
  {
    "Day": 27,
    "Kind": "ActiveRecovery",
    "totalReps": 211
  },
  {
    "Day": 29,
    "Kind": "UpperBody",
    "totalReps": 280
  },
  {
    "Day": 30,
    "Kind": "LowerBody",
    "totalReps": 260
  },
  {
    "Day": 32,
    "Kind": "AllBody",
    "totalReps": 306
  },
  {
    "Day": 33,
    "Kind": "Cardio",
    "totalReps": 34
  },
  {
    "Day": 34,
    "Kind": "ActiveRecovery",
    "totalReps": 211
  },
  {
    "Day": 36,
    "Kind": "UpperBody",
    "totalReps": 280
  },
  {
    "Day": 37,
    "Kind": "LowerBody",
    "totalReps": 260
  },
  {
    "Day": 39,
    "Kind": "AllBody",
    "totalReps": 306
  },
  {
    "Day": 40,
    "Kind": "Cardio",
    "totalReps": 34
  },
  {
    "Day": 41,
    "Kind": "ActiveRecovery",
    "totalReps": 211
  },
  {
    "Day": 43,
    "Kind": "UpperBody",
    "totalReps": 280
  },
  {
    "Day": 44,
    "Kind": "LowerBody",
    "totalReps": 260
  },
  {
    "Day": 46,
    "Kind": "AllBody",
    "totalReps": 306
  },
  {
    "Day": 47,
    "Kind": "Cardio",
    "totalReps": 34
  },
  {
    "Day": 48,
    "Kind": "ActiveRecovery",
    "totalReps": 211
  },
  {
    "Day": 50,
    "Kind": "UpperBody",
    "totalReps": 280
  },
  {
    "Day": 51,
    "Kind": "LowerBody",
    "totalReps": 260
  },
  {
    "Day": 53,
    "Kind": "AllBody",
    "totalReps": 306
  },
  {
    "Day": 54,
    "Kind": "Cardio",
    "totalReps": 34
  },
  {
    "Day": 55,
    "Kind": "ActiveRecovery",
    "totalReps": 211
  },
  {
    "Day": 57,
    "Kind": "UpperBody",
    "totalReps": 280
  },
  {
    "Day": 58,
    "Kind": "LowerBody",
    "totalReps": 260
  },
  {
    "Day": 60,
    "Kind": "AllBody",
    "totalReps": 306
  }
]
// workoutChart2
const workoutRepsByKindAgg = [
  {
    "Kind": "AllBody",
    "totalReps": 2754
  },
  {
    "Kind": "UpperBody",
    "totalReps": 2520
  },
  {
    "Kind": "LowerBody",
    "totalReps": 2340
  },
  {
    "Kind": "ActiveRecovery",
    "totalReps": 1688
  }
]
// waterChart1
const waterLitres = [
  {
    "Day": 1,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 2,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 3,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 4,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 5,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 6,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 7,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 8,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 9,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 10,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 11,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 12,
    "Bottles": 4,
    "Litres": 2
  },
  {
    "Day": 13,
    "Bottles": 4,
    "Litres": 2
  },
  {
    "Day": 14,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 15,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 16,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 17,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 18,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 19,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 20,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 21,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 22,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 23,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 24,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 25,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 26,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 27,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 28,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 29,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 30,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 31,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 32,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 33,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 34,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 35,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 36,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 37,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 38,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 39,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 40,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 41,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 42,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 43,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 44,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 45,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 46,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 47,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 48,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 49,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 50,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 51,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 52,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 53,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 54,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 55,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 56,
    "Bottles": 3,
    "Litres": 1.5
  },
  {
    "Day": 57,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 58,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 59,
    "Bottles": 2,
    "Litres": 1
  },
  {
    "Day": 60,
    "Bottles": 1,
    "Litres": .5
  }
]
// meditationChart1
const meditationMinutes = [
  {
    "Day": 1,
    "Duration": 10
  },
  {
    "Day": 2,
    "Duration": 10
  },
  {
    "Day": 3,
    "Duration": 10
  },
  {
    "Day": 4,
    "Duration": 10
  },
  {
    "Day": 5,
    "Duration": 10
  },
  {
    "Day": 6,
    "Duration": 10
  },
  {
    "Day": 7,
    "Duration": 10
  },
  {
    "Day": 8,
    "Duration": 10
  },
  {
    "Day": 9,
    "Duration": 10
  },
  {
    "Day": 10,
    "Duration": ""
  },
  {
    "Day": 11,
    "Duration": 10
  },
  {
    "Day": 12,
    "Duration": 10
  },
  {
    "Day": 13,
    "Duration": 10
  },
  {
    "Day": 14,
    "Duration": ""
  },
  {
    "Day": 15,
    "Duration": 10
  },
  {
    "Day": 16,
    "Duration": 10
  },
  {
    "Day": 17,
    "Duration": 10
  },
  {
    "Day": 18,
    "Duration": 10
  },
  {
    "Day": 19,
    "Duration": 10
  },
  {
    "Day": 20,
    "Duration": 10
  },
  {
    "Day": 21,
    "Duration": ""
  },
  {
    "Day": 22,
    "Duration": ""
  },
  {
    "Day": 23,
    "Duration": ""
  },
  {
    "Day": 24,
    "Duration": 10
  },
  {
    "Day": 25,
    "Duration": 10
  },
  {
    "Day": 26,
    "Duration": 15
  },
  {
    "Day": 27,
    "Duration": 15
  },
  {
    "Day": 28,
    "Duration": 10
  },
  {
    "Day": 29,
    "Duration": 10
  },
  {
    "Day": 30,
    "Duration": ""
  },
  {
    "Day": 31,
    "Duration": 10
  },
  {
    "Day": 32,
    "Duration": 20
  },
  {
    "Day": 33,
    "Duration": 10
  },
  {
    "Day": 34,
    "Duration": ""
  },
  {
    "Day": 35,
    "Duration": ""
  },
  {
    "Day": 36,
    "Duration": ""
  },
  {
    "Day": 37,
    "Duration": 10
  },
  {
    "Day": 38,
    "Duration": ""
  },
  {
    "Day": 39,
    "Duration": ""
  },
  {
    "Day": 40,
    "Duration": ""
  },
  {
    "Day": 41,
    "Duration": ""
  },
  {
    "Day": 42,
    "Duration": 10
  },
  {
    "Day": 43,
    "Duration": ""
  },
  {
    "Day": 44,
    "Duration": ""
  },
  {
    "Day": 45,
    "Duration": 10
  },
  {
    "Day": 46,
    "Duration": ""
  },
  {
    "Day": 47,
    "Duration": ""
  },
  {
    "Day": 48,
    "Duration": 10
  },
  {
    "Day": 49,
    "Duration": ""
  },
  {
    "Day": 50,
    "Duration": 10
  },
  {
    "Day": 51,
    "Duration": 10
  },
  {
    "Day": 52,
    "Duration": ""
  },
  {
    "Day": 53,
    "Duration": ""
  },
  {
    "Day": 54,
    "Duration": 10
  },
  {
    "Day": 55,
    "Duration": 10
  },
  {
    "Day": 56,
    "Duration": ""
  },
  {
    "Day": 57,
    "Duration": 10
  },
  {
    "Day": 58,
    "Duration": 10
  },
  {
    "Day": 59,
    "Duration": ""
  },
  {
    "Day": 60,
    "Duration": ""
  }
]
// codeChart1
const codeMinutes = [
  {
    "Day": 1,
    "Time": 45
  },
  {
    "Day": 2,
    "Time": 30
  },
  {
    "Day": 3,
    "Time": 20
  },
  {
    "Day": 4,
    "Time": 20
  },
  {
    "Day": 5,
    "Time": 20
  },
  {
    "Day": 6,
    "Time": 20
  },
  {
    "Day": 7,
    "Time": 20
  },
  {
    "Day": 8,
    "Time": 45
  },
  {
    "Day": 9,
    "Time": 20
  },
  {
    "Day": 10,
    "Time": 20
  },
  {
    "Day": 11,
    "Time": 20
  },
  {
    "Day": 12,
    "Time": 20
  },
  {
    "Day": 13,
    "Time": 20
  },
  {
    "Day": 14,
    "Time": 0
  },
  {
    "Day": 15,
    "Time": 0
  },
  {
    "Day": 16,
    "Time": 30
  },
  {
    "Day": 17,
    "Time": 30
  },
  {
    "Day": 18,
    "Time": 30
  },
  {
    "Day": 19,
    "Time": 30
  },
  {
    "Day": 20,
    "Time": 30
  },
  {
    "Day": 21,
    "Time": 30
  },
  {
    "Day": 22,
    "Time": 20
  },
  {
    "Day": 23,
    "Time": 0
  },
  {
    "Day": 24,
    "Time": 0
  },
  {
    "Day": 25,
    "Time": 0
  },
  {
    "Day": 26,
    "Time": 0
  },
  {
    "Day": 27,
    "Time": 20
  },
  {
    "Day": 28,
    "Time": 20
  },
  {
    "Day": 29,
    "Time": 0
  },
  {
    "Day": 30,
    "Time": 0
  },
  {
    "Day": 31,
    "Time": 0
  },
  {
    "Day": 32,
    "Time": 20
  },
  {
    "Day": 33,
    "Time": 30
  },
  {
    "Day": 34,
    "Time": 20
  },
  {
    "Day": 35,
    "Time": 20
  },
  {
    "Day": 36,
    "Time": 20
  },
  {
    "Day": 37,
    "Time": 20
  },
  {
    "Day": 38,
    "Time": 20
  },
  {
    "Day": 39,
    "Time": 0
  },
  {
    "Day": 40,
    "Time": 0
  },
  {
    "Day": 41,
    "Time": 0
  },
  {
    "Day": 42,
    "Time": 20
  },
  {
    "Day": 43,
    "Time": 20
  },
  {
    "Day": 44,
    "Time": 20
  },
  {
    "Day": 45,
    "Time": 20
  },
  {
    "Day": 46,
    "Time": 0
  },
  {
    "Day": 47,
    "Time": 0
  },
  {
    "Day": 48,
    "Time": 30
  },
  {
    "Day": 49,
    "Time": 0
  },
  {
    "Day": 50,
    "Time": 20
  },
  {
    "Day": 51,
    "Time": 0
  },
  {
    "Day": 52,
    "Time": 15
  },
  {
    "Day": 53,
    "Time": 20
  },
  {
    "Day": 54,
    "Time": 15
  },
  {
    "Day": 55,
    "Time": 20
  },
  {
    "Day": 56,
    "Time": 0
  },
  {
    "Day": 57,
    "Time": 0
  },
  {
    "Day": 58,
    "Time": 0
  },
  {
    "Day": 59,
    "Time": 0
  },
  {
    "Day": 60,
    "Time": 0
  }
]

// CHARTS
// workoutChart1
var ctx1 = document.getElementById("workoutChart1");
var barChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: workoutRepsByKind.map(item => "Day " + item.Day + " : " + item.Kind),
    datasets: [
      {
        label: "Reps",
        data: workoutRepsByKind.map(item => item.totalReps),
        hoverBackgroundColor: "#1F1730",
        hoverBorderColor: "#FFAB00",
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        }

      ],
      yAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
            zeroLineWidth: 2,
            zeroLineColor: '#FFAB00',
            color: '#636363',
            drawBorder: false,
          },
          ticks: {
            display: true,
            labelOffset: 0,
            padding: 20,
          },
        },
      ],
    },
  },
});

// workoutChart2
var ctx2 = document.getElementById("workoutChart2");
var barChart2 = new Chart(ctx2, {
  type: 'horizontalBar',
  data: {
    labels: workoutRepsByKindAgg.map(item => item.Kind),
    datasets: [
      {
        label: "Total reps",
        data: workoutRepsByKindAgg.map(item => item.totalReps),
        hoverBackgroundColor: "#1F1730",
        hoverBorderColor: "#FFAB00",
        hoverBorderWidth: 2,
        barThickness: 16,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: true,
          },
        }

      ],
      yAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
            color: '#636363',
            drawBorder: false,
            zeroLineWidth: 1,
            zeroLineColor: '#636363',
          },
          ticks: {
            display: true,
            labelOffset: 0,
            padding: 20,
          },
        },
      ],
    },
  },
});

// waterChart1
var ctx3 = document.getElementById("waterChart1");
var barChart3 = new Chart(ctx3, {
  type: "bar",
  data: {
    labels: waterLitres.map(item => "Day " + item.Day),
    datasets: [
      {
        label: "Litres",
        data: waterLitres.map(item => item.Litres),
        borderWidth: 1,
        hoverBackgroundColor: "#1F1730",
        hoverBorderColor: "#FFAB00",
        hoverBorderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        }

      ],
      yAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
            zeroLineWidth: 2,
            zeroLineColor: '#FFAB00',
            color: '#636363',
            drawBorder: false,
          },
          ticks: {
            display: true,
            labelOffset: 0,
            padding: 20,
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

//meditationChart1
var ctx4 = document.getElementById("meditationChart1");
var barChart4 = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: meditationMinutes.map(item => "Day " + item.Day),
    datasets: [
      {
        label: "Minutes",
        data: meditationMinutes.map(item => item.Duration),
        borderWidth: 1,
        hoverBackgroundColor: "#1F1730",
        hoverBorderColor: "#FFAB00",
        hoverBorderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        }

      ],
      yAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
            zeroLineWidth: 2,
            zeroLineColor: '#FFAB00',
            color: '#636363',
            drawBorder: false,
          },
          ticks: {
            display: true,
            labelOffset: 0,
            padding: 20,
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

//codeChart1
var ctx5 = document.getElementById("codeChart1");
var barChart4 = new Chart(ctx5, {
  type: "bar",
  data: {
    labels: codeMinutes.map(item => "Day " + item.Day),
    datasets: [
      {
        label: "Minutes",
        data: codeMinutes.map(item => item.Time),
        borderWidth: 1,
        hoverBackgroundColor: "#1F1730",
        hoverBorderColor: "#FFAB00",
        hoverBorderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        }

      ],
      yAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
            zeroLineWidth: 2,
            zeroLineColor: '#FFAB00',
            color: '#636363',
            drawBorder: false,
          },
          ticks: {
            display: true,
            labelOffset: 0,
            padding: 20,
          },
        },
      ],
    },
  },
});

// tempChart
var ctx2 = document.getElementById("secondChart");
var repsByDayChart = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: workoutRepsByKind.map(item => item.Day + " " + item.Kind),
    datasets: [
      {
        label: "Reps per day",
        data: workoutRepsByKind.map(item => item.totalReps),
        borderWidth: 1,
        hoverBackgroundColor: "#1F1730",
        hoverBorderColor: "#FFAB00",
        hoverBorderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
