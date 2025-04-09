document.addEventListener('DOMContentLoaded', function() {
  // Set Chart.js defaults
  Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  Chart.defaults.font.size = 12;
  Chart.defaults.color = '#6B7280';
  Chart.defaults.elements.bar.borderRadius = 4;
  Chart.defaults.elements.line.tension = 0.3;

  // China to Vietnam Transition Chart
  const chinaToVietnamCtx = document.getElementById('chinaToVietnamChart').getContext('2d');
  new Chart(chinaToVietnamCtx, {
    type: 'bar',
    data: {
      labels: ['2020', '2021', '2022', '2023', '2024 (Est.)', '2025 (Proj.)'],
      datasets: [
        {
          label: 'China Manufacturing Share',
          data: [72, 68, 63, 58, 53, 48],
          backgroundColor: 'rgba(239, 68, 68, 0.8)',
          borderColor: 'rgba(239, 68, 68, 1)',
          borderWidth: 1
        },
        {
          label: 'Vietnam Manufacturing Share',
          data: [5, 8, 12, 16, 20, 24],
          backgroundColor: 'rgba(16, 185, 129, 0.8)',
          borderColor: 'rgba(16, 185, 129, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Manufacturing Shift: China to Vietnam (%)',
          padding: {
            bottom: 10
          }
        },
        legend: {
          position: 'bottom'
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 80,
          title: {
            display: true,
            text: 'Percentage of Total Production'
          }
        }
      }
    }
  });

  // European Investment Chart
  const europeanInvestmentCtx = document.getElementById('europeanInvestmentChart').getContext('2d');
  new Chart(europeanInvestmentCtx, {
    type: 'doughnut',
    data: {
      labels: ['Poland', 'Sweden', 'Finland', 'Germany', 'Italy', 'Switzerland', 'Other EU'],
      datasets: [{
        label: 'Investment Allocation',
        data: [28, 21, 15, 14, 10, 8, 4],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(37, 99, 235, 0.8)',
          'rgba(107, 114, 128, 0.8)'
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'ABB European Investment Distribution (%)',
          padding: {
            bottom: 10
          }
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  });

  // US Expansion Chart
  const usExpansionCtx = document.getElementById('usExpansionChart').getContext('2d');
  new Chart(usExpansionCtx, {
    type: 'bar',
    data: {
      labels: ['Tennessee', 'Mississippi', 'Wisconsin', 'New Mexico', 'North Carolina', 'Michigan', 'Other States'],
      datasets: [{
        label: 'Investment (Millions USD)',
        data: [80, 40, 100, 40, 35, 30, 65],
        backgroundColor: 'rgba(79, 70, 229, 0.8)',
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        title: {
          display: true,
          text: 'ABB US Manufacturing Investments',
          padding: {
            bottom: 10
          }
        },
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Investment Amount (Millions USD)'
          }
        }
      }
    }
  });

  // Europe Business Chart
  const europeBusinessCtx = document.getElementById('europeBusinessChart').getContext('2d');
  new Chart(europeBusinessCtx, {
    type: 'radar',
    data: {
      labels: ['Electrification', 'Motion', 'Process Automation', 'Robotics & Automation', 'R&D Centers'],
      datasets: [
        {
          label: 'Poland',
          data: [90, 75, 40, 60, 55],
          backgroundColor: 'rgba(59, 130, 246, 0.3)',
          borderColor: 'rgba(59, 130, 246, 0.8)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(59, 130, 246, 1)'
        },
        {
          label: 'Western Europe',
          data: [80, 85, 90, 95, 90],
          backgroundColor: 'rgba(16, 185, 129, 0.3)',
          borderColor: 'rgba(16, 185, 129, 0.8)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(16, 185, 129, 1)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'ABB European Business Strength',
          padding: {
            bottom: 10
          }
        },
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.raw + '/100';
            }
          }
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            display: false
          }
        }
      }
    }
  });

  // Vietnam Growth Chart
  const vietnamGrowthCtx = document.getElementById('vietnamGrowthChart').getContext('2d');
  new Chart(vietnamGrowthCtx, {
    type: 'line',
    data: {
      labels: ['2019', '2020', '2021', '2022', '2023', '2024 (Est.)', '2025 (Proj.)'],
      datasets: [{
        label: 'Manufacturing Capacity',
        data: [100, 130, 180, 250, 320, 410, 510],
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 0.8)',
        borderWidth: 3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'ABB Vietnam Growth (Index: 2019=100)',
          padding: {
            bottom: 10
          }
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Manufacturing Capacity Index'
          }
        }
      }
    }
  });

  // US Business Chart
  const usBusinessCtx = document.getElementById('usBusinessChart').getContext('2d');
  new Chart(usBusinessCtx, {
    type: 'pie',
    data: {
      labels: ['Electrification', 'Motion', 'Process Automation', 'Robotics & Automation'],
      datasets: [{
        label: 'Revenue Distribution',
        data: [42, 28, 18, 12],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'ABB US Business Segment Distribution (%)',
          padding: {
            bottom: 10
          }
        },
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.raw + '%';
            }
          }
        }
      }
    }
  });

  // Investment Plan Chart
  const investmentPlanCtx = document.getElementById('investmentPlanChart').getContext('2d');
  new Chart(investmentPlanCtx, {
    type: 'bar',
    data: {
      labels: ['Electrification', 'Robotics', 'Sustainability', 'Supply Chain', 'Motion', 'Process Automation'],
      datasets: [{
        label: 'Investment (Millions USD)',
        data: [1200, 800, 500, 600, 450, 350],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(75, 85, 99, 0.8)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'ABB Global Investment Plan (2023-2027)',
          padding: {
            bottom: 10
          }
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Investment Amount (Millions USD)'
          }
        }
      }
    }
  });

  // Materials By Segment Chart
  const materialsBySegmentCtx = document.getElementById('materialsBySegmentChart').getContext('2d');
  new Chart(materialsBySegmentCtx, {
    type: 'polarArea',
    data: {
      labels: ['Copper Products', 'Steel & Aluminum', 'Plastics & Polymers', 'Electronic Components', 'Specialty Materials'],
      datasets: [{
        label: 'Purchasing Volume',
        data: [38, 25, 15, 12, 10],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(75, 85, 99, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'ABB Material Purchasing by Category (%)',
          padding: {
            bottom: 10
          }
        },
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12
          }
        }
      }
    }
  });

  // Copper Requirements Chart
  const copperRequirementsCtx = document.getElementById('copperRequirementsChart').getContext('2d');
  new Chart(copperRequirementsCtx, {
    type: 'bar',
    data: {
      labels: ['Busbars', 'Winding Wire', 'Braided Connections', 'Contacts', 'Other Copper'],
      datasets: [{
        label: 'Volume (%)',
        data: [35, 30, 15, 12, 8],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'ABB Copper Component Requirements (%)',
          padding: {
            bottom: 10
          }
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Percentage of Copper Purchasing'
          }
        }
      }
    }
  });

  // Polish Entry Strategy Chart
  const polishEntryStrategyCtx = document.getElementById('polishEntryStrategyChart').getContext('2d');
  new Chart(polishEntryStrategyCtx, {
    type: 'radar',
    data: {
      labels: ['Market Opportunity', 'Product Alignment', 'Competitive Position', 'Supply Chain Integration', 'Sustainability Match'],
      datasets: [
        {
          label: 'Copper Busbars',
          data: [90, 95, 80, 85, 90],
          backgroundColor: 'rgba(239, 68, 68, 0.3)',
          borderColor: 'rgba(239, 68, 68, 0.8)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(239, 68, 68, 1)'
        },
        {
          label: 'Metal Contacts',
          data: [85, 90, 75, 80, 85],
          backgroundColor: 'rgba(59, 130, 246, 0.3)',
          borderColor: 'rgba(59, 130, 246, 0.8)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(59, 130, 246, 1)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Polish Market Entry Opportunity Assessment',
          padding: {
            bottom: 10
          }
        },
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.raw + '/100';
            }
          }
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            display: false
          }
        }
      }
    }
  });

  // European Expansion Chart
  const europeanExpansionCtx = document.getElementById('europeanExpansionChart').getContext('2d');
  new Chart(europeanExpansionCtx, {
    type: 'bar',
    data: {
      labels: ['Poland', 'Germany', 'Sweden', 'Finland', 'Italy', 'Other'],
      datasets: [
        {
          label: 'Current Relationships',
          data: [90, 10, 5, 0, 0, 0],
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1
        },
        {
          label: 'Expansion Target',
          data: [100, 80, 70, 60, 50, 30],
          backgroundColor: 'rgba(139, 92, 246, 0.8)',
          borderColor: 'rgba(139, 92, 246, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'European Business Expansion Strategy',
          padding: {
            bottom: 10
          }
        },
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Penetration Level (%)'
          }
        }
      }
    }
  });

  // US Entry Strategy Chart
  const usEntryStrategyCtx = document.getElementById('usEntryStrategyChart').getContext('2d');
  new Chart(usEntryStrategyCtx, {
    type: 'line',
    data: {
      labels: ['Initial', '6 Months', '12 Months', '18 Months', '24 Months', '36 Months'],
      datasets: [
        {
          label: 'Tennessee Facility',
          data: [0, 10, 30, 60, 80, 90],
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderColor: 'rgba(59, 130, 246, 0.8)',
          borderWidth: 3,
          fill: true
        },
        {
          label: 'Mississippi Facility',
          data: [0, 5, 20, 40, 65, 85],
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          borderColor: 'rgba(245, 158, 11, 0.8)',
          borderWidth: 3,
          fill: true
        },
        {
          label: 'Other US Facilities',
          data: [0, 0, 5, 15, 35, 60],
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderColor: 'rgba(16, 185, 129, 0.8)',
          borderWidth: 3,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'US Market Entry Roadmap',
          padding: {
            bottom: 10
          }
        },
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Business Development Progress (%)'
          }
        }
      }
    }
  });
});
