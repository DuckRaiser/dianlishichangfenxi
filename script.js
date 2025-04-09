document.addEventListener('DOMContentLoaded', function() {
    // US Market Chart
    const usMarketCtx = document.getElementById('usMarketChart').getContext('2d');
    new Chart(usMarketCtx, usMarketConfig);
    
    // China Market Chart
    const chinaMarketCtx = document.getElementById('chinaMarketChart').getContext('2d');
    new Chart(chinaMarketCtx, chinaMarketConfig);
    
    // India Market Chart
    const indiaMarketCtx = document.getElementById('indiaMarketChart').getContext('2d');
    new Chart(indiaMarketCtx, indiaMarketConfig);
    
    // EU Market Chart
    const euMarketCtx = document.getElementById('euMarketChart').getContext('2d');
    new Chart(euMarketCtx, euMarketConfig);
    
    // Material Charts
    const conductorMaterialsCtx = document.getElementById('conductorMaterialsChart').getContext('2d');
    new Chart(conductorMaterialsCtx, conductorMaterialsConfig);
    
    const insulationMaterialsCtx = document.getElementById('insulationMaterialsChart').getContext('2d');
    new Chart(insulationMaterialsCtx, insulationMaterialsConfig);
    
    const coreMaterialsCtx = document.getElementById('coreMaterialsChart').getContext('2d');
    new Chart(coreMaterialsCtx, coreMaterialsConfig);
    
    const structuralMaterialsCtx = document.getElementById('structuralMaterialsChart').getContext('2d');
    new Chart(structuralMaterialsCtx, structuralMaterialsConfig);
    
    // Make tables responsive
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const headerCells = table.querySelectorAll('th');
        const bodyCells = table.querySelectorAll('td');
        
        // Add minimum width to ensure readability
        headerCells.forEach(cell => {
            cell.style.minWidth = '180px';
        });
    });
});
