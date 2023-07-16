const timeline = gsap.timeline();

timeline
  .to(".nav-overlay", {
    width: 0,
  })
  .from(".img-overlay", {
    x: "100%",
    ease: "expo.inOut",
  })
  .from(".home-image", {
    x: "20%",
    opacity: 0,
  })
  .from(".animation", {
    x: -100,
    opacity: 0,
    stagger: 0.2,
  });

const menu = document.querySelector(".menu-bar");
const navlist = document.querySelector(".navlist");
const hideMenu = document.querySelector(".hide-menu");
menu.addEventListener("click", () => {
  navlist.style.top = 0;
  hideMenu.style.display = "block";
  menu.style.display = "none";
});
hideMenu.addEventListener("click", () => {
  navlist.style.top = "-120vh";
  hideMenu.style.display = "none";
  menu.style.display = "block";
});
