// Hamburger Menu Toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active"); // Toggle 'active' class for the hamburger menu
});


document.addEventListener("DOMContentLoaded", async () => {
  const imageGrid = document.getElementById("imageGrid");

  try {
    // Fetch data from the Apps Script API
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyjxGjH6HaW1RnR2J2h1zL7CmPIjeKcWxOqp_T1CwoO300IyMAyttcNkzy3tS1oqeKH/exec"
    );
    const data = await response.json();
    imageGrid.innerHTML = "";
    if (data && data.entries) {
      data.entries.forEach((entry) => {
        // Create the image card
        const imageBox = document.createElement("div");
        imageBox.className = "image-box";

        const img = document.createElement("img");
        img.src = entry.imageBase64; // Display the image
        img.alt = entry.imageTitle;

        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const title = document.createElement("h3");
        title.textContent = entry.imageTitle;

        const name = document.createElement("p");
        name.textContent = entry.name;

        overlay.appendChild(title);
        overlay.appendChild(name);

        imageBox.appendChild(img);
        imageBox.appendChild(overlay);

        // Add click event for fullscreen view
        imageBox.addEventListener("click", () => {
          const fullScreenImg = document.createElement("img");
          fullScreenImg.src = img.src;
          fullScreenImg.style.width = "100vw";
          fullScreenImg.style.height = "100vh";
          fullScreenImg.style.objectFit = "contain";
          fullScreenImg.style.position = "fixed";
          fullScreenImg.style.top = "0";
          fullScreenImg.style.left = "0";
          fullScreenImg.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
          fullScreenImg.style.zIndex = "9999";

          document.body.appendChild(fullScreenImg);

          fullScreenImg.addEventListener("click", () => {
            fullScreenImg.remove(); // Remove fullscreen on click
          });
        });
        
        imageGrid.appendChild(imageBox);
      });
    }
  } catch (error) {
    console.error("Error fetching or displaying images:", error);
    alert(("Error fetching or displaying images > "+error));
  }
});
