const CurrentYear = new Date().getFullYear();
const year = document.querySelector(".Year");
year.textContent = CurrentYear;

const NavBtnEl = document.querySelector(".btn--mobile--nav");
const HeaderEl = document.querySelector(".Header");

NavBtnEl.addEventListener("click", () => {
  HeaderEl.classList.toggle("nav--open");
});

const allLink = document.querySelectorAll("a:link");

allLink.forEach((link) => {
  link.addEventListener("click", (E) => {
    E.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main--nav--link")) {
      HeaderEl.classList.remove("nav--open");
    }
  });
});

const sectionHeroEl = document.querySelector(".section--hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

