// Prevent zooming with ctrl+wheel
window.addEventListener("wheel", (e) => {
  const isPinching = e.ctrlKey;
  if (isPinching) e.preventDefault();
}, { passive: false });

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Make tables responsive
  document.querySelectorAll('table').forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('overflow-x-auto');
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // Add hover effect to table rows
  document.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.classList.add('bg-gray-50');
    });
    row.addEventListener('mouseleave', () => {
      row.classList.remove('bg-gray-50');
    });
  });
});

// Support for responsive design
window.addEventListener('resize', function() {
  if (typeof Chart !== 'undefined') {
    Chart.instances.forEach(chart => {
      chart.resize();
    });
  }
});
