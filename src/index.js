import { initGoogleMaps } from "./google-maps";
import "./styles.css";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");
const content = document.querySelector("#content");

function fadeIn() {
    const allContent = content.querySelectorAll("*");

    allContent.forEach((child) => {
        child.classList.add("fade-out");
        setTimeout(() => {
            child.style.opacity = 1;
        }, 100);
    });
}

menuBtn.addEventListener("click", () => {
    if (!content.classList.contains("menu")) {
        if (content.classList.contains("home")) {
            content.classList.replace("home", "menu");
            homeBtn.classList.remove("current-bar");
        } else if (content.classList.contains("about")) {
            content.classList.replace("about", "menu");
            aboutBtn.classList.remove("current-bar");
        }

        menuBtn.classList.add("current-bar");

        menuBtn.disabled = true;
        homeBtn.disabled = false;
        aboutBtn.disabled = false;

        content.innerHTML = `
            <div class="dish">
                <div class="name">1. Bánh xèo miền Bắc</div>
                <img src="images/banh-xeo-1.jpg" alt="" />
            </div>
            <div class="dish">
                <div class="name">2. Bánh xèo miền Trung</div>
                <img src="images/banh-xeo-2.jpg" alt="" />
            </div>
            <div class="dish">
                <div class="name">3. Bánh xèo miền Nam</div>
                <img src="images/banh-xeo-3.jpg" alt="" />
            </div>
            <div class="dish">
                <div class="name">4. Bánh xèo Nhật Bản</div>
                <img src="images/banh-xeo-4.jpg" alt="" />
            </div>
            <div class="dish">
                <div class="name">5. Bánh xèo Hàn Quốc</div>
                <img src="images/banh-xeo-5.jpg" alt="" />
            </div>
            <div class="dish">
                <div class="name">6. Bánh xèo Mix</div>
                <img src="images/banh-xeo-6.jpg" alt="" />
            </div>
        `;

        fadeIn();
    }
});

homeBtn.addEventListener("click", () => {
    if (!content.classList.contains("home")) {
        if (content.classList.contains("menu")) {
            content.classList.replace("menu", "home");
            menuBtn.classList.remove("current-bar");
        } else if (content.classList.contains("about")) {
            content.classList.replace("about", "home");
            aboutBtn.classList.remove("current-bar");
        }

        homeBtn.classList.add("current-bar");

        menuBtn.disabled = false;
        homeBtn.disabled = true;
        aboutBtn.disabled = false;

        content.innerHTML = `
            <h4>Best pancake in Việt Nam</h4>
            <h4>Made with passion since 2000</h4>
            <img src="./images/github.svg" alt="github" class="avatar" />
            <h4>Order online or visit us</h4>
        `;

        fadeIn();
    }
});

aboutBtn.addEventListener("click", () => {
    if (!content.classList.contains("about")) {
        if (content.classList.contains("menu")) {
            content.classList.replace("menu", "about");
            menuBtn.classList.remove("current-bar");
        } else if (content.classList.contains("home")) {
            content.classList.replace("home", "about");
            homeBtn.classList.remove("current-bar");
        }

        aboutBtn.classList.add("current-bar");

        menuBtn.disabled = false;
        homeBtn.disabled = false;
        aboutBtn.disabled = true;

        content.innerHTML = `
            <h4>📞 123 456 789</h4>
            <h4>🏠 Việt Nam</h4>
            <div id="map"></div>
        `;

        fadeIn();
    }
});

aboutBtn.addEventListener("click", () => {
    initGoogleMaps(process.env.GOOGLE_MAPS_API_KEY, "map")
        .then((map) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLatLng = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        map.setCenter(userLatLng);
                        new google.maps.Marker({
                            position: userLatLng,
                            map: map,
                            title: "Your Location",
                        });
                    },
                    (error) => {
                        console.error("Error getting location:", error);
                        alert(
                            "Unable to retrieve your location. Please ensure location services are enabled."
                        );
                    }
                );
            } else {
                console.error("Geolocation is not supported by this browser.");
                alert("Geolocation is not supported by your browser.");
            }
        })
        .catch((error) => {
            console.error("Error initializing Google Maps:", error);
        });
});
