import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { parse } from "url";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "mock-api",
      configureServer(server) {
        const projects = [
          {
            id: "1",
            title: "Simple ToDo App",
            description:
              "A task management app that allows users to add, edit, and delete tasks.",
            objective:
              "Improve productivity by organizing daily tasks efficiently.",
            features: [
              "Add, edit, and delete tasks",
              "Mark tasks as completed",
              "Persistent task storage with local storage",
            ],
            featuresCount: "3",
            techStack: ["JavaScript", "HTML", "CSS"],
            techCount: "3",
            link: "#",
            img: "https://i.imghippo.com/files/zZDh4902aA.png",
            githubUrl: "#",
          },
          {
            id: "2",
            title: "NxtTrendz E-commerce App",
            description:
              "This e-commerce app is designed to provide users with a seamless and intuitive online shopping experience. It incorporates a range of essential features, ensuring convenience and personalization for all types of users.",
            objective:
              "Provide users with a seamless shopping experience similar to Amazon or Flipkart.",
            features: [
              "Secure login for all users, with special perks for Prime members like faster delivery and exclusive offers.",
              "Quickly find products by name or category",
              "Narrow down choices by price, brand, ratings, and more.",
              "Select items, review them, and manage your shopping cart easily.",
              "Multiple secure payment options for a smooth checkout experience",
            ],
            featuresCount: "5",
            techStack: ["React.js", "Context API", "JS-Cookie", "CSS"],
            techCount: "4",
            link: "https://jeyanxttrendz.ccbp.tech/login",
            img: "https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-outputs.png",
          },
          {
            id: "3",
            title: "Movie Database App",
            description:
              "A movie discovery app featuring pagination for browsing popular, top-rated, and upcoming movies.",
            objective: "Help users discover movies using TheMovieDB API.",
            features: [
              "Pagination for movie lists",
              "Popular, Top Rated & Upcoming sections",
              "Clean and responsive design",
            ],
            featuresCount: "3",
            techStack: ["React.js", "REST API", "CSS"],
            techCount: "3",
            link: "#",
            img: "https://i.imghippo.com/files/xcv3567At.png",
            githubUrl: "https://github.com/jeyadhivan/MoviesDatabase.git",
          },
          {
            id: "4",
            title: "Jobby App",
            description:
              "A job search platform that allows users to filter and apply for jobs based on various criteria.",
            objective: "Allow job seekers to find relevant jobs easily.",
            features: [
              "Search and filter jobs by employment type and salary range",
              "Job detail view",
              "Login and protected routes",
            ],
            featuresCount: "3",
            techStack: ["React.js", "REST API", "CSS"],
            techCount: "3",
            link: "#",
            img: "https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-sm-outputs.png",
          },
          {
            id: "5",
            title: "Library Management System",
            description:
              "A system to manage book inventory, user borrowing, and returns.",
            objective: "Digitize library operations for ease of management.",
            features: [
              "Admin panel to manage books",
              "Borrow/Return functionality",
              "Track availability and due dates",
            ],
            featuresCount: "3",
            techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
            techCount: "4",
            link: "#",
            img: "https://i.imghippo.com/files/YlY8609DAc.jpeg",
            githubUrl: "https://github.com/jeyadhivan/Library-Management.git",
          },
          {
            id: "6",
            title: "Speed Typing Test",
            description:
              "A web app that measures typing speed and accuracy in real-time.",
            objective: "Practice and improve typing speed.",
            features: [
              "Live words per minute (WPM) counter",
              "Accuracy measurement",
              "Restart functionality",
            ],
            featuresCount: "3",
            techStack: ["JavaScript", "HTML", "CSS"],
            techCount: "3",
            link: "#",
            img: "https://i.imghippo.com/files/kdu6831fE.png",
            githubUrl: "https://github.com/jeyadhivan/Speed-typing-test.git",
          },
          {
            id: "7",
            title: "Rock Paper Scissors Game",
            description:
              "A command-line Python game that lets users play Rock Paper Scissors against the computer.",
            objective: "Fun mini-game to demonstrate simple logic in Python.",
            features: [
              "Random computer choice",
              "User vs Computer rounds",
              "Win/loss/draw logic",
            ],
            featuresCount: "3",
            techStack: ["react", "CSS", "Github"],
            techCount: "3",
            link: "https://jeyalakshmi.ccbp.tech/",
            img: "https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-output.gif",
            githubUrl: "https://github.com/jeyadhivan/Rock-Paper-Scissor.git",
          },
          {
            id: "8",
            title: "Nxt Watch",
            description:
              "A smart video app showcasing trending content for endless entertainment and creativity.",
            objective: "Create a YouTube-like experience with theme support.",
            features: [
              "Trending videos list",
              "Save favorites",
              "Light/Dark theme toggle",
            ],
            featuresCount: "3",
            techStack: ["React", "styled-components", "Context API"],
            techCount: "3",
            link: "https://jeyaNxtWatch.ccbp.tech",
            img: "https://i.ytimg.com/vi/wEFvcFp1Zfc/maxresdefault.jpg",
            githubUrl: "https://github.com/jeyadhivan/Nxt-watch.git",
          },
          {
            id: "9",
            title: "Daily Mood Tracker",
            description:
              "An app designed to help users monitor and reflect on their daily moods for mental well-being.",
            objective:
              "Provide an intuitive, visual representation of mood patterns.",
            features: [
              "Mood input options",
              "Analytics and summaries",
              "Interactive calendar view",
            ],
            featuresCount: "3",
            techStack: ["React", "Chart.js", "LocalStorage API"],
            techCount: "3",
            link: "https://gjtracker.ccbp.tech/login",
            img: "https://i.imghippo.com/files/zHl5533GTE.png",
            githubUrl: "https://github.com/jeyadhivan/DailyMoodTracker.git",
          },
          {
            id: "10",
            title: "Restaurant app",
            description:
              "An app to explore dishes by category, customize them, add to cart, and manage orders effortlessly.",
            objective:
              "Simplify food discovery and ordering with customizable options and efficient cart management.",
            features: [
              "Find dishes by category",
              "Customize dish ingredients",
              "Add to cart and view cart section",
            ],

            featuresCount: "3",
            techStack: ["React", "Google Maps API", "Firebase"],
            techCount: "3",
            link: "https://jeyaRestaurantFinder.ccbp.tech",
            img: "https://example.com/restaurant-finder-image.jpg",
            githubUrl: "https://github.com/jeyadhivan/Restaurant-app.git",
          },
        ];

        server.middlewares.use((req, res, next) => {
          const { pathname } = parse(req.url, true);

          if (pathname === "/api/projects") {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(projects));
          } else if (pathname?.startsWith("/api/projects/")) {
            const id = pathname.split("/api/projects/")[1];
            const project = projects.find((p) => p.id === id);

            res.setHeader("Content-Type", "application/json");
            if (project) {
              res.end(JSON.stringify(project));
            } else {
              res.statusCode = 404;
              res.end(JSON.stringify({ error: "Project not found" }));
            }
          } else {
            next();
          }
        });
      },
    },
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
