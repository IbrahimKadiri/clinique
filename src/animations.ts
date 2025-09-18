import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Helper pour adapter le déclenchement selon la taille d'écran
 */
function responsiveStart(defaultStart: string, mobileStart = "top 95%") {
  return window.innerWidth < 768 ? mobileStart : defaultStart;
}

/**
 * Animation générique pour une section (texte + images)
 */
export function animateSection(element: HTMLElement) {
  const items = element.querySelectorAll("h1, h2, h3, p, span, a, img");

  gsap.from(items, {
    opacity: 0,
    y: 40,
    stagger: 0.5,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: responsiveStart("top 80%"),
      toggleActions: "play none none none",
    },
  });
}

/**
 * Animation spécifique pour le Hero
 */
export function animateHero(element: HTMLElement) {
  const text = element.querySelectorAll("h1, p, span, a");

  gsap.from(text, {
    opacity: 0,
    y: 50,
    stagger: 0.6,
    duration: 1.5,
    ease: "power4.out",
  });
}

/**
 * Animation pour des cartes (ex: services, team, portfolio)
 */
export function animateCards(element: HTMLElement) {
  const cards = element.querySelectorAll(".card, .service, .team-member");

  gsap.from(cards, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: responsiveStart("top 80%"),
      toggleActions: "play none none none",
    },
  });
}

/**
 * Animation About
 */
export function animateAbout(section: HTMLElement) {
  const header = section.querySelectorAll("span, h2, p");
  const image = section.querySelector("img");

  gsap.from(header, {
    scrollTrigger: {
      trigger: section,
      start: responsiveStart("top 85%"),
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.5,
    ease: "power4.out",
  });

  if (image) {
    gsap.from(image, {
      scrollTrigger: {
        trigger: section,
        start: responsiveStart("top 75%"),
      },
      x: 60,
      opacity: 0,
      scale: 1.05,
      duration: 4,
      ease: "expo.out",
      delay: 1,
    });
  }
}

/**
 * Animation Services
 */
export function animateServices(section: HTMLElement) {
  if (!section) return;

  // En-tête
  const headerElements = section.querySelectorAll("span, h2, p");
  gsap.from(headerElements, {
    scrollTrigger: {
      trigger: section,
      start: responsiveStart("top 80%"),
    },
    opacity: 0,
    y: 40,
    duration: 1.5,
    stagger: 0.8,
    ease: "power2.out",
  });

  // Cards
  const cards = section.querySelectorAll(".grid > div");
  gsap.from(cards, {
    scrollTrigger: {
      trigger: section,
      start: responsiveStart("top 75%"),
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 1.2,
    stagger: 0.7,
    ease: "back.out(1.2)",
  });

  // Icônes
  const icons = section.querySelectorAll(".w-16.h-16");
  gsap.from(icons, {
    scrollTrigger: {
      trigger: section,
      start: responsiveStart("top 75%"),
    },
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.5)",
  });

  // Effet hover zoom
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.3 });
    });
  });
}

/**
 * Animation Contact
 */
export function animateContact(section: HTMLElement) {
  if (!section) return;

  // Texte
  const textElements = section.querySelectorAll("span, h2, p");
  gsap.from(textElements, {
    scrollTrigger: {
      trigger: section,
      start: responsiveStart("top 80%"),
    },
    opacity: 0,
    y: 40,
    duration: 1.5,
    stagger: 0.5,
    ease: "power2.out",
  });

  // Formulaire
  const form = section.querySelector("form");
  if (form) {
    gsap.from(form, {
      scrollTrigger: {
        trigger: form,
        start: responsiveStart("top 85%"),
      },
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
    });
  }

  // Map et horaires
  const mapAndHours = section.querySelectorAll(".space-y-6 > div");
  gsap.from(mapAndHours, {
    scrollTrigger: {
      trigger: section,
      start: responsiveStart("top 85%"),
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.5,
    ease: "power2.out",
  });
}

/**
 * Animation Team
 */
export function animateTeam() {
  gsap.from("#team span, #team h2, #team p", {
    scrollTrigger: {
      trigger: "#team",
      start: responsiveStart("top 80%"),
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.5,
  });

  const cards = document.querySelectorAll("#team .grid > div");

  gsap.from(cards, {
    scrollTrigger: {
      trigger: "#team .grid",
      start: responsiveStart("top 85%"),
    },
    opacity: 0,
    y: 60,
    scale: 0.95,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.5,
  });

  // Effet hover zoom
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power1.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });
}
