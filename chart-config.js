// Common Chart Options
Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
Chart.defaults.color = '#6b7280';
Chart.defaults.font.size = 12;

// US Market Configuration
const usMarketConfig = {
    type: 'bar',
    data: {
        labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [
            {
                label: 'HV Equipment',
                data: [3.2, 3.7, 4.3, 5.0, 5.8, 6.7],
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
            },
            {
                label: 'MV Equipment',
                data: [4.5, 5.0, 5.6, 6.2, 6.9, 7.5],
                backgroundColor: 'rgba(99, 102, 241, 0.7)',
            },
            {
                label: 'LV Equipment',
                data: [6.8, 7.3, 7.9, 8.5, 9.2, 10.0],
                backgroundColor: 'rgba(139, 92, 246, 0.7)',
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'US Power Equipment Market Growth ($B)',
                font: {
                    size: 14,
                    weight: 'normal'
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'rect'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': $' + context.raw + 'B';
                    }
                }
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: false,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: false,
                grid: {
                    borderDash: [2, 4],
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'B';
                    }
                }
            }
        }
    }
};

// China Market Configuration
const chinaMarketConfig = {
    type: 'bar',
    data: {
        labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [
            {
                label: 'HV Equipment',
                data: [4.8, 5.2, 5.6, 6.1, 6.6, 7.2],
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
            },
            {
                label: 'MV Equipment',
                data: [3.2, 3.5, 3.9, 4.2, 4.6, 5.0],
                backgroundColor: 'rgba(249, 115, 22, 0.7)',
            },
            {
                label: 'LV Equipment',
                data: [2.0, 2.2, 2.4, 2.6, 2.8, 3.0],
                backgroundColor: 'rgba(245, 158, 11, 0.7)',
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'China Power Equipment Market Growth ($B)',
                font: {
                    size: 14,
                    weight: 'normal'
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'rect'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': $' + context.raw + 'B';
                    }
                }
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: false,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: false,
                grid: {
                    borderDash: [2, 4],
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'B';
                    }
                }
            }
        }
    }
};

// India Market Configuration
const indiaMarketConfig = {
    type: 'bar',
    data: {
        labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [
            {
                label: 'Transmission Equipment',
                data: [5.1, 5.9, 6.8, 7.9, 9.0, 10.2],
                backgroundColor: 'rgba(236, 72, 153, 0.7)',
            },
            {
                label: 'Distribution Equipment',
                data: [8.2, 9.3, 10.4, 11.6, 13.0, 14.5],
                backgroundColor: 'rgba(217, 70, 239, 0.7)',
            },
            {
                label: 'Cable Market',
                data: [21.2, 23.5, 26.1, 28.5, 30.6, 32.9],
                backgroundColor: 'rgba(168, 85, 247, 0.7)',
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'India Power Infrastructure Market Growth ($B)',
                font: {
                    size: 14,
                    weight: 'normal'
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'rect'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': $' + context.raw + 'B';
                    }
                }
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: false,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: false,
                grid: {
                    borderDash: [2, 4],
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'B';
                    }
                }
            }
        }
    }
};

// EU Market Configuration
const euMarketConfig = {
    type: 'bar',
    data: {
        labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [
            {
                label: 'Green Switchgear',
                data: [3.2, 3.8, 4.4, 5.1, 5.7, 6.3],
                backgroundColor: 'rgba(5, 150, 105, 0.7)',
            },
            {
                label: 'HVDC Transmission',
                data: [5.6, 6.5, 7.4, 8.3, 9.0, 9.7],
                backgroundColor: 'rgba(16, 185, 129, 0.7)',
            },
            {
                label: 'Digital Grid',
                data: [7.8, 9.3, 10.9, 12.4, 13.7, 15.0],
                backgroundColor: 'rgba(52, 211, 153, 0.7)',
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'EU Grid Investment Forecast ($B)',
                font: {
                    size: 14,
                    weight: 'normal'
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'rect'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': $' + context.raw + 'B';
                    }
                }
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: false,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: false,
                grid: {
                    borderDash: [2, 4],
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'B';
                    }
                }
            }
        }
    }
};

// Materials Charts Configuration
const conductorMaterialsConfig = {
    type: 'polarArea',
    data: {
        labels: ['Copper', 'Aluminum', 'Silver Alloys', 'Tin-Plated Copper', 'Low-Carbon Steel'],
        datasets: [
            {
                data: [40, 30, 15, 10, 5],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(249, 115, 22, 0.7)',
                    'rgba(139, 92, 246, 0.7)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.raw + '% demand growth';
                    }
                }
            }
        }
    }
};

const insulationMaterialsConfig = {
    type: 'polarArea',
    data: {
        labels: ['SF6 Alternatives', 'HCEP', 'Vacuum Technology', 'Oil-Based', 'Air Insulation'],
        datasets: [
            {
                data: [60, 30, 45, 15, 10],
                backgroundColor: [
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                    'rgba(249, 115, 22, 0.7)',
                    'rgba(239, 68, 68, 0.7)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.raw + '% demand growth';
                    }
                }
            }
        }
    }
};

const coreMaterialsConfig = {
    type: 'doughnut',
    data: {
        labels: ['Silicon Steel', 'Amorphous Alloys', 'Nanocrystalline', 'Other'],
        datasets: [
            {
                data: [55, 25, 15, 5],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(249, 115, 22, 0.7)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.raw + '% market share';
                    }
                }
            }
        }
    }
};

const structuralMaterialsConfig = {
    type: 'doughnut',
    data: {
        labels: ['Advanced Polymers', 'Composites', 'Low-Carbon Steel', 'Digital Components', 'Other'],
        datasets: [
            {
                data: [30, 20, 25, 15, 10],
                backgroundColor: [
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(249, 115, 22, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                    'rgba(239, 68, 68, 0.7)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.raw + '% growth rate';
                    }
                }
            }
        }
    }
};
