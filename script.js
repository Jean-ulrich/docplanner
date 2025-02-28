    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

document.querySelector('.iconemenu').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});