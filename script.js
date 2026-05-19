document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const navItems = document.querySelectorAll('.nav-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const slideNum = document.getElementById('slide-num');

    let currentIdx = 0;

    function showSlide(index) {
        // Rimuovi classi attive
        slides.forEach(s => s.classList.remove('active'));
        navItems.forEach(n => n.classList.remove('active'));

        // Attiva la slide corrente
        slides[index].classList.add('active');
        
        // Trova e attiva il pulsante corrispondente nella barra laterale
        const matchedNavItem = document.querySelector(`.nav-item[data-slide="${index}"]`);
        if (matchedNavItem) {
            matchedNavItem.classList.add('active');
        }

        // Aggiorna contatore e indice globale
        currentIdx = index;
        slideNum.innerText = `${currentIdx + 1} / ${slides.length}`;
    }

    // Navigazione pulsanti inferiori
    nextBtn.addEventListener('click', () => {
        if (currentIdx < slides.length - 1) {
            showSlide(currentIdx + 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIdx > 0) {
            showSlide(currentIdx - 1);
        }
    });

    // Navigazione da Sidebar Click
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const slideTarget = parseInt(e.currentTarget.getAttribute('data-slide'), 10);
            showSlide(slideTarget);
        });
    });

    // Supporto frecce tastiera
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentIdx < slides.length - 1) {
            showSlide(currentIdx + 1);
        } else if (e.key === 'ArrowLeft' && currentIdx > 0) {
            showSlide(currentIdx - 1);
        }
    });
});