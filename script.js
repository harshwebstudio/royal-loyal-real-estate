// ===============================
// ROYAL & LOYAL REAL ESTATE
// MAIN JAVASCRIPT
// ===============================


// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const isOpen = navMenu.classList.contains("show");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close Menu" : "Open Menu"
        );

        menuToggle.innerHTML = isOpen ? "✕" : "☰";

    });


    // Close menu after clicking a link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );

        });

    });

}



// ===============================
// PROPERTY SEARCH
// ===============================

const propertyType =
    document.getElementById("propertyType");

const propertyLocation =
    document.getElementById("propertyLocation");

const propertyPurpose =
    document.getElementById("propertyPurpose");

const searchButton =
    document.querySelector(".search-btn");


if (searchButton) {

    searchButton.addEventListener("click", function (event) {

        event.preventDefault();


        const type =
            propertyType
                ? propertyType.value
                : "";

        const location =
            propertyLocation
                ? propertyLocation.value
                : "";

        const purpose =
            propertyPurpose
                ? propertyPurpose.value
                : "";


        const params = new URLSearchParams();


        if (type) {
            params.set("type", type);
        }


        if (location) {
            params.set("location", location);
        }


        if (purpose) {
            params.set("purpose", purpose);
        }


        const query =
            params.toString();


        window.location.href =
            query
                ? `properties.html?${query}`
                : "properties.html";

    });

}



// ===============================
// HEADER SCROLL EFFECT
// ===============================

const navbar =
    document.querySelector(".navbar");


if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}



// ===============================
// SMOOTH INTERNAL LINKS
// ===============================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });



// ===============================
// CURRENT YEAR
// ===============================

const yearElements =
    document.querySelectorAll("[data-year]");


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});



// ===============================
// SIMPLE REVEAL ANIMATION
// ===============================

const revealElements =
    document.querySelectorAll(
        ".service-card, .property-card, .why-item, .stat-item"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.classList.add(
            "reveal-element"
        );

        observer.observe(element);

    });

}



// ===============================
// WHATSAPP ENQUIRY
// ===============================

function openWhatsApp(message) {

    const phone =
        "919987475783";


    const defaultMessage =
        "Hello Royal & Loyal Real Estate, I am interested in a property.";


    const finalMessage =
        message || defaultMessage;


    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}



// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "Royal & Loyal Real Estate website loaded successfully."
);
