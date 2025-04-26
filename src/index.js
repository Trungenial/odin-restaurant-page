import "./styles.css";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");
const content = document.querySelector("#content");

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
    }
});

aboutBtn.addEventListener("click", () => {});
