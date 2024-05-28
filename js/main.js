function hideNavbar() {
    const controls = document.querySelector('.nav-container');
    const threshold = 95;

    function handleScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > threshold) {
            controls.style.opacity = '0';
            controls.style.transform = 'translateY(-50px)';
        } else {
            controls.style.opacity = '1';
            controls.style.transform = 'translateY(0)';
        }
    }

    window.addEventListener('scroll', handleScroll);
}

document.addEventListener("DOMContentLoaded", hideNavbar);

function playAudio() {
    var navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function (navItem) {
        navItem.addEventListener('click', function () {
            var audio = new Audio('../assets/audio/pop.mp3');
            audio.play();
        });
    });
}

document.addEventListener("DOMContentLoaded", playAudio);

document.addEventListener("DOMContentLoaded", function () {
    const testimonialJSON = '../assets/misc/testimonials.json';
    const testimonialContainer = document.querySelector('.testimonial');

    fetch(testimonialJSON)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                data.forEach(testimonial => {
                    const testimonialElement = document.createElement('div');
                    testimonialElement.classList.add('testimonial');

                    const contentElement = document.createElement('p');
                    contentElement.textContent = testimonial.testimonial;

                    const authorElement = document.createElement('div');
                    authorElement.classList.add('author');

                    const authorText = document.createElement('p');
                    authorText.textContent = `- ${testimonial.name} | ${testimonial.occupation}`;
                    
                    authorElement.appendChild(authorText);
                    testimonialElement.appendChild(contentElement);
                    testimonialElement.appendChild(authorElement);

                    testimonialContainer.appendChild(testimonialElement);
                });
            } else {
                console.error('Data is not an array');
            }
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => {
                if (c !== card) c.classList.add('not-hovered');
            });
        });

        card.addEventListener('mouseleave', () => {
            cards.forEach(c => c.classList.remove('not-hovered'));
        });
    });
});