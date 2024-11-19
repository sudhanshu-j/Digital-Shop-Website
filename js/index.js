// Mobile Navigation Toggle
const navOpen = document.querySelector(".mobile-open-btn"); // Select the button to open the mobile navigation
const navClose = document.querySelector(".mobile-close-btn"); // Select the button to close the mobile navigation
const primaryNav = document.getElementById("primary-navigation"); // Select the navigation menu (likely a sidebar or dropdown)

navOpen.addEventListener("click", () => {
  // Add event listener to the open button for a click event
  const visibility = primaryNav.getAttribute("data-visible"); // Get the current visibility state of the navigation (whether it's visible or hidden)

  if (visibility === "false") {
    // If the navigation is currently hidden (visibility is false)
    primaryNav.setAttribute("data-visible", true); // Set the navigation visibility to true (show it)
    navClose.setAttribute("data-visible", true); // Set the close button visibility to true (show it)
  } else {
    // If the navigation is already visible (visibility is true)
    primaryNav.setAttribute("data-visible", false); // Set the navigation visibility to false (hide it)
    navClose.setAttribute("data-visible", false); // Set the close button visibility to false (hide it)
  }
});

navClose.addEventListener("click", () => {
  // Add event listener to the close button for a click event
  primaryNav.setAttribute("data-visible", false); // Hide the navigation by setting visibility to false
  navClose.setAttribute("data-visible", false); // Hide the close button by setting visibility to false
});

// Shopping Cart Toggle
const shoppingBag = document.getElementById("cart-box"); // Select the shopping bag element (container for cart)
const cartItem = document.getElementById("cart-icon"); // Select the cart item container (the cart icon itself)
const closeBtn = document.getElementById("close-btn"); // Select the button to close the cart view

shoppingBag.addEventListener("click", () => {
  // Add event listener to the shopping bag for a click event
  const showCart = cartItem.getAttribute("data-visible"); // Get the current visibility state of the cart

  if (showCart === "false") {
    // If the cart is currently hidden (visibility is false)
    cartItem.setAttribute("data-visible", true); // Show the cart by setting visibility to true
  } else {
    // If the cart is already visible (visibility is true)
    cartItem.setAttribute("data-visible", false); // Hide the cart by setting visibility to false
  }
});

closeBtn.addEventListener("click", () => {
  // Add event listener to the close button in the cart for a click event
  cartItem.setAttribute("data-visible", false); // Hide the cart by setting visibility to false
});

//=========== Adding Scroll Reveal Animation To Each Section Classes ===========//

// Initialize ScrollReveal with specified configuration options
const sr = ScrollReveal({
  origin: "top", // The direction from which the elements will appear (from the top of the screen)
  distance: "60px", // The distance the elements will move from their original position when revealed
  duration: 3000, // The duration of the reveal animation in milliseconds (3 seconds)
  delay: 400, // Delay before the animation starts for each element (400 milliseconds)
  reset: true, // If true, the elements will reappear when scrolled into view again
});

// Reveal multiple elements with the default configuration (using the ScrollReveal object `sr`)
sr.reveal(
  `.hero-section, .feature-image, .best-product, .shop-words, .shop-title, .c-words `
  // These are the CSS classes of the elements to be revealed as the user scrolls
);

// Reveal elements with specific configurations
sr.reveal(
  `.product-5, .product-6, .product-7, .product-8, .news img, .brand-3, .footer-menu, .contact, .shop-feature h2`,
  {
    delay: 600, // Delay before the animation starts for each element
    distance: "100px", // Distance the elements will move from their original position
    interval: 100, // Interval between the reveal of each element (applies if there are multiple elements in the selection)
  }
);

// Reveal elements in the "about" section from the right
sr.reveal(
  `.category-1, .category-2, .category-3, .service, .news .desc, .brand-4, .brand-5, .email, .p-top, .product-list-4, .product-list-5, .product-list-6, .sidebar, .about-info, .map`,
  {
    origin: "right", // These elements will appear from the right side of the screen
    delay: 600, // Delay before the animation starts for each element
  }
);

// Reveal other elements from the left (specific classes for this reveal)
sr.reveal(
  `.category-4, .category-5, .category-6, .n-ques, .brand-1, .brand-2, .footer-logo, .c-font, .product-list-1, .product-list-2, .product-list-3, .product-list-7, .product-list-8, .product-list-9, .about-section img , .support-section`,
  {
    origin: "left", // These elements will appear from the left side of the screen
    delay: 600, // Delay before the animation starts for each element
  }
);

// Reveal elements from the bottom (such as products and other page sections)
sr.reveal(
  `.hero-inner, .feature-one p, .feature-info, .product-1, .product-2, .product-3, .product-4, .n-date`,
  {
    origin: "bottom", // These elements will appear from the bottom of the screen
  }
);

// Reveal popular cards (specific form sections) with a specified interval between them
sr.reveal(`.email-sec, .num-sec, .mess-sec, .contact-btn button`, {
  interval: 200, // Interval between the reveal of each element (set to 200ms for this group)
});
