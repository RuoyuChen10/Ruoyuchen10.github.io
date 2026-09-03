window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener("DOMContentLoaded", function () {
  var carouselElements = document.querySelectorAll(".carousel");
  if (carouselElements.length && window.bulmaCarousel) {
    window.bulmaCarousel.attach(".carousel", {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000
    });
  }

  if (document.querySelector(".slider") && window.bulmaSlider) {
    window.bulmaSlider.attach();
  }

  document.querySelectorAll(".prev, .next").forEach(function (control) {
    var isNext = control.classList.contains("next");
    control.setAttribute("role", "button");
    control.setAttribute("tabindex", "0");
    control.setAttribute("aria-label", isNext ? "Show next example" : "Show previous example");
    control.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        control.click();
      }
    });
  });

  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    link.setAttribute("rel", "noopener noreferrer");
  });

  var copyButton = document.querySelector("[data-copy-citation]");
  var citation = document.querySelector("#BibTeX pre code");
  if (copyButton && citation) {
    copyButton.addEventListener("click", async function () {
      var originalLabel = copyButton.textContent;
      try {
        await navigator.clipboard.writeText(citation.textContent.trim());
        copyButton.textContent = "Copied";
      } catch (error) {
        var range = document.createRange();
        range.selectNodeContents(citation);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
        copyButton.textContent = "Copied";
      }
      window.setTimeout(function () {
        copyButton.textContent = originalLabel;
      }, 1800);
    });
  }

  if ("IntersectionObserver" in window) {
    var navLinks = Array.from(document.querySelectorAll(".site-nav-links a"));
    var observedSections = navLinks
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-current", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0
    });

    observedSections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }
});
