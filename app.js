const footerShareButton = document.querySelector(".footer-share-button");
const socialShareButton = document.querySelector(".social-share-button");
const shareMenu = document.querySelector(".share-menu");
const articleFooter = document.querySelector(".article-footer");

footerShareButton.addEventListener("click", () => {
    if (window.innerWidth < 800) {
        shareMenu.style.display = "flex";
        articleFooter.style.display = "none";
    } else {
        shareMenu.classList.toggle("social-menu-desktop");
        socialShareButton.style.display = "none";
    }
    footerShareButton.classList.toggle("button-active");
})

socialShareButton.addEventListener("click", () => {
    if (window.innerWidth < 800) {
        shareMenu.style.display = "none";
        articleFooter.style.display = "flex";
    }
})