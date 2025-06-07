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
