# EXE Bit

Welcome to **EXE Bit**, your platform to discover, share, and showcase inspiring ideas. Whether you're looking for creativity, collaboration, or exploration, EXE Bit empowers users to bring their concepts to life.

---

## Features

- **Responsive Design:** A sleek and adaptable layout that works seamlessly across devices.
- **Image Upload and Display:** Users can upload images with titles and view them in a responsive gallery.
- **Hover Effects:** View image titles and contributor names on hover.
- **Full-Screen Image View:** Click on any image to see it in full-screen mode.
- **Skip Landing Page:** Save your preference to jump directly to the homepage.

---

## Tech Stack

- **Frontend:**
  - HTML5, CSS3, JavaScript (Vanilla JS)
  - Responsive Flexbox and Grid for layout

- **Backend:**
  - Google Apps Script for handling data submissions and fetching entries

- **Storage:**
  - Google Sheets for storing user-uploaded data (titles, images, etc.)

---

## How It Works

1. **Image Upload:**
   - Users fill out a form with their name, email, image title, and image file.
   - Image data is encoded in Base64 and sent to Google Sheets using Google Apps Script.

2. **Data Fetching:**
   - The website fetches data (name, title, image) from Google Sheets and displays it in a responsive gallery.

3. **Responsive Gallery:**
   - Images are displayed in a 3:4 landscape aspect ratio.
   - Hover effects reveal additional details, and clicking on an image opens it in full-screen mode.

---

## Setup Instructions

### Prerequisites

- A Google account with access to Google Sheets
- Basic knowledge of HTML, CSS, and JavaScript

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/exe-bit.git
   ```
2. Set up the Google Apps Script:
   - Create a new Google Apps Script project.
   - Copy and paste the `doPost` and `doGet` script provided in this repository.
   - Deploy the script as a web app and note the URL.

3. Configure the Frontend:
   - Update the fetch URLs in `upload.js` and `home.js` with your Google Apps Script URL.

4. Open the project in your browser:
   - Serve the `index.html` file locally or deploy it to a web hosting platform.

---

## Developer Contact

For inquiries, feedback, or support, feel free to reach out:

- **Email:** dev.support@exebit.com
- **Phone:** +91-9876543210
- **GitHub:** [github.com/exebit-dev](https://github.com/exebit-dev)
- **LinkedIn:** [linkedin.com/in/exebit-dev](https://linkedin.com/in/exebit-dev)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **Google Apps Script** for backend integration
- **Open Source Libraries** for inspiration

Thank you for using EXE Bit! Let your creativity shine.
