window.PB_PAGE = {
  title: "Hospedagem de bots Discord",
  description:
    "Hospedagem de bots para Discord desenvolvidos em Python e JavaScript.",
  keywords: "Discord, bots, Python, JavaScript",
};

/**
 * Atualiza o item ativo da navegação conforme a seção visível.
 * @return {void}
 */
function initSectionNavigation() {
  const links = Array.from(document.querySelectorAll("[data-section-link]"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter((section) => section instanceof HTMLElement);

  if (!links.length || !sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (first, second) =>
            first.boundingClientRect.top - second.boundingClientRect.top,
        )[0]?.target;

      if (!visibleSection) return;

      links.forEach((link) => {
        if (link.getAttribute("href") === `#${visibleSection.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-15% 0px -65% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSectionNavigation, {
    once: true,
  });
} else {
  initSectionNavigation();
}