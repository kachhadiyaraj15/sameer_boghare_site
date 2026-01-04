---
description: How to run the Advocate Sameer Boghara website locally
---

# Running the Website Locally

Follow these steps to view and test the multilingual static website.

## Method 1: File Protocol (Fastest)
1. Navigate to the project root: `f:\samir_fuwa\`
2. Double-click `index.html`.
3. The website will open in your default browser.

## Method 2: Local Server (Best for testing)
1. Open a terminal (PowerShell or CMD).
2. Run the following command:
   ```powershell
   npx serve .
   ```
3. Open the URL provided in the terminal (usually `http://localhost:3000`).

## Editing Content
- To change the text or document list, edit `js/app.js`.
- To change the design, edit `css/style.css`.
- The source content is also mirrored in the `content/` directory as Markdown files for your reference.
