# Vida e Caffè Website Project

## 📌 Overview
This project is a multi-page website developed for **Vida e Caffè**, a popular South African coffee shop franchise.

The website translates a design proposal into a fully functional HTML-based site that reflects the brand's vibrant identity, modern UI structure, and user engagement features including a cart system, product search, FAQ accordion, and contact/enquiry forms.

### 🌍 Live Website:
[https://vidaecaffee.netlify.app/]

---

## 📋 Part 1 Details
This submission covers the planning and design phase of the Vida e Caffè website project, including the business proposal, sitemap, wireframes, and initial HTML structure. Future iterations (Part 2) build upon this foundation to include full CSS styling, JavaScript interactivity, and SEO optimisation.

---

## 🎯 Objectives
- Create a structured, multi-page website for Vida e Caffè
- Improve mobile responsiveness and navigation usability
- Represent the brand's vibrant coffee culture digitally
- Implement engaging features (cart system, search, FAQ, forms)
- Lay the foundation for future e-commerce integration

---

## 👥 Target Audience
- Busy professionals and workers seeking quick, quality coffee
- Students looking for a comfortable café environment
- Coffee lovers interested in premium beverage options

---

## 🌐 Website Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Homepage with hero section, highlights, and call-to-action |
| About | `about.html` | Brand overview, mission, vision, and team |
| Products | `products.html` | Coffee, cold drinks, and food menu with cart |
| Enquiry | `enquiry.html` | Customer order and feedback form |
| Contact | `contact.html` | Branch locations, contact details, and message form |

---

## ✨ Features
- Multi-page responsive navigation
- Semantic HTML5 structure
- Shopping cart system (JavaScript)
- Product search and category filtering
- FAQ accordion (click to expand/collapse)
- Contact and enquiry form validation
- Image lightbox for product viewing
- Google Maps iframe embed for branch locations
- Scroll-reveal animations
- CSS animations (steam effect, gradient movement, card hover effects)
- robots.txt and sitemap.xml for SEO

---

## 🎨 Design Approach
- Warm, coffee-inspired aesthetic (browns, creams, gold)
- Clean, structured layout with clear visual hierarchy
- Mobile-first responsive design
- Grid-based product and card layouts
- CSS custom properties (variables) for consistent theming

### Colour Palette
| Colour | Hex | Usage |
|--------|-----|-------|
| Dark Brown | `#4B2E0B` | Header, footer, dark backgrounds |
| Mid Brown | `#7B4F2B` | Navigation, cards |
| Light Brown | `#C9A66B` | Accents, borders |
| Cream | `#F5F1E3` | Page background |
| Gold | `#D4AF37` | Dividers, highlights, underlines |
| Gold Light | `#F0E68C` | Heading accents |

### Typography
- **Display font:** Playfair Display (headings and titles)
- **Body font:** Lato (body text and navigation)

---

## ⚙️ Technologies Used
- **HTML5** – semantic page structure
- **CSS3** – styling, animations, responsive layout (Flexbox & Grid)
- **JavaScript (Vanilla)** – cart system, form validation, FAQ accordion, lightbox, scroll animations
- **Google Maps Embed** – branch location display
- **Netlify** – deployment and hosting

---

## 📁 Project File Structure

vidaecaffe/

├── index.html

├── about.html

├── products.html

├── enquiry.html

├── contact.html

├── robots.txt

├── sitemap.xml

├── css/

│   └── style.css

├── js/

│   └── script.js

└── images/

├── vida e Caffe logo.png

├── Espresso.jpeg

├── latte.png

├── Cappuccino.png

├── lamonade.png

├── smoothies.png

├── muffin.png

└── sandwhich.png


---

## 🚀 Future Improvements
- Connect cart to a real backend or payment gateway
- Add user login and order history
- Implement a loyalty rewards system
- Improve image optimisation with WebP format
- Add Open Graph meta tags for social media sharing
- Expand branch locator with live directions

---

## SITEMAP

[Vida e cafee website sitemap](Documents/Sitemap.docx)

## 📋 Changelog

### Part 1 Details
- Business proposal drafted including organisation overview, goals, design approach, and budget
- Sitemap created outlining all five website pages
- Low-fidelity wireframes designed for the homepage layout
- Technical requirements defined including hosting, domain, and security
- Timeline and milestones planned across four project phases

### ✅ Completed (Part 1 - Planning & Design)
#### Added
- [2026-04-20 @ 09:00 SAST] Initial commit — created base project files
- [2026-04-20 @ 09:15 SAST] Added sitemap and project proposals
- [2026-04-20 @ 09:30 SAST] Initialised README with project details
- [2026-04-20 @ 10:00 SAST] Added CSS styling and updated index.html
- [2026-04-20 @ 10:20 SAST] Fixed grid columns layout issue
- [2026-04-20 @ 10:45 SAST] Added HTML project files — initial structure for all five pages

---

### Part 2 Details
- **HTML Structure:** Built five fully semantic HTML pages with consistent header, navigation, main content, and footer sections.
- **CSS Styling:** Implemented a full CSS architecture using custom properties (variables) for colours, shadows, fonts, and transitions. Used Flexbox and CSS Grid for layout.
- **Responsive Design:** Added media query breakpoints at 900px (tablet) and 600px (mobile) to ensure the site adapts correctly across all screen sizes.
- **JavaScript Features:** Implemented cart system, product search, FAQ accordion, form validation with error/success messages, image lightbox, scroll-reveal animations, and hero animation.

### ✅ Completed (Part 2 - Development)
#### Added
- [2026-05-29 @ 12:13 SAST] Cart system using JavaScript arrays to track items and calculate totals — `addToCart()`, `updateCartDisplay()`, `saveCart()`, and `loadCart()` functions
- [2026-05-29 @ 12:13 SAST] Product search (`searchProducts()`) with real-time input filtering
- [2026-05-29 @ 12:13 SAST] Product category filter (`filterProducts()`) for Coffee, Cold Drinks, and Food
- [2026-05-29 @ 12:13 SAST] FAQ accordion with click-to-toggle answer visibility
- [2026-05-29 @ 12:14 SAST] Contact form validation with name, email (Regex), and message checks
- [2026-05-29 @ 12:14 SAST] Enquiry form validation checking all required input fields
- [2026-05-29 @ 12:14 SAST] `fakeAjaxSubmit()` simulating asynchronous form submission with delay feedback
- [2026-05-29 @ 12:14 SAST] `showMessage()` for dynamic success and error popup messages
- [2026-05-29 @ 12:14 SAST] Image lightbox overlay on product card click
- [2026-05-29 @ 12:14 SAST] `animateHero()` for subtle logo rotation animation
- [2026-05-29 @ 12:14 SAST] `revealOnScroll()` for scroll-triggered card animations
- [2026-05-29 @ 12:14 SAST] Google Maps iframes embedded in contact.html for Cape Town, Johannesburg, and Durban branches
- [2026-05-29 @ 12:14 SAST] CSS animations: `floatBeans`, `gradientMove`, `steamRise`, `cupRotate`

#### Fixed
- [2026-05-29 @ 12:14 SAST] Corrected `updateCartDisplay()` template literal syntax (`R$ {Total}` → `R${Total}`)
- [2026-05-29 @ 12:14 SAST] Resolved `saveCart()` and `loadCart()` function scoping issue (nested inside `updateCartDisplay`)
- [2026-05-29 @ 12:14 SAST] Fixed missing semicolons in CSS `linear-gradient()` declarations in `.card` and `.highlights-section`
- [2026-05-29 @ 12:14 SAST] Corrected `transition` property in `.faq-item` (invalid value replaced with valid `translateY`)
- [2026-05-29 @ 12:14 SAST] Removed stray backtick in `contact.html` FAQ section opening tag
- [2026-05-29 @ 12:14 SAST] Fixed mismatched `</form>` placement in `enquiry.html`
- [2026-05-29 @ 12:14 SAST] Corrected `<P>` uppercase tag in `about.html` and `index.html`
- [2026-05-29 @ 12:14 SAST] Fixed `CLASS` uppercase attribute on `<nav>` in `index.html`
- [2026-05-29 @ 12:14 SAST] Addressed missing `alt` attribute on sandwich product image in `products.html`

---

### Part 3 Details
- **SEO Optimisation:** Added unique `<meta>` description, keywords, and author tags across all five pages.
- **Deployment:** Deployed the full project to Netlify at vidaecaffee.netlify.app.
- **robots.txt and sitemap.xml:** Created and configured for search engine crawling.
- **Final Testing:** Tested across browsers and devices for responsiveness and functionality.
- **Final Refinements:** Updated website files with final content, styling, and navigation adjustments.

### ✅ Completed (Part 3 - Testing, SEO & Deployment)
#### Added
- [2026-06-19 @ 12:13 SAST] `robots.txt` allowing all crawlers with sitemap reference
- [2026-06-19 @ 12:13 SAST] `sitemap.xml` listing all five pages for search engine indexing
- [2026-06-19 @ 12:13 SAST] Unique `<meta>` description, keywords, and author tags added to all pages
- [2026-06-19 @ 12:13 SAST] Update website files — refined styling and layout across all pages
- [2026-06-19 @ 12:13 SAST] Updated website pages — final content and navigation adjustments
- [2026-06-19 @ 12:14 SAST] Deployed project to Netlify — live at vidaecaffee.netlify.app

#### Fixed
- [2026-06-19 @ 12:13 SAST] Resolved layout inconsistencies identified during cross-browser testing
- [2026-06-19 @ 12:13 SAST] Fixed mobile layout issues on screens below 400px
- [2026-06-19 @ 12:14 SAST] Corrected broken image paths identified during final review
- [2026-06-19 @ 12:14 SAST] Resolved CSS animation conflicts on mobile devices

#### Security & Optimisation
- [2026-06-19 @ 12:13 SAST] Added `loading="lazy"` to non-hero images to improve page load speed
- [2026-06-19 @ 12:13 SAST] Verified SSL/HTTPS active on Netlify deployment
- [2026-06-19 @ 12:14 SAST] Confirmed 99.9% uptime SLA through Netlify managed hosting---

## 📚 References

Duckett, J., 2011. *HTML and CSS: Design and Build Websites*. Indianapolis: Wiley.

Mozilla Developer Network, 2025. *HTML, CSS and JavaScript Guide*. Available at: https://developer.mozilla.org [Accessed: 20 April 2026].

W3Schools, 2025. *Web Development Tutorials*. Available at: https://www.w3schools.com [Accessed: 20 April 2026].

Unsplash, 2025. *Free stock images*. Available at: https://unsplash.com [Accessed: 20 April 2026].

Pexels, 2025. *Free stock photos*. Available at: https://www.pexels.com [Accessed: 20 April 2026].

Pixabay, 2025. *Free images and royalty-free stock*. Available at: https://pixabay.com [Accessed: 20 April 2026].

Vida e Caffè, 2026. *Official Website*. Available at: https://www.vidaecaffe.com [Accessed: 20 April 2026].

Register Domain SA, 2025. *Understanding the costs of domain registration and hosting in South Africa*. Available at: https://www.registerdomain.co.za/blog/domain-hosting-costs-south-africa/ [Accessed: 19 June 2026].

ChatGPT, 2026. *ChatGPT (April version)*. Available at: https://chat.openai.com [Accessed: 20 April 2026].

QuillBot, 2026. *QuillBot Paraphrasing Tool*. Available at: https://quillbot.com [Accessed: 20 April 2026].

---

## 👤 Author
**Saaheerah Majiet**
ST10516777
Web Development (WEBE5020)
Group: 1

---

##