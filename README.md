# TikTok UI Clone 🎬

A modern, responsive TikTok UI clone built with React and Vite. This project demonstrates advanced frontend development skills including component architecture, state management, routing, and responsive design.

## 🎯 Purpose

This project was created to practice and strengthen skills in:

- Building complex, responsive user interfaces
- Component-based architecture with React
- State management and data flow
- Modern frontend tooling and best practices
- API integration with real services
- Performance optimization and SEO

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Multi-page Navigation**: Home, Following, Friends, Search, Profile, Live, Explore, and Upload pages
- **Sidebar Navigation**: Collapsible left sidebar with menu and following accounts
- **User Search**: Debounced search functionality with real-time results
- **Following System**: View and manage following accounts
- **More Menu**: Additional options and settings
- **Clean Architecture**: Well-organized component structure with reusable components
- **Context API**: Global state management with AppProvider
- **Custom Hooks**: Debounce hook for optimized search functionality
- **Error Handling**: Service layer with request utilities and error handling

## 🛠️ Tech Stack

| Technology             | Purpose                                   |
| ---------------------- | ----------------------------------------- |
| **React 19**           | UI library and component framework        |
| **Vite 7**             | Fast build tool and dev server with HMR   |
| **React Router DOM 7** | Client-side routing and navigation        |
| **Tailwind CSS 4**     | Utility-first CSS framework for styling   |
| **Axios**              | HTTP client for API requests              |
| **Floating UI**        | Positioning library for popovers/tooltips |
| **Tippy.js**           | Tooltip and popover library               |
| **ESLint**             | Code quality and best practices           |
| **Base UI Components** | Additional React components               |

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── AppProvider/    # Global state provider
│   └── Image/          # Image component
├── layout/             # Layout wrappers
│   ├── DefaultLayout/  # Default page layout with sidebar
│   ├── UploadLayout/   # Upload page layout
│   └── components/     # Layout-specific components
│       ├── LeftSide/   # Left sidebar with menu and search
│       └── RightSide/  # Right sidebar content
├── pages/              # Page components
│   ├── Home/          # Home feed
│   ├── Following/     # Following accounts feed
│   ├── Friends/       # Friends page
│   ├── Search/        # Search results
│   ├── Profile/       # User profile
│   ├── Upload/        # Video upload
│   ├── Explore/       # Explore page
│   └── Live/          # Live videos
├── routes/            # Route configuration
├── services/          # API services
│   ├── searchServices.jsx   # Search API calls
│   └── userService.jsx      # User-related API calls
├── utils/             # Utility functions
├── hooks/             # Custom React hooks
├── config/            # Configuration files
└── assets/            # Static assets (images, fonts, videos)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project

```bash
git clone <repository-url>
cd TiktokUI
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 📚 Key Learning Outcomes

### Component Architecture

- Built reusable components following React best practices
- Implemented proper component hierarchy and composition
- Used props effectively for data passing between components

### State Management

- Implemented Context API for global state management
- Managed local component state with hooks
- Implemented custom hooks for reusable logic (useDebounce)

### Routing & Navigation

- Set up React Router for multi-page navigation
- Implemented dynamic routing with route configuration
- Managed navigation flow and nested routes

### Performance Optimization

- Implemented debouncing for search functionality
- Used Vite for fast development and optimized builds
- Optimized component re-renders with proper dependency management

### UI/UX Implementation

- Created responsive layouts with Tailwind CSS
- Implemented complex UI components (sidebars, menus, search)
- Added tooltips and popovers with Floating UI and Tippy.js
- Followed TikTok's design patterns and user experience

### API Integration

- Created service layer for API calls with Axios
- Implemented error handling and request utilities
- Built search functionality with API integration

## 🎨 Design Features

- **Modern UI**: Clean and intuitive user interface matching TikTok's design
- **Dark Mode Ready**: Tailwind CSS setup supports both light and dark themes
- **Accessibility**: Proper semantic HTML and ARIA attributes
- **Responsive**: Mobile-first approach ensuring great experience on all devices

## 💡 Highlights for Portfolio

This project demonstrates:

- ✅ Ability to work with modern React ecosystem
- ✅ Understanding of component-based architecture
- ✅ Proficiency with CSS frameworks (Tailwind CSS)
- ✅ Client-side routing and navigation patterns
- ✅ API integration and service layer design
- ✅ Custom hooks and reusable logic
- ✅ Responsive and adaptive design implementation
- ✅ Code organization and clean architecture
- ✅ Problem-solving skills in UI/UX implementation

## 🔧 Future Enhancements

Potential improvements for future versions:

- [ ] Add infinite scroll pagination
- [ ] Implement video playback functionality
- [ ] Add user authentication and login
- [ ] Create user dashboard for video management
- [ ] Add real-time notifications
- [ ] Implement dark mode toggle
- [ ] Add animations and transitions
- [ ] Performance monitoring and analytics

## 📝 License

This project is for educational purposes.

## 👤 Author

Your Name - Frontend Developer

---

**Note**: This is an educational project created to practice frontend development skills. It is a UI clone for learning purposes and not affiliated with TikTok.
