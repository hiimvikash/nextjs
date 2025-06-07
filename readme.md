
# Next.js Tutorial Notes - Introduction & Overview

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

# React Server Components (RSC) - Fundamental Concepts

## What are React Server Components?

React Server Components (RSC) is a **new architecture** introduced by the React team and quickly adopted by Next.js. This architecture fundamentally changes how we think about and build React components.

## The Two Component Types

RSC divides React components into **two distinct types**:

### 1. **Server Components** (Default in Next.js)

**What they are:**
- Components that run on the server
- **Default component type** in Next.js (all components are server components unless specified otherwise)

**What they can do:**
- Perform **server-side tasks**
- Read files from the file system
- Fetch data directly from databases
- Access server-only resources
- Run before the page is sent to the browser

**What they cannot do:**
- Use React hooks (useState, useEffect, etc.)
- Handle user interactions (onClick, onChange, etc.)
- Access browser APIs
- Maintain client-side state

**Simple analogy:** Think of server components as "backend helpers" that prepare data and content before sending it to the user's browser.

### 2. **Client Components**

**How to create them:**
- Add the `"use client"` directive at the **top of your component file**

```javascript
"use client"

export default function MyClientComponent() {
  // This is now a client component
}
```

**What they can do:**
- Use **React hooks** (useState, useEffect, etc.)
- Handle **user interactions** (clicks, form inputs, etc.)
- Access browser APIs
- Maintain and update component state
- Create interactive UI elements

**What they cannot do:**
- Perform server-side tasks
- Read files from the server
- Access databases directly
- Use server-only resources

**Simple analogy:** Think of client components as "traditional React components" - they work exactly like the React components you're already familiar with.

## Key Differences Summary

| Feature | Server Components | Client Components |
|---------|------------------|-------------------|
| **Default in Next.js** | ✅ Yes | ❌ No (need "use client") |
| **Server-side tasks** | ✅ Yes | ❌ No |
| **File system access** | ✅ Yes | ❌ No |
| **Database queries** | ✅ Yes | ❌ No |
| **React hooks** | ❌ No | ✅ Yes |
| **User interactions** | ❌ No | ✅ Yes |
| **Browser APIs** | ❌ No | ✅ Yes |

## When to Use Each Type

### Use **Server Components** when:
- Fetching data from APIs or databases
- Reading configuration files
- Performing calculations that don't need user input
- Displaying static content
- SEO is important (server-rendered content)

### Use **Client Components** when:
- Handling user interactions (forms, buttons, etc.)
- Using React hooks for state management
- Creating interactive features
- Accessing browser-specific APIs
- Building dynamic, responsive UI elements

## Practical Examples

### Server Component Example:
```javascript
// This runs on the server
export default async function ProductList() {
  // This data fetching happens on the server
  const products = await fetch('https://api.example.com/products')
  const data = await products.json()
  
  return (
    <div>
      {data.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}
```

### Client Component Example:
```javascript
"use client"
import { useState } from 'react'

export default function Counter() {
  // useState hook only works in client components
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

## Why This Architecture Matters

### Benefits of Server Components:
- **Faster initial page loads** - HTML is pre-rendered on server
- **Better SEO** - Search engines can crawl server-rendered content
- **Reduced JavaScript bundle size** - Server code doesn't go to browser
- **Direct database access** - No need for API layers for simple queries
- **Enhanced security** - Sensitive operations stay on server

### Benefits of Client Components:
- **Rich interactivity** - Full access to React's interactive features
- **Real-time updates** - Can respond immediately to user actions
- **Browser integration** - Access to browser APIs and features
- **Familiar development** - Works like traditional React components

## Important Notes for Next.js Development

1. **Default Behavior**: Every component in Next.js is a server component unless you add `"use client"`

2. **Routing Context**: This concept becomes crucial when building routes, as you'll often need both types:
   - Server components for data fetching and initial rendering
   - Client components for interactive elements within those pages

3. **Progressive Enhancement**: You can start with server components and add `"use client"` only where interactivity is needed

4. **Future Learning**: More detailed coverage of RSC concepts will come later in the course with practical examples

---

*This foundation knowledge is essential for understanding Next.js routing and component architecture.*

# Next.js Routing Basics - File-Based Routing System

## What is File-Based Routing?

Next.js uses a **file system-based routing system**, meaning the URLs you can access in your browser are determined by how you organize your files and folders in your code.

**Simple explanation:** Instead of writing routing code, you create folders and files, and Next.js automatically turns them into website pages.

## Core Routing Conventions

### The Three Main Rules:

1. **All routes must live inside the `app` folder**
2. **Route files must be named `page.js` or `page.tsx`** (depending on TypeScript usage)
3. **Each folder represents a segment of the URL path**

### Important Note:
**Not every file becomes a route** - only files that follow these conventions become accessible URLs.

## Practical Examples

### Scenario 1: Creating a Homepage

**Goal:** Create a homepage at `localhost:3000`

**Steps:**
1. Create an `app` folder inside the `src` directory
2. Create a `page.tsx` file inside the `app` folder
3. Export a React component from this file

**Code Example:**
```jsx
// src/app/page.tsx
export default function Home() {
  return <h1>Welcome Home</h1>
}
```

**Result:** This automatically maps to your site's root URL (`localhost:3000`)

### Scenario 2: Creating Additional Routes

**Goal:** Create `/about` and `/profile` pages

**For `/about` route:**
1. Create a folder called `about` inside the `app` folder
2. Create a `page.tsx` file inside the `about` folder
3. Export a React component

```jsx
// src/app/about/page.tsx
export default function About() {
  return <h1>About Me</h1>
}
```

**For `/profile` route:**
1. Create a folder called `profile` inside the `app` folder
2. Create a `page.tsx` file inside the `profile` folder
3. Export a React component

```jsx
// src/app/profile/page.tsx
export default function Profile() {
  return <h1>My Profile</h1>
}
```

## File Structure Visualization

```
src/
  app/
    page.tsx           → localhost:3000 (root route)
    about/
      page.tsx         → localhost:3000/about
    profile/
      page.tsx         → localhost:3000/profile
```

## Key Routing Concepts

### 1. **Root Route Mapping**
- `page.tsx` file inside the `app` folder automatically maps to your site's root URL
- This is your homepage

### 2. **Folder-to-URL Mapping**
- Routes are directly tied to their folder names within the app directory
- Folder name = URL segment
- `about` folder → `/about` route
- `profile` folder → `/profile` route

### 3. **Automatic 404 Handling**
- If someone tries to access a URL that doesn't match any file in your app folder (e.g., `/dashboard` when no dashboard folder exists)
- Next.js automatically serves a **404 Not Found** response
- No special code needed to handle non-existing routes

## Layout.tsx File

**Important Note:** Even if you delete the `layout.tsx` file, Next.js will automatically create and set it up when you first access the root route. This file gets created behind the scenes and will be explored in depth later.

## Benefits of File-Based Routing

### 1. **No Router Configuration**
- Don't need to install additional routing packages
- No need to configure route definitions in code
- File and folder structure does all the work

### 2. **Convention Over Configuration**
- Follows Next.js philosophy of favoring conventions
- Predictable and consistent routing patterns
- Less boilerplate code

### 3. **Intuitive Structure**
- URL structure mirrors folder structure
- Easy to understand and maintain
- Clear relationship between files and routes

## Development Workflow

1. **Start Development Server:** `npm run dev`
2. **Create Routes:** Add folders and `page.tsx` files
3. **Access Routes:** Navigate to corresponding URLs in browser
4. **Automatic Updates:** Changes reflect immediately in development

## Quick Reference

| File Location | URL Route |
|---------------|-----------|
| `app/page.tsx` | `/` (root) |
| `app/about/page.tsx` | `/about` |
| `app/profile/page.tsx` | `/profile` |
| `app/products/page.tsx` | `/products` |
| `app/contact/page.tsx` | `/contact` |

## Common Patterns

### Simple Page Structure:
```jsx
export default function PageName() {
  return (
    <div>
      <h1>Page Title</h1>
      <p>Page content goes here</p>
    </div>
  )
}
```

### Best Practices:
- Use descriptive folder names that match your desired URLs
- Keep component names descriptive and consistent
- Organize related pages in logical folder structures
- Remember that folder names become part of your URL structure

---

*Next topics: Nested routes, dynamic routes, and advanced routing concepts*

# Next.js Nested Routes - Building Complex URL Structures

## What are Nested Routes?

Nested routes allow you to create **multi-level URL structures** by organizing folders within folders. This enables you to build complex navigation patterns that mirror real-world website structures.

**Simple explanation:** Just like you can have folders inside folders on your computer, you can have routes inside routes in Next.js.

## Scenario 3: Building a Blog with Nested Routes

**Goal:** Create the following routes:
- `localhost:3000/blog` (main blog page)
- `localhost:3000/blog/first` (first blog post)
- `localhost:3000/blog/second` (second blog post)

## Step-by-Step Implementation

### Step 1: Create the Main Blog Route

**File Structure:**
```
src/
  app/
    blog/
      page.tsx    → /blog route
```

**Code:**
```jsx
// src/app/blog/page.tsx
export default function Blog() {
  return <h1>My Blog</h1>
}
```

**Result:** `localhost:3000/blog` displays "My Blog"

### Step 2: Create Nested Blog Post Routes

**File Structure:**
```
src/
  app/
    blog/
      page.tsx         → /blog
      first/
        page.tsx       → /blog/first
      second/
        page.tsx       → /blog/second
```

**Code for First Blog Post:**
```jsx
// src/app/blog/first/page.tsx
export default function FirstBlog() {
  return <h1>First Blog Post</h1>
}
```

**Code for Second Blog Post:**
```jsx
// src/app/blog/second/page.tsx
export default function SecondBlog() {
  return <h1>Second Blog Post</h1>
}
```

## How Nested Routes Work

### URL-to-Folder Mapping

| URL Route | File Location | Component |
|-----------|---------------|-----------|
| `/blog` | `app/blog/page.tsx` | Blog |
| `/blog/first` | `app/blog/first/page.tsx` | FirstBlog |
| `/blog/second` | `app/blog/second/page.tsx` | SecondBlog |

### Visual Representation

```
app/
├── page.tsx                 → /
└── blog/
    ├── page.tsx             → /blog
    ├── first/
    │   └── page.tsx         → /blog/first
    └── second/
        └── page.tsx         → /blog/second
```

## Key Concepts

### 1. **Automatic URL Mirroring**
- Next.js automatically mirrors your folder structure in URLs
- Each folder level becomes a URL segment
- No manual route configuration needed

### 2. **Unlimited Nesting Depth**
- You can nest routes as deeply as needed
- Example: `/blog/category/post/comments/reply`
- Each level just requires a new folder with `page.tsx`

### 3. **Independent Pages**
- Each `page.tsx` file creates an independent route
- Can have different layouts, components, and functionality
- Parent routes don't automatically include child routes

## Advanced Nested Route Examples

### E-commerce Structure:
```
app/
├── products/
│   ├── page.tsx                    → /products
│   ├── electronics/
│   │   ├── page.tsx                → /products/electronics
│   │   ├── phones/
│   │   │   └── page.tsx            → /products/electronics/phones
│   │   └── laptops/
│   │       └── page.tsx            → /products/electronics/laptops
│   └── clothing/
│       ├── page.tsx                → /products/clothing
│       ├── men/
│       │   └── page.tsx            → /products/clothing/men
│       └── women/
│           └── page.tsx            → /products/clothing/women
```

### Documentation Structure:
```
app/
├── docs/
│   ├── page.tsx                    → /docs
│   ├── getting-started/
│   │   ├── page.tsx                → /docs/getting-started
│   │   ├── installation/
│   │   │   └── page.tsx            → /docs/getting-started/installation
│   │   └── configuration/
│   │       └── page.tsx            → /docs/getting-started/configuration
│   └── api/
│       ├── page.tsx                → /docs/api
│       └── reference/
│           └── page.tsx            → /docs/api/reference
```

## Best Practices for Nested Routes

### 1. **Logical Organization**
- Group related content together
- Use descriptive folder names
- Mirror your site's information architecture

### 2. **Consistent Naming**
- Use kebab-case for folder names (`blog-posts`, not `blogPosts`)
- Keep names short but descriptive
- Avoid special characters and spaces

### 3. **Page Components**
- Give components meaningful names that match their route
- Use consistent export patterns
- Keep components focused on their specific route

## Common Patterns

### Blog/Content Structure:
```jsx
// Main category page
export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <nav>
        <a href="/blog/first">First Post</a>
        <a href="/blog/second">Second Post</a>
      </nav>
    </div>
  )
}
```

### Product Category Structure:
```jsx
// Category overview page
export default function Electronics() {
  return (
    <div>
      <h1>Electronics</h1>
      <div>
        <a href="/products/electronics/phones">Phones</a>
        <a href="/products/electronics/laptops">Laptops</a>
      </div>
    </div>
  )
}
```

## Benefits of Nested Routes

### 1. **SEO-Friendly URLs**
- Clear, hierarchical URL structure
- Search engines understand content organization
- Better user experience with intuitive navigation

### 2. **Maintainable Code**
- Logical file organization
- Easy to find and update specific pages
- Clear separation of concerns

### 3. **Scalable Architecture**
- Easy to add new sections or pages
- Flexible structure that grows with your application
- No routing configuration overhead

## Development Tips

### Testing Nested Routes:
1. Start the development server: `npm run dev`
2. Navigate to each URL to verify routes work
3. Check that each page renders correctly
4. Verify folder structure matches URL expectations

### Debugging:
- If a route doesn't work, check the folder name matches the URL
- Ensure `page.tsx` files exist in each folder
- Verify component exports are correct
- Check for typos in folder names

---

*Next topic: Dynamic routes for handling variable URL parameters*

# Next.js Dynamic Routes - Building Flexible URL Patterns

## What are Dynamic Routes?

Dynamic routes allow you to create **flexible URL patterns** that can handle variable segments. Instead of creating separate folders for each possible URL, you can use **square brackets** to create routes that adapt to different parameters.

**Simple explanation:** Think of dynamic routes as "template URLs" that can work with any value in a specific position - like `/products/[anything-goes-here]`.

## Scenario 4: Product Listing and Details

**Goal:** Create the following functionality:
- `/products` → Shows a list of all products
- `/products/1` → Shows details for product 1
- `/products/2` → Shows details for product 2
- `/products/[any-id]` → Shows details for any product ID

## Step-by-Step Implementation

### Step 1: Create the Product List Page

**File Structure:**
```
src/
  app/
    products/
      page.tsx    → /products route
```

**Code:**
```jsx
// src/app/products/page.tsx
export default function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </div>
  )
}
```

**Result:** `localhost:3000/products` displays the product list.

### Step 2: The Problem with Static Routes

**What you might think to do:**
```
products/
  ├── page.tsx       → /products
  ├── 1/
  │   └── page.tsx   → /products/1
  ├── 2/
  │   └── page.tsx   → /products/2
  └── 3/
      └── page.tsx   → /products/3
```

**Why this doesn't work:**
- Imagine having hundreds or thousands of products
- Creating individual folders would be a **maintenance nightmare**
- Not scalable for real-world applications

### Step 3: Dynamic Route Solution

**File Structure:**
```
src/
  app/
    products/
      page.tsx              → /products
      [productId]/
        page.tsx            → /products/[any-value]
```

**The Magic:** Square brackets `[productId]` create a **dynamic segment** that matches any value.

## Dynamic Route Implementation

### Basic Dynamic Route Component

```jsx
// src/app/products/[productId]/page.tsx
export default async function ProductDetails({ params }) {
  // Access the dynamic segment
  const productId = (await params).productId
  
  return (
    <h1>Details about product {productId}</h1>
  )
}
```

### Understanding the `params` Prop

**Key Points:**
- Every page in the App Router receives route parameters through the `params` prop
- `params` is a **Promise** that resolves to an object containing dynamic segments
- The object keys match your folder names (without square brackets)
- Use `async/await` to access the values

**Example:**
- Route: `/products/iPhone`
- Folder: `[productId]`
- `params` resolves to: `{ productId: "iPhone" }`

## Complete Working Example

```jsx
// src/app/products/[productId]/page.tsx
export default async function ProductDetails({ params }) {
  // Destructure and await the params
  const { productId } = await params
  
  return (
    <div>
      <h1>Details about product {productId}</h1>
      <p>You are viewing product: {productId}</p>
    </div>
  )
}
```

## How Dynamic Routes Work

### URL Matching Examples

| URL | Matches | `productId` Value |
|-----|---------|-------------------|
| `/products/1` | ✅ Yes | `"1"` |
| `/products/2` | ✅ Yes | `"2"` |
| `/products/100` | ✅ Yes | `"100"` |
| `/products/iPhone` | ✅ Yes | `"iPhone"` |
| `/products/laptop-pro` | ✅ Yes | `"laptop-pro"` |
| `/products` | ❌ No | N/A (different route) |

### Visual Representation

```
app/
├── page.tsx                           → /
└── products/
    ├── page.tsx                       → /products
    └── [productId]/
        └── page.tsx                   → /products/[any-value]
```

## Advanced Dynamic Route Patterns

### Multiple Dynamic Segments

```
app/
└── products/
    └── [category]/
        └── [productId]/
            └── page.tsx               → /products/[category]/[productId]
```

**Example URLs:**
- `/products/electronics/iPhone`
- `/products/clothing/t-shirt`

**Accessing Multiple Parameters:**
```jsx
export default async function ProductDetails({ params }) {
  const { category, productId } = await params
  
  return (
    <div>
      <h1>Category: {category}</h1>
      <h2>Product: {productId}</h2>
    </div>
  )
}
```

### Catch-All Routes (Optional)

```
app/
└── shop/
    └── [...slug]/
        └── page.tsx                   → /shop/[...anything]
```

**Matches:**
- `/shop/electronics`
- `/shop/electronics/phones`
- `/shop/electronics/phones/iphone`

## Real-World Use Cases

### 1. **E-commerce Sites**
```
products/
├── page.tsx                    → Product catalog
└── [productId]/
    └── page.tsx                → Individual product pages
```

### 2. **Blog Posts**
```
blog/
├── page.tsx                    → Blog index
└── [slug]/
    └── page.tsx                → Individual blog posts
```

### 3. **User Profiles**
```
users/
└── [userId]/
    ├── page.tsx                → User profile
    ├── posts/
    │   └── page.tsx            → User's posts
    └── settings/
        └── page.tsx            → User settings
```

## Best Practices

### 1. **Descriptive Parameter Names**
```jsx
// ✅ Good - descriptive
[productId]/
[userId]/
[categorySlug]/

// ❌ Avoid - too generic
[id]/
[slug]/
[param]/
```

### 2. **Type Safety with TypeScript**
```typescript
interface PageProps {
  params: Promise<{
    productId: string
  }>
}

export default async function ProductDetails({ params }: PageProps) {
  const { productId } = await params
  // productId is now properly typed as string
}
```

### 3. **Error Handling**
```jsx
export default async function ProductDetails({ params }) {
  const { productId } = await params
  
  // Validate the parameter
  if (!productId) {
    return <div>Product not found</div>
  }
  
  // In a real app, you might fetch data here
  // and handle cases where the product doesn't exist
  
  return <h1>Details about product {productId}</h1>
}
```

## Data Fetching with Dynamic Routes

### Common Pattern for Real Applications

```jsx
// This is how you'd typically use dynamic routes with API calls
export default async function ProductDetails({ params }: { params: Promise<{
    productId: string
  }> }) {
  const { productId } = await params
  
  // Fetch product data based on the ID
  try {
    const response = await fetch(`https://api.example.com/products/${productId}`)
    const product = await response.json()
    
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    )
  } catch (error) {
    return <div>Product not found</div>
  }
}
```

## Summary

**Dynamic routes solve the scalability problem** by:
- Using square bracket notation `[paramName]` for flexible URL segments
- Automatically handling any value in that position
- Providing access to URL parameters through the `params` prop
- Eliminating the need for thousands of static route files
- In Next.js 15, `params` is asynchronous:
- Since Client Components cannot be `async` , you cannot `await` the `params` directly within them. The `use` function allows you to read the value of a Promise (like `params`) from a Client Component.
**Explanation:**

1. **`'use client'`**: This directive at the top of the file declares `Page` as a Client Component.
2. **`import { use } from 'react'`**: You import the `use` hook from React.
3. **`const { slug } = use(params)`**: Instead of `await params`, you pass the `params` Promise directly to the `use` function. React handles the resolution of the Promise, and you can then destructure the `slug` from the result.
<img width="848" alt="image" src="https://github.com/user-attachments/assets/930badbe-3b0d-4c37-9472-08b2b114ff36" />


**Key Benefits:**
- **Scalable:** Works with unlimited number of items
- **Flexible:** Handles numbers, strings, and complex identifiers
- **Maintainable:** Single file handles all variations
- **Performance:** No need to pre-generate all possible routes

---

*Next topic: Nested dynamic routes and advanced routing patterns*
# Nested Dynamic Routes in Next.js

## Overview
Nested dynamic routes allow you to handle multiple dynamic segments in your URL paths. This is essential for real-world applications where you need complex routing structures.

## Scenario 5 Example
**Goal**: Create a route structure to show:
- Product details at: `/products/1`
- Specific product review at: `/products/1/reviews/1`

## Implementation Steps

### 1. Folder Structure Setup
To create nested dynamic routes, you need to create nested folders following this pattern:

```
app/
├── products/
│   └── [productId]/
│       ├── page.tsx (for /products/1)
│       └── reviews/
│           └── [reviewId]/
│               └── page.tsx (for /products/1/reviews/1)
```

### 2. Creating the Nested Structure
1. **Start with existing dynamic product route**: `[productId]` folder already exists
2. **Create reviews folder**: Inside `[productId]`, create a `reviews` folder
3. **Add dynamic review ID**: Inside `reviews`, create `[reviewId]` folder
4. **Add page component**: Create `page.tsx` inside `[reviewId]` folder

### 3. Component Implementation

```typescript
// app/products/[productId]/reviews/[reviewId]/page.tsx

export default async function ProductReview({
  params
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>
}) {
  const { productId, reviewId } = await params;
  
  return (
    <div>
      <h1>Review {reviewId} for Product {productId}</h1>
    </div>
  );
}
```

## Key Concepts Explained

### Route Parameters Structure
- **params**: A Promise that resolves to an object containing all dynamic segments
- **Type safety**: Define the expected structure with TypeScript
- **Destructuring**: Extract `productId` and `reviewId` from the awaited params

### URL to Route Mapping
| URL | Folder Structure | Component |
|-----|-----------------|-----------|
| `/` | `app/page.tsx` | Root page |
| `/products` | `app/products/page.tsx` | Products listing |
| `/products/1` | `app/products/[productId]/page.tsx` | Product details |
| `/products/1/reviews/1` | `app/products/[productId]/reviews/[reviewId]/page.tsx` | Specific review |

## Testing Your Implementation

1. Navigate to: `localhost:3000/products/1/reviews/1`
   - Should display: "Review 1 for Product 1"

2. Try different IDs: `localhost:3000/products/100/reviews/5`
   - Should display: "Review 5 for Product 100"

3. The IDs update dynamically based on the URL segments

## Important Notes

### File-Based Routing Logic
- Each folder represents a URL segment
- Square brackets `[]` indicate dynamic segments
- Nested folders create nested routes
- `page.tsx` files define the actual page components

### Async/Await Pattern
- `params` is a Promise in Next.js App Router
- Always `await` params before destructuring
- This ensures proper server-side rendering

### Multiple Dynamic Segments
- You can have as many dynamic segments as needed
- Each dynamic segment becomes a property in the params object
- Naming convention: folder name becomes the parameter key

## Practice Exercise

**Task**: Create a review listing page for each product
- **Location**: Create `page.tsx` in the `reviews` folder (not in `[reviewId]`)
- **Route**: This will handle `/products/1/reviews` (without specific review ID)
- **Content**: Display a list of reviews for the product

**Hint**: The component should access only the `productId` parameter and display multiple reviews.

## Advanced Considerations

### Route Priority
- Static routes take priority over dynamic routes
- More specific routes take priority over less specific ones
- Nested structure follows the same priority rules

### Error Handling
- Consider adding error boundaries for invalid IDs
- Implement loading states for async operations
- Handle cases where products or reviews don't exist

### SEO and Performance
- Dynamic routes are fully SEO-friendly
- Each route can have its own metadata
- Consider implementing proper loading and error states
---
# Next.js Catchall Segments - YouTube Notes

## Overview
Catchall segments are a powerful Next.js routing concept that allows you to handle multiple URL segments with a single file, perfect for documentation sites and complex routing scenarios.

## The Problem Scenario
**Example**: Building a documentation site with:
- Multiple features (5 features)
- Each feature has multiple concepts (5 concepts each)
- Need unique routes for each concept under its feature
- URLs like: `localhost:3000/docs/feature1/concept1`, `docs/feature1/concept2`, etc.
<img width="917" alt="image" src="https://github.com/user-attachments/assets/7d8a365e-7ddf-4c6c-8f44-ff04ee0faea1" />


**Traditional Approach Issues**:
- 20 features × 20 concepts = 400 different routes
- Would require 400 separate files in Next.js file-system routing
- Even with dynamic routing: still need multiple nested folder levels

## Dynamic Routing Improvements
- Use dynamic route folders with `[conceptId]` → reduces to 20 files
- Make feature folder dynamic with `[featureId]` → down to just 2 folders
- **Remaining issue**: Every new path segment requires another nesting level

## Catchall Segments Solution
Handles all route segments with just **one file** - perfect when all pages share the same layout but need different URL segments for organization and SEO.

## Implementation Steps

### 1. Folder Structure
```
app/
  docs/
    [...slug]/
      page.tsx
```

### 2. Naming Convention
- Use square brackets with three dots: `[...slug]`
- Follow with a name (commonly "slug" for URLs)
- The three dots work like the spread operator

### 3. Basic Component Setup
```typescript
export default function Docs() {
  return <h1>Docs Homepage</h1>
}
```

### 4. Accessing URL Segments
```typescript
export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  
  if (slug && slug.length === 2) {
    return <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
  } else if (slug && slug.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>
  }
  
  return <h1>Docs Homepage</h1>
}
```

**Key Points**:
- `params` is a Promise object that needs to be awaited
- `slug` is an array of strings containing all URL segments
- Component must be async when using await
- Use conditional logic to handle different URL structures

## How It Works
The catchall route matches **any URL** with `/docs` in the path:
- `/docs/routing` → shows feature page
- `/docs/routing/catchall-segments` → shows feature + concept page  
- `/docs/feature1/concept1/example1` → all handled by same file

## Optional Catchall Segments
**Problem**: Regular catchall doesn't match `/docs` alone (shows 404)

**Solution**: Wrap folder name in extra square brackets
```
[...slug] → [[...slug]]
```

**Result**: Now `/docs` also works and triggers the default return statement

## When to Use Each Approach

### Simple `page.tsx` in docs folder
- Use when page UI is always the same
- Good for static content

### Optional catchall `page.tsx` in `[[...slug]]` folder  
- Use when page UI differs based on URL segments
- Better for dynamic content based on URL structure

## Route Matching Visualization
- `localhost:3000` → renders `page.tsx` in app folder
- Any URL containing `/docs` → renders `page.tsx` in slug folder (catchall segment)

## Practical Use Cases
- Documentation sites with nested categories
- E-commerce with category/subcategory/product structure
- Any site needing flexible URL structure with shared layouts
- SEO-friendly URLs without creating hundreds of files
# Next.js Custom 404 Page

## Overview
Learn how to create custom 404 pages in Next.js using the app router, including global 404 pages, section-specific pages, and programmatic triggering.

## Default 404 Behavior
- By default, visiting a non-existent route shows a basic 404 page
- Example: `localhost:3000/building` shows default Next.js 404
- Works fine for development but needs customization for production

## Creating a Custom Global 404 Page

### File Setup
Create a file named `not-found.tsx` (or `not-found.js`) in your app folder:

```
app/
  not-found.tsx
```

**Important**: File name must be exactly `not-found` (with hyphen) - this is a Next.js convention

### Basic Implementation
```typescript
export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  )
}
```

**Result**: Your custom 404 page now replaces the default Next.js 404 page automatically.

## Programmatic 404 Triggering

### Using the `notFound()` Function
You can programmatically trigger a 404 page using Next.js's `notFound` function.

**Example Scenario**: Product review system that should never have more than 1,000 reviews

```typescript
import { notFound } from 'next/navigation'

export default function ReviewPage({ params }: { params: { reviewId: string } }) {
  if (parseInt(params.reviewId) > 1000) {
    notFound() // Triggers the 404 page
  }
  
  // Rest of component logic
}
```

## Section-Specific 404 Pages

### Creating Nested 404 Pages
You can create more specific 404 pages for different sections of your app:

```
app/
  not-found.tsx          // Global 404
  products/
    [id]/
      reviews/
        [reviewId]/
          not-found.tsx  // Section-specific 404
          page.tsx
```

### Section-Specific Implementation
```typescript
// In reviews/[reviewId]/not-found.tsx
export default function ReviewNotFound() {
  return (
    <div>
      <h2>Review Not Found</h2>
      <p>The requested review could not be found</p>
    </div>
  )
}
```

**How it Works**: Next.js uses the most specific `not-found` page it can find:
- `/products/1/reviews/101` → Uses section-specific 404 if exists
- Falls back to global 404 if no specific one found

## Adding Dynamic Content to 404 Pages

### The Challenge
- `notFound` component doesn't accept props
- Need to show different messages based on route parameters

### Solution: Using `usePathname` Hook

```typescript
'use client' // Required for client-side hooks

import { usePathname } from 'next/navigation'

export default function ReviewNotFound() {
  const pathname = usePathname()
  
  // Extract route parameters from pathname
  const productId = pathname.split('/')[2]  // Index 2 for product ID
  const reviewId = pathname.split('/')[4]   // Index 4 for review ID
  
  return (
    <div>
      <h2>Review {reviewId} not found for product {productId}</h2>
    </div>
  )
}
```

### Important Notes About Client Components
- **Error**: "You're importing a component that needs usePathname"
- **Solution**: Add `'use client'` directive at the top of the file
- **Reason**: Hooks only work in client components, but Next.js components are server components by default

## Key Concepts Summary

### File Naming Convention
- Must be exactly `not-found.tsx` or `not-found.js` 
- Hyphen is required, not underscore or camelCase

### Hierarchy and Specificity
- Next.js automatically finds the most specific `not-found` page
- Section-specific pages override global ones
- Falls back to parent directory if no specific page found

### Server vs Client Components
- Default: All components are server components
- Use `'use client'` when you need:
  - React hooks (like `usePathname`)
  - Browser APIs
  - Interactive features

### Programmatic Triggering
- Use `notFound()` function for conditional 404s
- Import from `'next/navigation'`
- Useful for validation scenarios (ID ranges, permissions, etc.)







