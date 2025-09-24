# FlavorFusion - React & Manifest Food App

This is a production-ready food recipe application built with React, Vite, Tailwind CSS, and a Manifest-powered backend.

## Features

- **User Authentication**: Secure user registration and login.
- **Recipe Management**: Users can create, view, update, and delete their own recipes.
- **Recipe Discovery**: Browse all recipes submitted by the community.
- **Image Uploads**: Add beautiful photos to recipes.
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- A Manifest backend deployed with the provided `manifest.yml` schema.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    Create a `.env` file in the root of the project and add your Manifest backend URL and App ID:

    ```
    VITE_API_URL=https://your-manifest-backend.onrender.com/api
    VITE_APP_ID=FlavorFusion
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

This will create a `dist` directory with the optimized static assets for your application.
