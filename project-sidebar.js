// Select all sidebar links
const sidebarLinks = document.querySelectorAll(".sidebar a");


// Function to highlight active section link
function highlightSection() {
  const sections = document.querySelectorAll("section");
  let activeSection = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      activeSection = section.id;
    }
  });

  sidebarLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === activeSection) {
      link.classList.add("active");
    }
  });
}

// Smooth scrolling for sidebar links
sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Listen for scroll events to update active section
window.addEventListener("scroll", highlightSection);



//extra stuff
document.addEventListener("DOMContentLoaded", () => {
    const expandables = document.querySelectorAll(".details-section .expandable");
  
    expandables.forEach((item) => {
      const summary = item.querySelector(".summary");
      const content = item.querySelector(".content");
  
      if (summary && content) {
        summary.addEventListener("click", (event) => {
          // Prevent event bubbling issues
          event.stopPropagation();
  
          // Close all other expandable items
          expandables.forEach((otherItem) => {
            if (otherItem !== item) {
              const otherContent = otherItem.querySelector(".content");
              if (otherContent) {
                otherContent.style.maxHeight = "0"; // Collapse smoothly
                otherItem.classList.remove("open");
              }
            }
          });
  
          // Toggle the clicked item
          item.classList.toggle("open");
  
          if (item.classList.contains("open")) {
            // Expand smoothly by setting maxHeight dynamically
            content.style.maxHeight = `${content.scrollHeight}px`;
          } else {
            // Collapse the item
            content.style.maxHeight = "0";
          }
        });
      }
    });
  });
  