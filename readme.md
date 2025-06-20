# Next.js Course - Table of Contents

## Course Overview
A comprehensive guide to Next.js covering routing, components, error handling, and advanced features.

## Table of Contents

### Core Concepts
- [02. React Server Components (RSC)](./02.RSC.md)
- [03. Routing Basics](./03.RoutingBasic.md)

### Routing System
- [04. Nested Routes](./04.NestedRoutes.md)
- [05. Dynamic Routes](./05.DynamicRoutes.md)
- [06. Nested Dynamic Routes](./06.NestedDR.md)
- [07. Catch All Routes](./07.CatchAllRoute.md)

### Error Handling & Special Pages
- [08. Custom 404 Page](./08.Custom404Page.md)
- [18-19-20-21-22-23. Error Handling](./18_19_20_21_22_23.Error.md)

### Advanced Routing Features
- [09. Private Folder Grouping](./09.PrivateFolder_Grouping.md)
- [10-11. Layout System](./1011Layout.md)

### Metadata & SEO
- [12-13. Metadata Configuration](./1213.Metadata.md)

### Navigation
- [14-15-16-17. Navigation Components](./14_15_16_17.Navigation.md)

---

## Quick Navigation

| Topic | File | Description |
|-------|------|-------------|
| RSC | [02.RSC.md](./02.RSC.md) | React Server Components basics |
| Routing | [03.RoutingBasic.md](./03.RoutingBasic.md) | File-based routing fundamentals |
| Nested Routes | [04.NestedRoutes.md](./04.NestedRoutes.md) | Multi-level URL structures |
| Dynamic Routes | [05.DynamicRoutes.md](./05.DynamicRoutes.md) | Variable URL parameters |
| Nested Dynamic | [06.NestedDR.md](./06.NestedDR.md) | Complex dynamic routing |
| Catch All | [07.CatchAllRoute.md](./07.CatchAllRoute.md) | Flexible route matching |
| Custom 404 | [08.Custom404Page.md](./08.Custom404Page.md) | Custom error pages |
| Private Folders | [09.PrivateFolder_Grouping.md](./09.PrivateFolder_Grouping.md) | Code organization |
| Layouts | [1011Layout.md](./1011Layout.md) | Shared UI components |
| Metadata | [1213.Metadata.md](./1213.Metadata.md) | SEO and meta tags |
| Navigation | [14_15_16_17.Navigation.md](./14_15_16_17.Navigation.md) | Navigation components |
| Error Handling | [18_19_20_21 22_23.Error.md](./18_19_20_21_22_23.Error.md) | Error boundaries and recovery |

---
# 1. Next.js 15 Notes - Introduction & Overview

## What is Next.js?

Next.js is a **React framework** for building **full-stack web applications**. While React alone is just a library for building user interfaces (handling only the view layer), Next.js extends React's capabilities to create production-ready applications.

### Key Differences: React vs Next.js

**React (Library):**
- Handles only the view layer/user interfaces
- Requires additional decisions and packages for:
  - Routing
  - Data fetching
  - Other production features

**Next.js (Framework):**
- Uses React for UI building
- Provides additional built-in features for production applications
- Has established opinions and conventions
- No need for additional packages - everything included

## Why Learn Next.js?

Next.js simplifies the process of building production-ready web applications by providing essential features out of the box.

## Key Features of Next.js

### 1. **File-Based Routing**
- No need to install/configure third-party routing packages
- Simply create files and routes are automatically generated
- Eliminates traditional React routing complexity

### 2. **API Routes (Full-Stack Framework)**
- Build both frontend React components AND backend APIs
- Seamless integration between frontend and backend code
- Single application for complete full-stack development

### 3. **Rendering Flexibility**
- Supports both server-side rendering (SSR)
- Supports client-side rendering (CSR)
- Improves performance when implemented properly
- Better search engine optimization (SEO)

### 4. **Streamlined Data Fetching**
- Built-in async/await support in React components
- Makes data fetching straightforward and efficient
- Simplified data management

### 5. **Flexible Styling Options**
- CSS Modules support
- Tailwind CSS integration
- CSS-in-JS solutions
- Multiple approaches to match preferences

### 6. **Built-in Optimizations**
- Image optimization
- Font optimization
- Script optimization
- Enhances Core Web Vitals
- Improves overall user experience

### 7. **Optimized Build System**
- Development environment optimized
- Production build system included
- Focus on coding instead of complex configurations
- No additional build tool setup required

## Prerequisites

### Required Knowledge:
- **HTML, CSS, and JavaScript** fundamentals
- **React fundamentals** (since Next.js is a React framework)

### Essential React Concepts:
- Function components
- Props
- State management
- JSX syntax
- React Hooks

### Note on React Knowledge:
- Don't need to be an expert
- Should be familiar with core concepts
- Solid foundation in React fundamentals is essential



---



# NextJS from official Docs

# 📘 Next.js (App Router) - Complete Learning Path

This guide will help you cover **all important topics and scenarios** in Next.js using the **App Router**, including both **Client** and **Server Components**.

---

## 🚀 Phase 1: Getting Started (Foundation)

1. [Introduction to Next.js](https://nextjs.org/docs)
2. [Routing: App Router Overview](https://nextjs.org/docs/app/building-your-application/routing)
3. [Project Structure](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
4. [Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)
5. [Pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)
6. [Nested Routes](https://nextjs.org/docs/app/building-your-application/routing/nested-routes)
7. [Linking and Navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)

---

## ⚙️ Phase 2: Server vs Client Components

8. [Rendering Overview](https://nextjs.org/docs/app/building-your-application/rendering)
9. [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
10. [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
11. [When to Use Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components#when-to-use-client-components)
12. [Shared Components Between Server and Client](https://nextjs.org/docs/app/building-your-application/rendering/sharing-components)

---

## 🔌 Phase 3: Data Fetching

13. [Data Fetching Overview](https://nextjs.org/docs/app/building-your-application/data-fetching)
14. [Fetching Data on the Server (Server Components)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
15. [Loading UI & Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui)
16. [Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
17. [Using Third-Party APIs](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#third-party-apis)

---

## 🌐 Phase 4: Advanced Routing Features

18. [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
19. [Catch-all Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)
20. [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/colocation#route-groups)
21. [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
22. [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
23. [Modals with Routes](https://nextjs.org/docs/app/building-your-application/routing/modals)

---

## 🧠 Phase 5: Forms, Actions & Mutations

24. [Handling Forms](https://nextjs.org/docs/app/building-your-application/forms)
25. [Server Actions (form-based mutations)](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
26. [Client-side Forms](https://nextjs.org/docs/app/building-your-application/forms/client-components)

---

## 🔒 Phase 6: Authentication & Authorization

27. [Authentication Patterns](https://nextjs.org/docs/app/building-your-application/authentication)
28. [Using NextAuth.js](https://next-auth.js.org/getting-started/introduction)
29. [Protecting Routes](https://nextjs.org/docs/app/building-your-application/authentication#protected-routes)

---

## 📦 Phase 7: API Routes and Middleware

30. [API Routes (Pages Router only)](https://nextjs.org/docs/pages/building-your-application/api-routes)
31. [Middleware](https://nextjs.org/docs/app/building-your-application/middleware)

---

## ⚡ Phase 8: Optimization & Performance

32. [Streaming](https://nextjs.org/docs/app/building-your-application/rendering/streaming)
33. [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
34. [Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
35. [Caching](https://nextjs.org/docs/app/building-your-application/caching)
36. [Preloading Data](https://nextjs.org/docs/app/building-your-application/data-fetching/preloading)

---

## 🧪 Phase 9: Testing & Deployment

37. [Testing](https://nextjs.org/docs/pages/building-your-application/testing)
38. [Deployment on Vercel](https://nextjs.org/docs/app/building-your-application/deploying)
39. [Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

---

## 🔁 Bonus: Full Examples & Recipes

- [Next.js App Router Examples](https://nextjs.org/examples?filters=app)
- [Client Component Example](https://nextjs.org/docs/app/building-your-application/rendering/client-components#example)
- [Server Component Example](https://nextjs.org/docs/app/building-your-application/rendering/server-components#example)

---

## ✅ Final Tip

Go through the phases **in order** and build small projects along the way (e.g., dashboard, blog, auth app) to reinforce each concept.



*Happy learning! 🚀*





