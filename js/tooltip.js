function initTooltips() {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach((tooltip) => {
        tooltip.addEventListener('mouseover', () => {
            const position = tooltip.getAttribute('data-position');
            tooltip.setAttribute('data-state', 'open');

            const tooltipContent = tooltip.querySelector('.tooltip-content');
            if (tooltipContent) {
                switch (position) {
                    case 'top':
                        tooltipContent.style.top = 'auto';
                        tooltipContent.style.bottom = '100%';
                        tooltipContent.style.left = '50%';
                        tooltipContent.style.transform = 'translateX(-50%)';
                        tooltipContent.style.marginBottom = '10px';
                        break;
                    case 'bottom':
                        tooltipContent.style.top = '100%';
                        tooltipContent.style.bottom = 'auto';
                        tooltipContent.style.left = '50%';
                        tooltipContent.style.transform = 'translateX(-50%)';
                        tooltipContent.style.marginTop = '10px';
                        break;
                    case 'left':
                        tooltipContent.style.top = '50%';
                        tooltipContent.style.bottom = 'auto';
                        tooltipContent.style.left = 'auto';
                        tooltipContent.style.right = '100%';
                        tooltipContent.style.transform = 'translateY(-50%)';
                        tooltipContent.style.marginRight = '10px';
                    case 'right':
                        tooltipContent.style.top = '50%';
                        tooltipContent.style.bottom = 'auto';
                        tooltipContent.style.left = '100%';
                        tooltipContent.style.transform = 'translateY(-50%)';
                        tooltipContent.style.marginLeft = '10px';
                        break;
                    default:
                        tooltipContent.style.top = '50%';
                        tooltipContent.style.bottom = 'auto';
                        tooltipContent.style.left = '100%';
                        tooltipContent.style.transform = 'translateY(-50%)';
                        tooltipContent.style.marginLeft = '10px';
                        break;
                }
            }
        });

        tooltip.addEventListener('mouseout', () => {
            tooltip.setAttribute('data-state', 'closed');
        });
    });
}

document.addEventListener("DOMContentLoaded", initTooltips);