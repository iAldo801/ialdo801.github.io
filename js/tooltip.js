function initTooltips() {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach((tooltip) => {
        tooltip.addEventListener('mouseover', () => {
            tooltip.setAttribute('data-state', 'open');
        });

        tooltip.addEventListener('mouseout', () => {
            tooltip.setAttribute('data-state', 'closed');
        });
    });
}

document.addEventListener("DOMContentLoaded", initTooltips);