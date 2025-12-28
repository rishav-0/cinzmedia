// utils/scrollToSection.js
export const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    // If element not found, navigate to home and scroll to section
    window.location.href = `/?scrollTo=${id}`;
  }
};
