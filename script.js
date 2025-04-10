document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll('.hidden');

    // Effetto di scorrimento per far apparire i contenuti
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    hiddenElements.forEach(element => observer.observe(element));

    // Scorrimento fluido al cliccare i link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
