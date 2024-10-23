// Select all the buttons that control the FAQ items
const faqButtons = document.querySelectorAll('button[aria-controls^="faq-"]');

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the associated answer (dd element)
    const answerId = button.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);

    // Get the parent div for border manipulation and icon background span
    const faqItem = button.closest("#faq-item");
    const iconBg = button.querySelector("#icon-bg");

    // Get the SVG icons (plus and minus) for color change
    const icons = button.querySelectorAll('[data-slot="icon"]');

    // Toggle aria-expanded state
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);

    // Toggle the answer visibility
    answer.style.display = isExpanded ? "none" : "block";

    // Toggle the icons (plus and minus)
    icons[0].classList.toggle("hidden");
    icons[1].classList.toggle("hidden");

    // Toggle border and icon background on expansion
    if (!isExpanded) {
      faqItem.classList.add("border-lavenderGray");
      iconBg.classList.remove("bg-pearlGray");
      iconBg.classList.add("bg-skyBlue");

      // Change icon color to white
      icons.forEach((icon) => icon.classList.add("text-white"));
    } else {
      faqItem.classList.remove("border-skyBlue");
      iconBg.classList.remove("bg-skyBlue");
      iconBg.classList.add("bg-pearlGray");

      // Revert icon color to default (remove white)
      icons.forEach((icon) => icon.classList.remove("text-white"));
    }
  });
});

/// END OF FAQ SCRIPT
/// START OF TABS SCRIPT

// Get all tab buttons and contents
const tabButtons = document.querySelectorAll("#tab-navigation button");
const tabContents = document.querySelectorAll(".tab-content");

// Function to handle tab switching
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    // Remove active classes from all tabs and contents
    tabButtons.forEach((btn) => {
      // Reset styles for all buttons
      btn.classList.remove("text-white", "bg-skyBlue", "active-tab");
      btn.classList.add("text-mutedPurple", "bg-pearlGray"); // Set non-active styles
    });

    // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.add("hidden");
    });

    // Add active classes to clicked tab
    button.classList.remove("text-mutedPurple", "bg-pearlGray"); // Remove non-active styles
    button.classList.add("text-white", "bg-skyBlue", "active-tab"); // Set active styles
    document.getElementById(targetTab).classList.remove("hidden"); // Show the corresponding content
  });
});

/// END OF TABS SCRIPT
/// START OF SLIDER SCRIPT



/// END OF SLIDER SCRIPT