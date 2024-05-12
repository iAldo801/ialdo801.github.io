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

document.addEventListener("DOMContentLoaded", playAudio);