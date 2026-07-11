const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Data object holding each image's filename and alt text
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

// Base URL shared by all the images
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Loop through the images and build a thumbnail for each one
for (const image of images) {
  // Create a new image element
  const newImage = document.createElement("img");
  // Set its source and alt text
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  // Make it focusable via the keyboard
  newImage.tabIndex = "0";
  // Add it to the thumbnail bar
  thumbBar.appendChild(newImage);
  // Show the image full size when its thumbnail is clicked
  newImage.addEventListener("click", updateDisplayedImage);
}

// Updates the main displayed image to match the clicked thumbnail
function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// Wire up the Darken/Lighten button
btn.addEventListener("click", () => {
  // If the button currently has the "dark" class,
  // switch text to "Lighten" and darken the overlay
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // Otherwise, switch text to "Darken" and lighten the overlay
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  // Toggle the class for the next click
  btn.classList.toggle("dark");
});