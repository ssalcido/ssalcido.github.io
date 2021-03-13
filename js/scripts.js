const repsByKind = [
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


var ctx1 = document.getElementById("repsByDay");
var repsByDayChart = new Chart(ctx1, {
  type: "bar",
  data: {
    labels:repsByKind.map(item => item.Day  + " " + item.Kind ) ,
    datasets: [
      {
        label: "Reps per day",
        data: repsByKind.map(item => item.totalReps),
        borderWidth: 1,
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
var ctx2 = document.getElementById("secondChart");
var repsByDayChart = new Chart(ctx2, {
  type: "bar",
  data: {
    labels:repsByKind.map(item => item.Day  + " " + item.Kind ) ,
    datasets: [
      {
        label: "Reps per day",
        data: repsByKind.map(item => item.totalReps),
        borderWidth: 1,
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
