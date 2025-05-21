        var navbar = document.querySelector(".navbar-area")
        document.querySelector(".open-navbar-icon").
        addEventListener("click", () => {
            navbar.classList.add("change");
            document.querySelector('.top-border').classList.add('change')
            document.body.style.overflow = "hidden";
        });

        document.querySelector(".close-navbar-icon").
        addEventListener("click",() => {
            navbar.classList.remove("change");
            document.body.style.overflow = "";
        });

        document.querySelector('.nav-list').
        addEventListener("click", () => {
            location.reload()
        });
        document.querySelector(".open-navbar-icon").
        addEventListener("click", () => {
            navbar.classList.add("change");
            });
            document.querySelector(".home").addEventListener("click", (e) => {
                e.stopPropagation();
                window.location.href = "index.html";
            });
            document.querySelector(".about").addEventListener("click", (e) => {
                e.stopPropagation();
                window.location.href = "about.html";
            });
            document.querySelector(".menu").addEventListener("click", (e) => {
                e.stopPropagation();
                window.location.href = "menu.html";
            });