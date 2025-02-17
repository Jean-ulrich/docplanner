    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 50) { // Si on scrolle de plus de 50px
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
