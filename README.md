# NiceApp - React Frontend

This is a production-ready React application built to work with a Manifest-generated backend. It features a professional landing page, user authentication, and a protected dashboard.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm
- A running instance of the Manifest backend generated from the provided `manifest.yml`.

### Setup

1.  **Clone the repository** (or copy these files into a new project).

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create an environment file:**

    Create a `.env` file in the root of the project and add the following variables:

    ```
    VITE_API_URL=https://no-code-platform-backend-for-generated.onrender.com/api
    VITE_APP_ID=nice-app
    ```

    - `VITE_API_URL`: The base URL of your deployed Manifest backend API.
    - `VITE_APP_ID`: The app ID you received after deploying your backend. It must match the `name` in your `manifest.yml` (e.g., `nice-app`).

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application should now be running on `http://localhost:5173`.

## Features

- **Professional Landing Page:** A modern, responsive home page to attract users.
- **User Authentication:** Secure registration and login functionality.
- **Protected Routes:** A dashboard accessible only to authenticated users.
- **State Management:** Global auth state managed with React Context.
- **Modern Tooling:** Built with Vite for a fast development experience.
- **Styling:** Styled exclusively with Tailwind CSS for a consistent and professional UI.
