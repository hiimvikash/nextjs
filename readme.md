
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

# 2. React Server Components (RSC) - Fundamental Concepts

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

# 3. Next.js Routing Basics - File-Based Routing System

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

# 4. Next.js Nested Routes - Building Complex URL Structures

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

# 5. Next.js Dynamic Routes - Building Flexible URL Patterns

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
# 6. Nested Dynamic Routes in Next.js

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
# 7. Next.js Catchall Segments

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
# 8. Next.js Custom 404 Page

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
---
<img width="692" alt="image" src="https://github.com/user-attachments/assets/2f42a207-2024-4e8b-9f78-cad3f11ab4db" />

# 9. Next.js Private Folders & Grouping folder

## Overview
Learn about Next.js private folders - a feature that helps organize your project by excluding specific folders from the routing system.

## What Are Private Folders?

Private folders are a way to tell Next.js: "This folder is for internal stuff only - don't include it in the routing system."

**Key Characteristics**:
- The folder and **all its subfolders** are excluded from routing
- Useful for organizing internal project files
- Won't accidentally create unwanted routes

## Creating Private Folders

### Naming Convention
Add an **underscore** (`_`) at the start of the folder name:

```
app/
  _lib/           // Private folder
    format-date.js
    page.tsx
  dashboard/      // Public folder
    page.tsx
```

### Practical Example

**Step 1**: Create a private folder
```
app/
  _lib/
    format-date.ts    // Utility function
    page.tsx          // This won't be accessible as a route
```

**Step 2**: Add a page component inside
```typescript
// app/_lib/page.tsx
export default function PrivateRoute() {
  return <h1>You cannot view this in the browser</h1>
}
```

**Step 3**: Test the behavior
- Navigate to `localhost:3000/_lib`
- **Result**: 404 error page (your custom 404 if you have one)
- **Reason**: The underscore makes it a private folder, so Next.js won't create a route
## Common Use Cases

### Utility Functions
```
app/
  _lib/
    format-date.ts
    api-helpers.ts
    constants.ts
```

### Internal Components
```
app/
  _components/
    internal/
      AdminPanel.tsx
      DebugTools.tsx
```

### Development Tools
```
app/
  _dev/
    test-pages/
    mock-data/
    debug-components/
```

### Shared Resources
```
app/
  _shared/
    hooks/
    types/
    utils/
```

## Pro Tip: Actual Underscores in URLs

If you actually want an underscore in your URL, use **URL encoding**:
- Use `%5F` instead of `_`
- `%5F` is the URL-encoded version of underscore

**Example**:
```
app/
  %5Flib/     // This WILL create a route at /lib
    page.tsx
```

**Test**: Try changing `_lib` to `%5Flib` and see if the page becomes accessible in the browser.

<img width="245" alt="image" src="https://github.com/user-attachments/assets/e4962771-ef83-44db-bf05-9ba83c76e5c1" />
Here `(auth)` is an organizational folder.

# 10. Layout
![image](https://github.com/user-attachments/assets/b9548757-9b1b-4e35-b77d-3254e2f3f2c0)

# 11. Next.js Multiple Root Layouts with Route Groups

## Overview
Learn how to create multiple root layouts in Next.js using route groups to apply different layouts to different sections of your application.

## The Problem Scenario

**Setup**: Building an app with these routes:
- `/revenue` - needs header and footer
- `/customers` - needs header and footer  
- `/login` - needs minimal layout (footer only)
- `/register` - needs minimal layout (footer only)

**Challenge**: 
- Root `layout.tsx` applies to ALL pages in the application
- No way to have different layouts for different sections
- Need selective layout application

## Solution: Route Groups + Multiple Root Layouts

Route groups allow you to:
1. Organize project structure without affecting URLs
2. Apply layouts selectively to specific parts of your application

## Implementation Steps

### Step 1: Create Route Groups
```
app/
  (marketing)/     # Route group for revenue & customers
    revenue/
    customers/
  (auth)/          # Route group for login & register  
    login/
    register/
```

**Important**: Parentheses `()` create route groups that don't affect URLs

### Step 2: Move Root Layout to Marketing Group
```
app/
  (marketing)/
    layout.tsx     # Root layout for marketing pages
    revenue/
    customers/
  (auth)/
    login/
    register/
```

**Critical**: The root `layout.tsx` must NOT exist in the app folder anymore

### Step 3: Create Auth Layout
```typescript
// app/(auth)/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* No header - minimal layout */}
        {children}
        <footer>Footer content</footer>
      </body>
    </html>
  )
}
```

### Step 4: Update Marketing Layout
```typescript
// app/(marketing)/layout.tsx  
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>Header content</header>
        {children}
        <footer>Footer content</footer>
      </body>
    </html>
  )
}
```

### Step 5: Handle Homepage
**Error**: "page.tsx doesn't have a root layout"

**Solution**: Move the root `page.tsx` into the appropriate route group:
```
app/
  (marketing)/
    page.tsx       # Homepage now has marketing layout
    layout.tsx     # Marketing root layout
    revenue/
    customers/
  (auth)/
    layout.tsx     # Auth root layout
    login/
    register/
```

## Result

**URLs remain unchanged**:
- `localhost:3000/` - Marketing layout (header + footer)
- `localhost:3000/revenue` - Marketing layout (header + footer)
- `localhost:3000/customers` - Marketing layout (header + footer)
- `localhost:3000/login` - Auth layout (footer only)
- `localhost:3000/register` - Auth layout (footer only)

**Layouts applied selectively**:
- **Marketing pages**: Full layout with header and footer
- **Auth pages**: Minimal layout with footer only

## Key Concepts

### Route Groups Benefits
1. **URL Structure**: Parentheses don't affect URLs
2. **Organization**: Logical grouping of related routes
3. **Layout Isolation**: Different layouts for different sections
4. **Maintainability**: Easier to manage large applications

### Multiple Root Layouts Rules
1. **No root layout in app folder**: Must be inside route groups
2. **Each route group needs its own layout**: Every route group that needs a layout must have one
3. **Layout inheritance**: Child routes inherit parent layouts
4. **Selective application**: Only affects routes within that group

## Common Use Cases

### E-commerce Application
```
app/
  (shop)/
    layout.tsx     # Full e-commerce layout
    products/
    cart/
    checkout/
  (admin)/
    layout.tsx     # Admin dashboard layout
    dashboard/
    users/
    orders/
  (auth)/
    layout.tsx     # Minimal auth layout
    login/
    register/
```

### SaaS Application
```
app/
  (marketing)/
    layout.tsx     # Marketing site layout
    page.tsx       # Homepage
    pricing/
    about/
  (app)/
    layout.tsx     # App dashboard layout
    dashboard/
    settings/
    profile/
  (auth)/
    layout.tsx     # Auth layout
    login/
    signup/
```

## Best Practices

### Layout Organization
- Keep layouts focused on their specific purpose
- Share common components between layouts when appropriate
- Use descriptive route group names

### File Structure
```
app/
  (marketing)/
    layout.tsx
    components/      # Marketing-specific components
    page.tsx
  (auth)/
    layout.tsx
    components/      # Auth-specific components
  components/        # Shared components
```

### Layout Design Principles
- **Marketing layout**: Full branding, navigation, SEO-focused
- **App layout**: Functional, dashboard-style, user-focused
- **Auth layout**: Minimal, distraction-free, conversion-focused

## Troubleshooting

### Common Errors
1. **"page.tsx doesn't have a root layout"**
   - Solution: Move page.tsx into appropriate route group

2. **Layout not applying**
   - Check: Layout file is named `layout.tsx`
   - Check: Layout is in correct route group
   - Check: Default export is present

3. **URLs not working**
   - Verify: Route groups use parentheses `()`
   - Check: File structure matches expected routes

## Advanced Tips

### Nested Layouts
```
app/
  (marketing)/
    layout.tsx         # Root marketing layout
    products/
      layout.tsx       # Nested product layout
      [id]/
        page.tsx
```

### Conditional Layouts
You can even create more complex routing structures with nested route groups for even more granular control.

## Key Takeaways

1. **Route groups** enable multiple root layouts without affecting URLs
2. **No root layout** should exist in the app folder when using multiple layouts
3. **Selective application** allows different UI paradigms for different app sections
4. **Maintainable organization** keeps related routes and layouts together
5. **Flexible architecture** supports complex application structures

## Common Mistakes to Avoid

- Leaving root layout in app folder when using route groups
- Forgetting to move homepage into appropriate route group
- Not using descriptive route group names
- Creating overly complex nested structures unnecessarily

---

# 12. Next.js Metadata API

## Overview
Learn how to implement SEO-friendly metadata in Next.js using the Metadata API for better search engine optimization and social media sharing.

## What is the Metadata API?
The Metadata API is a powerful Next.js feature that lets you define metadata for each page, ensuring your content looks great when shared or indexed by search engines.

## Two Approaches to Handle Metadata

### 1. Static Metadata Object
Export a static `metadata` object from layout.tsx or page.tsx

### 2. Dynamic Metadata Function  
Export a `generateMetadata` function for dynamic content

## Key Metadata Rules

### Priority and Inheritance
1. **Both layout.tsx and page.tsx** can export metadata
2. **Layout metadata** applies to all its child pages
3. **Page metadata** is specific to that individual page
4. **Top-down order**: Starts from root level and goes deeper
5. **Merging behavior**: When metadata exists in multiple places, they merge together
6. **Override priority**: Page metadata overrides layout metadata for matching properties

## Static Metadata Implementation

### Root Layout Example
```typescript
// app/layout.tsx
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
}
```

### Page-Specific Metadata
```typescript
// app/about/page.tsx
export const metadata = {
  title: 'About - Code Evolution'
}

export default function About() {
  return <div>About Page</div>
}
```

### Result in Browser
- **Homepage** (`/`): Title = "Next.js", Description = "Generated by Next.js"
- **About page** (`/about`): Title = "About - Code Evolution", Description = "Generated by Next.js"

**Why**: The about page title overwrites the layout title, but keeps the layout description since it wasn't redefined.

## Dynamic Metadata Implementation

### When to Use Dynamic Metadata
- Metadata depends on route parameters
- Content comes from external data sources
- Need unique metadata for each dynamic route

### Setup for Dynamic Routes

**Step 1: Define Props Type**
```typescript
type Props = {
  params: Promise<{ productId: string }>
}
```

**Step 2: Component Implementation**
```typescript
export default async function ProductPage({ params }: Props) {
  const { productId } = await params
  return <div>Product {productId}</div>
}
```

**Step 3: Generate Metadata Function**
```typescript
import { Metadata } from 'next'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params
  
  return {
    title: `Product ${productId}`
  }
}
```

### Advanced Dynamic Example with API Fetching
```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params
  
  // Simulate API call
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`)
    }, 100)
  })
  
  return {
    title: `Product ${title}`
  }
}
```

**Result**: 
- `/products/1` → Title: "Product iPhone 1"
- `/products/6` → Title: "Product iPhone 6"

## Important Limitations

### 1. Cannot Mix Both Approaches
❌ **Incorrect** - Cannot use both in the same route segment:
```typescript
export const metadata = { title: 'Static' }
export async function generateMetadata() { /* ... */ }
```

### 2. Client Components Restriction
❌ **Error** - Metadata doesn't work with `'use client'`:
```typescript
'use client'
import { useState } from 'react'

export const metadata = { title: 'Counter' } // ❌ This will cause an error

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**Error Message**: "You're attempting to export metadata from a component marked with 'use client'"

## Client Component Solution Pattern

### Problem
Client components (using hooks, event handlers) can't export metadata directly.

### Solution: Separate Server and Client Components

**Step 1: Create Client Component**
```typescript
// app/counter/Counter.tsx
'use client'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

**Step 2: Server Component with Metadata**
```typescript
// app/counter/page.tsx
import { Counter } from './Counter'

export const metadata = {
  title: 'Counter'
}

export default function CounterPage() {
  return <Counter />
}
```

## Best Practices

### SEO Optimization
```typescript
export const metadata = {
  title: 'About Us - Your Company Name',
  description: 'Learn about our company history, mission, and values.',
  keywords: 'about, company, history, mission',
  openGraph: {
    title: 'About Us - Your Company Name',
    description: 'Learn about our company history, mission, and values.',
    images: ['/og-about.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Your Company Name',
    description: 'Learn about our company history, mission, and values.',
  }
}
```

### Dynamic Content Strategy
```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProduct(params.id)
  
  return {
    title: `${product.name} - Our Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    }
  }
}
```

## Common Use Cases

### Blog Posts
```typescript
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    publishedTime: post.publishedAt,
  }
}
```

### E-commerce Products
```typescript
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)
  
  return {
    title: `${product.name} - Buy Online`,
    description: product.description,
    openGraph: {
      images: product.images,
      type: 'website',
    }
  }
}
```

## Key Takeaways

1. **Two approaches**: Static metadata object or dynamic generateMetadata function
2. **Inheritance and merging**: Child metadata overrides parent metadata for matching properties
3. **Server components only**: Metadata must be in server components, not client components
4. **SEO benefits**: Proper metadata improves search engine indexing and social sharing
5. **Dynamic flexibility**: Use generateMetadata for content that depends on route parameters or external data
6. **Component separation**: Keep client-side logic in separate components when metadata is needed

## Common Mistakes to Avoid

- Trying to use both metadata object and generateMetadata in the same component
- Attempting to export metadata from client components
- Forgetting to await params in generateMetadata function
- Not considering metadata inheritance when structuring layouts
- Missing important SEO metadata like descriptions and Open Graph tags

# 13. Next.js Title Metadata 

## Overview
The title field in metadata is crucial for SEO and defines your document's title. It can be set using either a **string** or an **object** for more advanced control.

## Two Approaches to Set Title

### 1. String Approach (Simple)
```javascript
export const metadata = {
  title: 'About Code Evolution'
}
```
- **Result**: Renders exactly as written in browser's title tag
- **Use case**: When you need a simple, static title

### 2. Object Approach (Advanced Control)
```javascript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    // Object properties go here
  }
}
```
- **Use case**: When you need consistent formatting, templates, or fallbacks

## Three Object Properties

### 1. `default` - Fallback Title

**Purpose**: Acts as fallback for child routes that don't specify their own title

**Example Setup:**
```javascript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Next.js Tutorial - Code Evolution'
  }
}
```

**Child page without title:**
```javascript
// app/blog/page.tsx
export default function BlogPage() {
  // No metadata defined
  return <div>Blog content</div>
}
```

**Result**: 
- Navigate to `/blog` → Title shows: "Next.js Tutorial - Code Evolution"
- The default value becomes the fallback

### 2. `template` - Consistent Formatting

**Purpose**: Adds consistent prefixes or suffixes to child route titles

**Example Setup:**
```javascript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: '%s | Code Evolution'
  }
}
```

**Child page with title:**
```javascript
// app/blog/page.tsx
export const metadata = {
  title: 'Blog'
}
```

**Result**:
- Navigate to `/blog` → Title shows: "Blog | Code Evolution"
- `%s` gets replaced with the child page title ("Blog")
- Perfect for consistent branding across multiple pages

### 3. `absolute` - Override Template

**Purpose**: Breaks free from parent template patterns

**Parent layout with template:**
```javascript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: '%s | Code Evolution'
  }
}
```

**Child page with absolute title:**
```javascript
// app/blog/page.tsx
export const metadata = {
  title: {
    absolute: 'Blog'
  }
}
```

**Result**:
- Navigate to `/blog` → Title shows: "Blog" (clean, no template applied)
- Completely ignores the parent template pattern

## Practical Examples

### E-commerce Site Example
```javascript
// Root layout
export const metadata: Metadata = {
  title: {
    template: '%s | MyStore',
    default: 'MyStore - Best Online Shopping'
  }
}

// Product page
export const metadata = {
  title: 'iPhone 15'
}
// Result: "iPhone 15 | MyStore"

// Special landing page
export const metadata = {
  title: {
    absolute: 'Black Friday Sale - Up to 70% Off!'
  }
}
// Result: "Black Friday Sale - Up to 70% Off!" (no template)
```

### Blog Site Example
```javascript
// Root layout
export const metadata: Metadata = {
  title: {
    template: '%s - Tech Blog',
    default: 'Tech Blog - Latest in Technology'
  }
}

// Article page
export const metadata = {
  title: 'Understanding React Hooks'
}
// Result: "Understanding React Hooks - Tech Blog"

// Home page (no title defined)
// Result: "Tech Blog - Latest in Technology" (uses default)
```

## Key Points to Remember

1. **String vs Object**: Use string for simple titles, object for advanced control
2. **Template Symbol**: `%s` in template gets replaced with child page title
3. **Fallback Behavior**: `default` only applies when child routes have no title
4. **Override Power**: `absolute` completely ignores parent templates
5. **TypeScript Support**: Import `Metadata` type for better development experience

## When to Use Each Approach

| Scenario | Use |
|----------|-----|
| Simple, static page titles | String approach |
| Consistent branding across site | `template` property |
| Fallback for pages without titles | `default` property |
| Breaking from site-wide template | `absolute` property |
| Multi-section site with different patterns | Combination of all properties |

## Best Practices

1. **Set template in root layout** for site-wide consistency
2. **Use default as safety net** for pages that might not have titles
3. **Reserve absolute for special cases** like landing pages or promotions
4. **Keep templates short and brandable** for better SEO
5. **Test title lengths** to ensure they display well in browser tabs and search results

---
# 14. Navigation

## via UI

```js
import Link from "next/link";
<Link href={"/products/1"}>Product 1</Link>; // On doing BACK - takes to previous page
<Link href="/products/3" replace▷ Product 3 </Link> // this takes to Home page directly
```

## Programitically

```js
import { useRouter } from "next/router";
const router = useRouter();

{
  router.push("/");
}
```
---

# 15. Next.js Active Links Styling 

## Overview
Active link styling helps users understand their current location in the application. It's essential for good UX and navigation clarity.

## Setup Prerequisites

**Navigation Data Structure:**
```javascript
const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' }
]
```

**Basic Layout with Links:**
```javascript
// app/(auth)/layout.tsx
import Link from 'next/link'

export default function AuthLayout({ children }) {
  return (
    <div>
      <nav>
        {navLinks.map(link => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  )
}
```

## Step-by-Step Implementation

### Step 1: Import usePathname Hook
```javascript
import { usePathname } from 'next/navigation'
```

**What it does**: Provides the current URL path (e.g., `/register`, `/login`, `/forgot-password`)

### Step 2: Convert to Client Component
```javascript
'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
```

**Why needed**: Hooks only work in client components, not server components (Next.js default)

### Step 3: Get Current Pathname
```javascript
export default function AuthLayout({ children }) {
  const pathname = usePathname()
  
  // Rest of component
}
```

### Step 4: Determine Active Link
```javascript
{navLinks.map(link => {
  const isActive = pathname === link.href || 
    (pathname.startsWith(link.href) && link.href !== '/')
    
  return (
    <Link 
      key={link.name} 
      href={link.href}
      className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
    >
      {link.name}
    </Link>
  )
})}
```

**Logic Explanation:**
- `pathname === link.href`: Exact match check
- `pathname.startsWith(link.href) && link.href !== '/'`: Handles nested routes (prevents root route from always being active)

## Complete Implementation

```javascript
'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' }
]

export default function AuthLayout({ children }) {
  const pathname = usePathname()
  
  return (
    <div>
      <nav>
        {navLinks.map(link => {
          const isActive = pathname === link.href || 
            (pathname.startsWith(link.href) && link.href !== '/')
            
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
            >
              {link.name}
            </Link>
          )
        })}
      </nav>
      {children}
    </div>
  )
}
```

---

# 16. Next.js Params and SearchParams

## Overview
Two essential concepts for handling dynamic routing and query parameters in Next.js navigation.

### Definitions
- **params**: A promise that resolves to an object containing dynamic route parameters (like ID)
- **searchParams**: A promise that resolves to an object containing query parameters (like filters and sorting)

**URL Example**: `/articles/breaking-news-123?language=english`
- `params`: `{ articleId: "breaking-news-123" }`
- `searchParams`: `{ language: "english" }`

## Setting Up Links with Params and SearchParams

### Creating Navigation Links
```javascript
// Home component
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/articles/breaking-news-123?language=english">
        Read in English
      </Link>
      
      <Link href="/articles/breaking-news-123?language=fr">
        Read in French
      </Link>
    </div>
  )
}
```

**URL Structure Breakdown:**
- `/articles/` - base route
- `breaking-news-123` - dynamic route parameter (articleId)
- `?language=english` - query parameter (searchParams)

## Route Setup

### File Structure
```
app/
  articles/
    [articleId]/
      page.tsx
```

### Basic Component Setup
```javascript
// app/articles/[articleId]/page.tsx
import Link from 'next/link'

export default function NewsArticle() {
  return (
    <div>
      <h1>News Article: ID</h1>
      <p>Reading in: language</p>
      
      <div>
        <Link href="/articles/ID?language=english">English</Link>
        <Link href="/articles/ID?language=spanish">Spanish</Link>
        <Link href="/articles/ID?language=french">French</Link>
      </div>
    </div>
  )
}
```

## Accessing Params and SearchParams

### Method 1: Server Components (Recommended)

**Props Type Definition:**
```javascript
type Props = {
  params: Promise<{ articleId: string }>
  searchParams: Promise<{ language?: string }>
}
```

**Implementation:**
```javascript
export default async function NewsArticle({ 
  params, 
  searchParams 
}: Props) {
  // Await the promises
  const { articleId } = await params
  const { language = 'english' } = await searchParams
  
  return (
    <div>
      <h1>News Article: {articleId}</h1>
      <p>Reading in: {language}</p>
      
      <div>
        <Link href={`/articles/${articleId}?language=english`}>English</Link>
        <Link href={`/articles/${articleId}?language=spanish`}>Spanish</Link>
        <Link href={`/articles/${articleId}?language=french`}>French</Link>
      </div>
    </div>
  )
}
```

**Key Points:**
- Use `async/await` since params and searchParams are promises
- Set default values for optional searchParams
- Server components support async operations

### Method 2: Client Components

**❌ This Won't Work:**
```javascript
'use client'

export default async function NewsArticle({ params, searchParams }) {
  // Error: Client components don't support async/await
  const { articleId } = await params
}
```

**✅ Correct Approach:**
```javascript
'use client'
import { use } from 'react'

type Props = {
  params: Promise<{ articleId: string }>
  searchParams: Promise<{ language?: string }>
}

export default function NewsArticle({ params, searchParams }: Props) {
  // Use the 'use' hook instead of async/await
  const { articleId } = use(params)
  const { language = 'english' } = use(searchParams)
  
  return (
    <div>
      <h1>News Article: {articleId}</h1>
      <p>Reading in: {language}</p>
      
      <div>
        <Link href={`/articles/${articleId}?language=english`}>English</Link>
        <Link href={`/articles/${articleId}?language=spanish`}>Spanish</Link>
        <Link href={`/articles/${articleId}?language=french`}>French</Link>
      </div>
    </div>
  )
}
```



## Important Limitations

### Layout Components Restriction

**✅ Available in layout.tsx:**
- `params` - Dynamic route parameters

**❌ NOT available in layout.tsx:**
- `searchParams` - Query parameters

**Example:**
```javascript
// app/articles/layout.tsx
type Props = {
  params: Promise<{ articleId: string }>
  // searchParams is NOT available here
}

export default async function ArticleLayout({ 
  params,
  children 
}: Props & { children: React.ReactNode }) {
  const { articleId } = await params
  // const { language } = await searchParams // ❌ This won't work
  
  return (
    <div>
      <h2>Article Section: {articleId}</h2>
      {children}
    </div>
  )
}
```

## Quick Reference

| Component Type | Access Method | Example |
|---------------|---------------|---------|
| Server Component | `async/await` | `const { id } = await params` |
| Client Component | `use()` hook | `const { id } = use(params)` |
| Layout Component | `async/await` (params only) | `const { id } = await params` |

## Common Use Cases

### E-commerce Product Page
```javascript
// URL: /products/iphone-15?color=blue&storage=256gb
type Props = {
  params: Promise<{ productId: string }>
  searchParams: Promise<{ 
    color?: string
    storage?: string
    variant?: string
  }>
}
```

### Blog Post with Filters
```javascript
// URL: /blog/react-hooks?category=tutorial&difficulty=beginner
type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ 
    category?: string
    difficulty?: string
    tags?: string
  }>
}
```

### User Profile with Tabs
```javascript
// URL: /users/john-doe?tab=posts&sort=recent
type Props = {
  params: Promise<{ userId: string }>
  searchParams: Promise<{ 
    tab?: 'posts' | 'about' | 'followers'
    sort?: 'recent' | 'popular' | 'oldest'
  }>
}
```


## Error Handling

```javascript
export default async function NewsArticle({ params, searchParams }: Props) {
  try {
    const { articleId } = await params
    const { language = 'english' } = await searchParams
    
    // Validate articleId exists
    if (!articleId) {
      return <div>Article not found</div>
    }
    
    return (
      <div>
        <h1>News Article: {articleId}</h1>
        <p>Reading in: {language}</p>
      </div>
    )
  } catch (error) {
    return <div>Error loading article</div>
  }
}
```

---

# 17. Next.js Programmatic Navigation 

## Overview
Programmatic navigation allows you to redirect users automatically without them clicking a link. Essential for form submissions, authentication flows, and user experience improvements.

**Real-world examples:**
- Redirecting after form submission (order confirmation)
- Authentication redirects (login → dashboard)
- Error handling (404 → home page)

## Two Main Approaches

### 1. useRouter Hook (Client Components)
### 2. redirect Function (Server Components)

---

## Method 1: useRouter Hook

### Basic Setup

**File Structure:**
```
app/
  order-product/
    page.tsx
```

**Basic Implementation:**
```javascript
'use client'
import { useRouter } from 'next/navigation'

export default function OrderProduct() {
  const router = useRouter()
  
  const handleClick = () => {
    console.log('Placing your order...')
    // Simulate order processing
    router.push('/')
  }
  
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>
        Place Order
      </button>
    </>
  )
}
```

**Key Requirements:**
- Must use `'use client'` directive
- Import from `'next/navigation'` (not `'next/router'`)
- Only works in client components

### useRouter Methods

#### 1. router.push() - Navigate Forward
```javascript
const router = useRouter()

// Navigate to different routes
router.push('/')                    // Home page
router.push('/products')            // Products page
router.push('/products/123')        // Dynamic route
router.push('/search?q=laptop')     // With query parameters
```

**Behavior**: Adds new entry to browser history (user can go back)

#### 2. router.replace() - Replace Current Page
```javascript
const router = useRouter()

router.replace('/login')
```

**Behavior**: Replaces current page in history (user can't go back to previous page)
**Use case**: Login redirects, error corrections

#### 3. router.back() - Go Back
```javascript
const router = useRouter()

router.back()
```

**Behavior**: Same as browser's back button

#### 4. router.forward() - Go Forward
```javascript
const router = useRouter()

router.forward()
```

**Behavior**: Same as browser's forward button

---

## Method 2: redirect Function

### Basic Setup

**Use in Server Components:**
```javascript
import { redirect } from 'next/navigation'

export default function ProductReview({ params, searchParams }) {
  const { reviewId } = params
  
  // Redirect if invalid review ID
  if (parseInt(reviewId) > 1000) {
    redirect('/products')
  }
  
  return (
    <div>
      <h1>Review #{reviewId}</h1>
    </div>
  )
}
```

### Complete Example with Conditional Logic

```javascript
// app/products/[productId]/reviews/[reviewId]/page.tsx
import { redirect } from 'next/navigation'

type Props = {
  params: Promise<{ 
    productId: string
    reviewId: string 
  }>
}

export default async function ProductReview({ params }: Props) {
  const { productId, reviewId } = await params
  
  // Validation logic
  if (parseInt(reviewId) > 1000) {
    // Redirect to products list instead of showing 404
    redirect('/products')
  }
  
  if (!productId || !reviewId) {
    redirect('/products')
  }
  
  return (
    <div>
      <h1>Product {productId} - Review #{reviewId}</h1>
      <p>Review content goes here...</p>
    </div>
  )
}
```

### Advanced redirect Examples

#### Authentication Check
```javascript
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

export default async function Dashboard() {
  const user = await auth.getCurrentUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return <div>Welcome to Dashboard, {user.name}!</div>
}
```

#### Role-based Redirects
```javascript
import { redirect } from 'next/navigation'

export default async function AdminPanel({ params }) {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/login')
  }
  
  if (user.role !== 'admin') {
    redirect('/unauthorized')
  }
  
  return <div>Admin Panel</div>
}
```

---

## Comparison: useRouter vs redirect

| Feature | useRouter Hook | redirect Function |
|---------|----------------|-------------------|
| **Component Type** | Client Components Only | Server Components Only |
| **When Executes** | On user interaction | During render/load |
| **Use Cases** | Form submissions, button clicks | Authentication, validation |
| **Browser History** | Can control (push/replace) | Always replaces |
| **Performance** | Client-side navigation | Server-side redirect |

---

## Best Practices

### 1. Choose the Right Method
- **useRouter**: User-triggered navigation (clicks, form submissions)
- **redirect**: Automatic redirects (auth, validation, errors)

### 2. Handle Loading States
```javascript
'use client'
const [isNavigating, setIsNavigating] = useState(false)

const handleNavigation = async () => {
  setIsNavigating(true)
  // Process...
  router.push('/destination')
}
```

### 3. Provide User Feedback
```javascript
const handleSubmit = async () => {
  try {
    await processOrder()
    // Show success message before redirect
    toast.success('Order placed successfully!')
    setTimeout(() => router.push('/confirmation'), 1000)
  } catch (error) {
    toast.error('Failed to place order')
  }
}
```

### 4. Validate Before Navigation
```javascript
const handleNavigation = () => {
  if (!isFormValid()) {
    alert('Please fill all required fields')
    return
  }
  
  router.push('/next-step')
}
```

### 5. Consider UX with replace vs push
```javascript
// Use replace for corrections (user shouldn't go back)
router.replace('/corrected-url')

// Use push for normal flow (user can go back)
router.push('/next-page')
```

---

## Troubleshooting

### Common Errors:

1. **"useRouter must be used in client component"**
   - Solution: Add `'use client'` directive

2. **"Cannot read properties of undefined (reading 'push')"**
   - Solution: Ensure useRouter is called inside component, not at module level

3. **"redirect is not a function"**
   - Solution: Import from `'next/navigation'`, not `'next/router'`

### Debug Tips:
```javascript
// Log navigation attempts
const router = useRouter()
console.log('Navigating to:', destination)
router.push(destination)
```





