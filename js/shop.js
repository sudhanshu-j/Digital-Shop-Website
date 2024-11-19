// Sidebar Navigation

const sideNav = document.getElementById("side-nav"); // Selects the sidebar navigation element by its ID ("side-nav")
const navigation = document.getElementById("arrow"); // Selects the "arrow" button that controls the sidebar toggle

// Add an event listener to the navigation (arrow) button
navigation.addEventListener("click", () => {
  const showCategory = sideNav.getAttribute("data-category"); // Get the current visibility state of the sidebar (from the data-category attribute)

  // If the sidebar is currently hidden (data-category is "false")
  if (showCategory === "false") {
    sideNav.setAttribute("data-category", true); // Set the data-category attribute of the sidebar to "true" (show the sidebar)
    navigation.setAttribute("data-category", true); // Set the data-category attribute of the arrow to "true" (change the state of the arrow, likely to show the opposite direction)
  } else {
    // If the sidebar is currently visible (data-category is "true")
    sideNav.setAttribute("data-category", false); // Set the data-category attribute of the sidebar to "false" (hide the sidebar)
    navigation.setAttribute("data-category", false); // Set the data-category attribute of the arrow to "false" (change the state of the arrow to indicate the sidebar is collapsed)
  }
});
