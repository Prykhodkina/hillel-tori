`use strict;`

class Navigation {
    constructor() {
        this.links = document.querySelectorAll("nav a");
        this.content = document.getElementById("content");

        this.links.forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();
                const path = link.getAttribute("href");
                history.pushState({ path }, "", path);
                this.updateActiveLink(path);
                this.renderPage(path);
            });
        });

        this.updateActiveLink(window.location.pathname);
        this.renderPage(window.location.pathname);

        window.addEventListener("popstate", () => {
            this.updateActiveLink(window.location.pathname);
            this.renderPage(window.location.pathname);
        });
    }

    updateActiveLink(path) {
        this.links.forEach(link => {
            if (link.getAttribute("href") === path) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    renderPage(path) {
        switch (path) {
            case "/home":
                this.content.textContent = "Welcome to Home!";
                break;
            case "/about":
                this.content.textContent = "About Us Page";
                break;
            case "/contact":
                this.content.textContent = "Contact Page";
                break;
        }
    }
}

new Navigation();
