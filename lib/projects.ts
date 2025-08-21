import {
    ExternalLink,
    Github,
    Smartphone,
    Globe,
    Database,
    Brain,
    Code,
    Zap,
} from "lucide-react";

export const projects = [
    {
        title: "VS Code REST API Client",
        description:
            "A powerful VS Code extension that simplifies API testing and development workflow. Features include request history, environment variables, and response formatting.",
        image: "/vs-code-extension-interface-with-api-testing.jpg",
        category: "Extension",
        tech: ["TypeScript", "VS Code API", "REST", "JSON"],
        icon: Code,
        links: {
            demo: "#",
            github: "#",
        },
        featured: true,
    },
    {
        title: "React Offline Sync App",
        description:
            "A React application with robust offline capabilities using Dexie.js for local storage and automatic synchronization when connection is restored.",
        image: "/react-app-with-offline-sync-interface.jpg",
        category: "Web App",
        tech: ["React", "TypeScript", "Dexie.js", "IndexedDB"],
        icon: Globe,
        links: {
            demo: "#",
            github: "#",
        },
        featured: true,
    },
    {
        title: "Go Desktop Auto-Update App",
        description:
            "A cross-platform desktop application built with Go and webview, featuring automatic updates and modern web-based UI components.",
        image: "/desktop-application-with-modern-interface.jpg",
        category: "Desktop",
        tech: ["Go", "WebView", "HTML/CSS", "Auto-Update"],
        icon: Zap,
        links: {
            demo: "#",
            github: "#",
        },
        featured: true,
    },
    {
        title: "ML Prediction Models",
        description:
            "Collection of machine learning models using scikit-learn for various prediction tasks including classification and regression problems.",
        image: "/machine-learning-dashboard-with-charts-and-graphs.jpg",
        category: "AI/ML",
        tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
        icon: Brain,
        links: {
            demo: "#",
            github: "#",
        },
        featured: false,
    },
    {
        title: "Android Todo CRUD App",
        description:
            "A native Android application built with Kotlin featuring full CRUD operations, local database storage, and material design principles.",
        image: "/android-todo-app-with-material-design.jpg",
        category: "Mobile",
        tech: ["Kotlin", "Android", "Room DB", "Material Design"],
        icon: Smartphone,
        links: {
            demo: "#",
            github: "#",
        },
        featured: false,
    },
    {
        title: "Database Management System",
        description:
            "A comprehensive database management interface with support for multiple database types, query optimization, and data visualization.",
        image: "/database-management-interface-with-tables-and-quer.jpg",
        category: "Backend",
        tech: ["Go", "SQLite", "PostgreSQL", "REST API"],
        icon: Database,
        links: {
            demo: "#",
            github: "#",
        },
        featured: false,
    },
];