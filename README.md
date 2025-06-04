##  Summary:

    This is a mini-project I completed for a certain exhibition. It is a simple static page which support i18n, has some text and painting cells in zig-zag pattern which supports lightbox when clicked for seeing the painting in full length. If the user is especially interested in the paintings, there is a separate page to see the paintings altogether.

---

##  Technologies Used

- **React.js** – UI rendering  
- **Vite** – Fast bundler & development server  
- **Tailwind CSS** – Utility-first styling  
- **react-i18next** – Localization support  
- **Framer Motion** – Smooth animations  
- **Intersection Observer** – Lazy animation triggers  

---

## How to install:
```bash
    git clone https://github.com/yourusername/exhibition-site.git
    cd exhibition-site
    npm install
    npm run dev
```

---
```
Structure:
    src/
    │
    ├── components/         # Reusable components like Navbar, Banner, etc.
    ├── i18n/               # Localization setup and JSON files
    ├── public/material/    # Static data like paintings, essays, etc.
    ├── App.jsx             # Main entry point
    ├── main.jsx            # Renders the React app
    └── index.html          # HTML template
```
---

Deployment:
```bash
    npm run build
```