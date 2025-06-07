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
