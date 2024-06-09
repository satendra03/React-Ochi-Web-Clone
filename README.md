Portfolio Project
=================

Welcome to my portfolio project! This website showcases my skills, projects, and contact information with a sleek, interactive design.

Live Demo
---------

Check out the live version of the portfolio [here](https://satendra-temp-portfolio.vercel.app/).

Features
--------

-   **Dynamic Animations:** Smooth and captivating animations powered by GSAP and Framer Motion enhance user interaction.
-   **Enhanced Scrolling:** Locomotive Scroll provides a unique and engaging scroll experience.
-   **Real-time Data Management:** Firebase integration for efficient and dynamic data storage and retrieval.

Technology Stack
----------------

-   **Vite:** Fast and modern build tool for an optimized development process.
-   **React:** Robust JavaScript library for building user interfaces.
-   **GSAP (GreenSock Animation Platform):** Advanced animation capabilities for a lively and interactive site.
-   **Framer Motion:** Easy and declarative animations within React.
-   **Locomotive Scroll:** Smooth and innovative scroll interactions.
-   **Firebase:** Real-time database management for fast and reliable data operations.

Installation
------------

1.  **Clone the Repository:**
    ```
    git clone https://github.com/satendra03/React-Ochi-Web-Clone.git
    cd React-Ochi-Web-Clone
    ```

3.  **Install Dependencies:**
    ```
    npm install
    ```

5.  **Start the Development Server:**
    ```
    npm run dev
    ```

Usage
-----

-   **Development:** Use `npm run dev` to start the development server. The website will be accessible at `http://localhost:5173`.
-   **Build:** Use `npm run build` to create an optimized production build of the website.
-   **Preview:** Use `npm run serve` to preview the production build locally.

Firebase Setup
--------------

1.  Create a Firebase project in the Firebase Console.

2.  Obtain your Firebase configuration and add it to your project.

3.  Initialize Firebase in your project by replacing the configuration in `src/components/Firebase/Firebase.jsx` with your own:
    ```
    import { initializeApp } from "firebase/app";
    import { getDatabase, set, ref } from "firebase/database";
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
      databaseURL: "YOUR_DATABASE_URL"
    };
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    export {db, set, ref};
    ```

Contributing
------------

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.

Contact
-------

Feel free to reach out for any questions, feedback, or collaboration opportunities:

-   **Owner:** Satendra Kumar Parteti
-   **Email:** satendrakumarparteti.work@gmail.com
-   **GitHub:** [github.com/satendra03](https://github.com/satendra03)
-   **Instagram:** [instagram.com/_satendra_03](https://instagram.com/_satendra_03)

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

* * * * *

Thank you for checking out my portfolio project! If you have any questions or feedback, don't hesitate to reach out.
