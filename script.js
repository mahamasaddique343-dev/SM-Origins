/* =========================================================
   SM ORIGINS — DASHBOARD ENGINE
   ========================================================= */


/* ---------------------------------------------------------
   ELEMENTS
   --------------------------------------------------------- */

const navItems = document.querySelectorAll(".nav-item");

const pages = document.querySelectorAll(".page");

const mobileMenu =
    document.getElementById("mobileMenu");

const sidebar =
    document.getElementById("sidebar");

const mobileOverlay =
    document.getElementById("mobileOverlay");

const notificationBtn =
    document.getElementById("notificationBtn");

const notificationPanel =
    document.getElementById("notificationPanel");

const closeNotifications =
    document.getElementById("closeNotifications");

const themeButton =
    document.getElementById("themeButton");


/* ---------------------------------------------------------
   PAGE NAVIGATION
   --------------------------------------------------------- */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const selectedPage =
            item.dataset.page;

        /* Remove active state */
        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        /* Activate clicked item */
        item.classList.add("active");


        /* Hide all pages */
        pages.forEach(page => {
            page.classList.remove("active-page");
            page.classList.add("hidden-page");
        });


        /* Show selected page */
        const target =
            document.getElementById(
                selectedPage + "Page"
            );

        if (target) {

            target.classList.remove("hidden-page");

            target.classList.add("active-page");

        }


        /* Close mobile sidebar */
        sidebar.classList.remove("open");

        mobileOverlay.classList.remove("active");


        /* Close notification */
        notificationPanel.classList.remove("show");

    });

});


/* ---------------------------------------------------------
   MOBILE SIDEBAR
   --------------------------------------------------------- */

mobileMenu.addEventListener("click", () => {

    sidebar.classList.toggle("open");

    mobileOverlay.classList.toggle("active");

});


mobileOverlay.addEventListener("click", () => {

    sidebar.classList.remove("open");

    mobileOverlay.classList.remove("active");

});


/* ---------------------------------------------------------
   NOTIFICATIONS
   --------------------------------------------------------- */

notificationBtn.addEventListener("click", event => {

    event.stopPropagation();

    notificationPanel.classList.toggle("show");

});


closeNotifications.addEventListener("click", () => {

    notificationPanel.classList.remove("show");

});


document.addEventListener("click", event => {

    if (
        !notificationPanel.contains(event.target) &&
        event.target !== notificationBtn
    ) {

        notificationPanel.classList.remove("show");

    }

});


/* ---------------------------------------------------------
   LIVE DATE + TIME
   --------------------------------------------------------- */

function updateClock() {

    const now = new Date();

    const dateOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
    };

    const formattedDate =
        now.toLocaleDateString(
            "en-US",
            dateOptions
        );


    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");


    document.getElementById("dateDisplay")
        .textContent = formattedDate;

    document.getElementById("timeDisplay")
        .textContent =
            `${hours}:${minutes} (GMT)`;

}


updateClock();

setInterval(updateClock, 1000);


/* ---------------------------------------------------------
   GLOW MODE
   --------------------------------------------------------- */

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("extra-glow");

    });

}


/* ---------------------------------------------------------
   PROJECT CARD INTERACTION
   --------------------------------------------------------- */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-2px)";

        card.style.transition =
            "transform .2s ease, box-shadow .2s ease";

        card.style.boxShadow =
            "0 10px 35px rgba(0, 100, 255, .12)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

        card.style.boxShadow = "none";

    });

});


/* ---------------------------------------------------------
   ACTIVE PROJECT STATUS
   --------------------------------------------------------- */

const receivedButtons =
    document.querySelectorAll(".received");

receivedButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.textContent = "Received";

        button.style.boxShadow =
            "0 0 12px rgba(0,255,100,.25)";

    });

});


/* ---------------------------------------------------------
   WEBSITE ROW INTERACTION
   --------------------------------------------------------- */

const websiteRows =
    document.querySelectorAll(".website-row");

websiteRows.forEach(row => {

    row.style.cursor = "pointer";

    row.addEventListener("click", () => {

        websiteRows.forEach(item => {
            item.style.background = "transparent";
        });

        row.style.background =
            "rgba(0, 132, 255, .08)";

    });

});


/* ---------------------------------------------------------
   SIMPLE KEYBOARD SHORTCUTS
   --------------------------------------------------------- */

document.addEventListener("keydown", event => {

    /* Press N = notifications */

    if (
        event.key.toLowerCase() === "n" &&
        !event.target.matches("input, textarea")
    ) {

        notificationPanel.classList.toggle("show");

    }


    /* Press Escape = close everything */

    if (event.key === "Escape") {

        notificationPanel.classList.remove("show");

        sidebar.classList.remove("open");

        mobileOverlay.classList.remove("active");

    }

});


/* ---------------------------------------------------------
   DASHBOARD INITIALIZATION
   --------------------------------------------------------- */

function initializeDashboard() {

    console.log(
        "SM Origins Dashboard initialized."
    );

    console.log(
        "All systems operational."
    );

}


initializeDashboard();