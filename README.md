# Digital Shop Website

This repository contains the source code for a **Digital Shop Website** inspired by the [Phlox Pro Digital Shop Template](https://demo.phlox.pro/shop-digital/). The website features a modern, fully responsive design with various pages such as **Shop**, **About Us**, **Blog**, and **Contact Us**. The website includes interactive features like smooth scroll animations and a custom cart functionality built with JavaScript.

---

### Features

- **Responsive Layout**: The website is optimized for all screen sizes, from mobile devices to large desktop monitors.

- **Shop Page**: A grid of digital products with interactive hover effects and product details.

- **Cart Functionality**: A custom cart system where users can add and remove products with JavaScript, allowing for dynamic interaction.

- **About Us Page**: A dedicated section to display information about the business or website, including images and text.

- **Blog Page**: A blog section with posts displayed in a grid layout.

- **Contact Us Page**: A contact form for users to reach out, along with Google Maps integration to show the business location.

- **Smooth Scrolling Animations**: Achieved using [ScrollReveal.js](https://scrollrevealjs.org/), which animates elements as the user scrolls down the page.

---

### Table of Contents

- [Technologies Used](#technologies-used)

- [Installation](#installation)

- [Usage](#usage)

- [Folder Structure](#folder-structure)

- [Features Breakdown](#features-breakdown)

- [Contributing](#contributing)

- [Acknowledgements](#acknowledgements)

---

### Technologies Used

- **HTML**: Provides the structure and content of the website.

- **CSS**: Used for styling, including layout, animations, and responsive design.

- **JavaScript**: Adds interactivity, including cart functionality and handling user interactions with the page.

- **ScrollReveal.js**: A JavaScript library used to add smooth scroll-based animations to the website.

- **Google Maps API**: For embedding an interactive map in the Contact Us page.

- **Phlox Pro Template**: A premium WordPress template that served as the foundation for the design of the website.

---

### Installation

To run this project locally on your machine, follow the steps below:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/digital-shop-website.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd digital-shop-website
    ```

3. **Open the `index.html` file** in your browser:

    You can simply double-click on the `index.html` file to open the website in your browser. Alternatively, open the project in a code editor (e.g., Visual Studio Code) and use a live server extension to view the website.

---

### Usage

This website functions as a digital shop template and includes several key features that can be customized.

#### Pages:

- **Shop Page**: Displays a grid of digital products with hover effects and product details. Users can interact with the shop through JavaScript.
  
- **About Us Page**: A section where you can provide details about the company or website, including images and a brief description.

- **Blog Page**: Displays a list of blog posts in a grid layout. You can update the blog posts as needed.
  
- **Contact Us Page**: Includes a contact form for users to submit inquiries. The form is styled with custom CSS, and the page includes Google Maps integration to show the business location.

---

### Folder Structure

The project is organized as follows:
```bash
digital-shop-website/ 
│
├── index.html           # Main page that contains main contents of the page
├── about.html           # About Us page 
├── blog.html            # Blog page 
├── contact.html         # Contact Us page with form and Google Maps
├── shop.html            # Shop page
│
└── css/                 # Contains all css stylesheets
│
├── index.css            # Main stylesheet
├── shop.css             # Shop Styles
├── about.css            # About Styles
├── blog.css             # Blog Styles
├── contactus.css        # Contact Styles
│
└── js/                  # Conatins all the javascript file
│
├── index.js             # Contains the main page functionality
├── shop.js              # Contains the shop page functionality 
└── images/              # Directory for images (product images, logo, etc.)
```

- `index.html` serves as the homepage and contains references to the other pages (Shop, About Us, Blog, Contact Us).

- `index.css` defines the layout, design, and responsiveness of the main page.

- `shop.css`  defines the layout, design, and responsiveness of the shop page.

- `about.css` defines the layout, design, and responsiveness of the about page.

- `contactus.css` defines the layout, design, and responsiveness of the contact us page.

- `scrollreveal.min.js` is the ScrollReveal.js library used for smooth scrolling animations.

- `images/` contains all the image assets used across the website.

---

### Features Breakdown

#### Shop Page:

- Grid layout for product display.

- Hover effects on product items (images and buttons).

- Product images are clickable and open detailed views.

- Add to Cart functionality via JavaScript.

#### About Us Page:

- Display company or website details in a two-column layout with images.

- Text content about the business.

#### Blog Page:

- Blog posts are displayed in a grid format.

- Each blog post includes a title, summary, and a link to read more.

#### Contact Us Page:

- A contact form that collects user inquiries.

- Google Maps iframe showing the business location.

- Form styling with custom CSS and interactive form elements.
  
---

### Contributing

We welcome contributions to this project! If you'd like to contribute, please follow these steps:

1. **Fork the repository** to your GitHub account.

2. **Clone your fork**:

    ```bash
    git clone https://github.com/your-username/digital-shop-website.git
    ```

3. **Create a new branch**:

    ```bash
    git checkout -b new-feature
    ```

4. **Make changes** and **commit** them:

    ```bash
    git add .
    git commit -m "Add new feature or bug fix"
    ```

5. **Push to your fork**:

    ```bash
    git push origin new-feature
    ```

6. **Create a pull request** from your fork to the main repository.
---

### Acknowledgements

- [Phlox Pro Template](https://demo.phlox.pro/shop-digital/) - The template used as the foundation for the design and layout of the website.

- [ScrollReveal.js](https://scrollrevealjs.org/) - For smooth scroll animations on various sections of the website.

- [Google Maps API](https://developers.google.com/maps) - For integrating Google Maps in the contact section.

- [Font Awesome](https://fontawesome.com/) - For the icons used throughout the website.

- [W3Schools](https://www.w3schools.com/) - For providing a great platform to learn web development.

---

### Demo

You can view a live demo of the website [here](https://digitalshopwebsite.netlify.app/). Alternatively, you can download the files and run them locally following the instructions above.
