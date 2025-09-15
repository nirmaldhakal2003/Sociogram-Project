# Software Hub – Social Networking Frontend

A modern **social networking app** built entirely with **React + Vite** and styled with **TailwindCSS**.  
It uses **free social media API endpoints** to simulate a real social media experience.

---

## Features

**User Authentication**

- Register new users
- Login with validation
- Change password
- Delete account

  **Post Management**

- View all posts
- Like / Unlike posts
- Comment on posts
- Delete posts

  **User Profile**

- View profile
- Update profile details
- View other users' profiles
- Remove user profile

  **Bookmarks**

- Bookmark and unbookmark posts
- View bookmarked posts in a separate page

  **Settings**

- Manage account settings
- Change password
- Delete account

  **Error Handling**

- Custom 404 page

---

## Tech Stack

| Category            | Technology                 |
| ------------------- | -------------------------- |
| **Frontend**        | React (JSX) + Vite         |
| **Styling**         | TailwindCSS                |
| **Routing**         | React Router DOM           |
| **State Mgmt**      | Zustand                    |
| **Data Fetching**   | TanStack React Query       |
| **Forms**           | React Hook Form + Formik   |
| **Validation**      | Zod + Zod Formik Adapter   |
| **Icons**           | React Icons + Lucide React |
| **Deployment**      | Vercel                     |
| **Version Control** | Git + GitHub               |

---

## 📂 Project Structure
```
SOFTWARE HUB/
├── 📁 node_modules/          # Dependencies
├── 📁 public/                # Static assets
├── 📁 src/                   # Source code
│   ├── 📁 API/               # API requests
│   │   └── ApiData.jsx       # API data handling
│   ├── 📁 assets/            # Images, fonts, etc.
│   ├── 📁 components/        # Reusable React components
│   │   ├── Button.jsx        # Button component
│   │   ├── Footer.jsx        # Footer component
│   │   └── Navbar.jsx        # Navbar component
│   ├── ProfileCard.jsx       # User profile card component
│   ├── 📁 pages/             # Page components
│   │   ├── Bookmark.jsx      # Bookmarked posts page
│   │   ├── Home.jsx          # Home/feed page
│   │   ├── LogIn.jsx         # Login page
│   │   ├── NotFound.jsx      # 404 error page
│   │   ├── Post.jsx          # Individual post page
│   │   ├── Profile.jsx       # User profile page
│   │   ├── Register.jsx      # Registration page
│   │   ├── Settings.jsx      # User settings page
│   │   └── ViewProfile.jsx   # View another user's profile
│   ├── 📁 validation/        # Form validation schemas
│   │   ├── loginSchema.js    # Login validation
│   │   └── registerSchema.js # Registration validation
│   ├── App.css               # Global application styles
│   ├── App.jsx               # Main application component
│   ├── index.css             # Base CSS styles
│   └── main.jsx              # Application entry point
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── package-lock.json         # Dependency lock file
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
└── vite.config.js            # Vite configuration

```



##  Package.json (Key Dependencies)
```

json
"dependencies": {
  "@tanstack/react-query": "^5.87.1",
  "formik": "^2.4.6",
  "lucide-react": "^0.542.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.8.2",
  "tailwindcss": "^4.1.13",
  "zod": "^4.1.5",
  "zustand": "^5.0.8"
}
````

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/software-hub.git
cd software-hub
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

---

## Deployment

- **Platform:** Vercel
- **Status:** Live & Public

---

## Live Link

![Sociogram](https://nirmalsocio.vercel.app/)

---

## 🏆 Author

**Nirmal Dhakal**
📍 Rampur Six, Palpa
💻 B.Sc. CSIT Student | Web Designer | Backend Developer | UI/UX Designer

🔗 **GitHub:** [@nirmaldhakal2003](https://github.com/nirmaldhakal2003)

---

## 📜 License

This project is **open-source** and available under the [MIT License](LICENSE).

```


```
