document.addEventListener("DOMContentLoaded", function () {
    const yearsSince = document.getElementById('age');

    const currentDate = new Date();
    const startDate = new Date('April 3, 2007');

    const years = currentDate.getFullYear() - startDate.getFullYear();

    yearsSince.textContent = `${years}-year-old`;
});

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");

    let isSidebarOpen = true;
    sidebar.style.transform = "translateX(0)";

    window.toggleSidebar = () => {
        if (isSidebarOpen) {
            sidebar.style.transform = "translateX(-100%)";
        } else {
            sidebar.style.transform = "translateX(0)";
        }
        isSidebarOpen = !isSidebarOpen;
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    sidebarItems.forEach(sidebarItem => {
        sidebarItem.addEventListener('click', function () {
            const audio = new Audio('../assets/audio/pop.mp3');
            audio.play();
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const applyHoverEffect = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cards.forEach(c => {
                    if (c !== card) c.classList.add('hovered');
                });
            });

            card.addEventListener('mouseleave', () => {
                cards.forEach(c => c.classList.remove('hovered'));
            });
        });
    };

    fetch('../assets/misc/testimonials.json')
        .then(response => response.json())
        .then(data => {
            const gridContainer = document.querySelector('.testimonial-grid');
            if (data.length <= 2) {
                gridContainer.classList.add('no-scrollbar');
            }
            if (data.length === 1) {
                gridContainer.classList.add('single-card');
            }

            data.forEach(testimonial => {
                const card = document.createElement('div');
                card.classList.add('card', 'testimonial-card');

                const cardHeader = document.createElement('div');
                cardHeader.classList.add('card-header');

                const userName = document.createElement('h1');
                userName.id = 'testimonial-user';
                userName.textContent = `${testimonial.name} - ${testimonial.occupation}`;
                cardHeader.appendChild(userName);
                if (testimonial.social) {
                    userName.addEventListener('click', () => {
                        window.open(testimonial.social, '_blank');
                    });
                    userName.style.cursor = 'pointer';
                    userName.style.textDecoration = 'underline';
                } else {
                    userName.style.cursor = 'text';
                    userName.style.textDecoration = 'none';
                }
                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');

                const contentContainer = document.createElement('div');
                contentContainer.classList.add('content-container');

                const content = document.createElement('div');
                content.classList.add('content');

                const testimonialText = document.createElement('blockquote');
                testimonialText.id = 'testimonial';
                testimonialText.textContent = testimonial.content;
                content.appendChild(testimonialText);

                contentContainer.appendChild(content);
                cardContent.appendChild(contentContainer);

                card.appendChild(cardHeader);
                card.appendChild(cardContent);

                gridContainer.appendChild(card);
            });

            applyHoverEffect();
        })
        .catch(error => {
            console.error('Error fetching testimonials:', error);
        });
});